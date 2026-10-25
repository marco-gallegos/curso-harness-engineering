// app.js - Lógica principal del Wizard, Persistencia en LocalStorage y Evaluación
(function() {
  'use strict';

  // --- Constantes y Claves de LocalStorage ---
  const STORAGE_KEYS = {
    CURRENT_STEP: 'harness_current_step',
    COMPLETED_STEPS: 'harness_completed_steps',
    ASSESSMENT_RESULTS: 'harness_assessment_results',
    STUDENT_NAME: 'harness_student_name',
    THEME: 'harness_theme'
  };

  const PASSING_PERCENTAGE = 75; // 75% mínimo para aprobar (9 de 12)

  // --- Estado Global de la Aplicación ---
  const state = {
    currentStep: 0,
    completedSteps: new Set(),
    assessmentAnswers: {},
    assessmentResult: null,
    studentName: 'Profesional de Negocios',
    theme: 'light',
    isMobileSidebarOpen: false
  };

  // --- Inicialización de Mermaid ---
  function initMermaid(isDark) {
    if (window.mermaid) {
      window.mermaid.initialize({
        startOnLoad: false,
        theme: isDark ? 'dark' : 'default',
        securityLevel: 'loose',
        fontFamily: 'system-ui, -apple-system, sans-serif'
      });
    }
  }

  // --- Carga del Estado desde LocalStorage ---
  function loadPersistedState() {
    try {
      // Tema
      const savedTheme = localStorage.getItem(STORAGE_KEYS.THEME);
      if (savedTheme) {
        state.theme = savedTheme;
      } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        state.theme = 'dark';
      }

      // Nombre del estudiante
      const savedName = localStorage.getItem(STORAGE_KEYS.STUDENT_NAME);
      if (savedName) state.studentName = savedName;

      // Pasos completados
      const savedCompleted = localStorage.getItem(STORAGE_KEYS.COMPLETED_STEPS);
      if (savedCompleted) {
        const parsed = JSON.parse(savedCompleted);
        if (Array.isArray(parsed)) state.completedSteps = new Set(parsed);
      }

      // Paso actual
      const savedStep = localStorage.getItem(STORAGE_KEYS.CURRENT_STEP);
      if (savedStep !== null) {
        const stepNum = parseInt(savedStep, 10);
        if (!isNaN(stepNum) && stepNum >= 0 && stepNum < window.COURSE_MODULES.length) {
          state.currentStep = stepNum;
        }
      }

      // Resultados de la evaluación
      const savedAssessment = localStorage.getItem(STORAGE_KEYS.ASSESSMENT_RESULTS);
      if (savedAssessment) {
        state.assessmentResult = JSON.parse(savedAssessment);
        if (state.assessmentResult && state.assessmentResult.studentName) {
          state.studentName = state.assessmentResult.studentName;
        }
      }
    } catch (e) {
      console.error('Error al cargar estado de LocalStorage:', e);
    }
  }

  // --- Guardado en LocalStorage ---
  function saveState() {
    try {
      localStorage.setItem(STORAGE_KEYS.CURRENT_STEP, state.currentStep.toString());
      localStorage.setItem(STORAGE_KEYS.COMPLETED_STEPS, JSON.stringify(Array.from(state.completedSteps)));
      localStorage.setItem(STORAGE_KEYS.THEME, state.theme);
      localStorage.setItem(STORAGE_KEYS.STUDENT_NAME, state.studentName);
      if (state.assessmentResult) {
        localStorage.setItem(STORAGE_KEYS.ASSESSMENT_RESULTS, JSON.stringify(state.assessmentResult));
      }
    } catch (e) {
      console.error('Error al guardar estado en LocalStorage:', e);
    }
  }

  // --- Gestión de Tema Claro / Oscuro ---
  function applyTheme(theme) {
    state.theme = theme;
    const htmlEl = document.documentElement;
    if (theme === 'dark') {
      htmlEl.classList.add('dark');
    } else {
      htmlEl.classList.remove('dark');
    }
    const themeIcon = document.getElementById('theme-toggle-icon');
    if (themeIcon) {
      themeIcon.innerHTML = theme === 'dark' 
        ? `<svg class="w-5 h-5 text-amber-300" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clip-rule="evenodd"></path></svg>`
        : `<svg class="w-5 h-5 text-slate-600" fill="currentColor" viewBox="0 0 20 20"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path></svg>`;
    }
    initMermaid(theme === 'dark');
    saveState();
  }

  function toggleTheme() {
    applyTheme(state.theme === 'dark' ? 'light' : 'dark');
    renderCurrentStep(); // Re-render mermaid con nuevo tema
  }

  // --- Cálculo de Progreso Global ---
  function calculateProgress() {
    const totalSteps = window.COURSE_MODULES.length;
    const completedCount = state.completedSteps.size;
    const percentage = Math.round((completedCount / totalSteps) * 100);
    return { completedCount, totalSteps, percentage };
  }

  function updateProgressBar() {
    const { completedCount, totalSteps, percentage } = calculateProgress();
    const barEl = document.getElementById('global-progress-bar');
    const sideBarEl = document.getElementById('sidebar-progress-bar');
    const labelEl = document.getElementById('global-progress-label');
    const badgeEl = document.getElementById('global-progress-percentage');

    if (barEl) barEl.style.width = `${percentage}%`;
    if (sideBarEl) sideBarEl.style.width = `${percentage}%`;
    if (labelEl) labelEl.textContent = `${completedCount} de ${totalSteps} módulos`;
    if (badgeEl) badgeEl.textContent = `${percentage}%`;
  }

  // --- Renderizado de Sidebar y Lista de Pasos ---
  function renderSidebar() {
    const container = document.getElementById('sidebar-steps-list');
    if (!container) return;

    let html = '';
    window.COURSE_MODULES.forEach((mod, idx) => {
      const isActive = idx === state.currentStep;
      const isCompleted = state.completedSteps.has(idx);

      html += `
        <button 
          onclick="window.HarnessApp.goToStep(${idx})"
          class="step-item w-full text-left p-3 rounded-xl border transition-all mb-2 flex items-start gap-3 ${
            isActive 
              ? 'active border-indigo-500 bg-indigo-50/70 dark:bg-indigo-950/40 text-indigo-900 dark:text-indigo-200 shadow-sm' 
              : 'border-transparent hover:border-slate-200 dark:hover:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/50 text-slate-700 dark:text-slate-300'
          }"
        >
          <div class="mt-0.5 flex-shrink-0">
            ${
              isCompleted 
                ? `<div class="w-6 h-6 rounded-full bg-emerald-500 text-white flex items-center justify-center text-xs font-bold shadow-sm">✓</div>`
                : isActive
                ? `<div class="w-6 h-6 rounded-full bg-indigo-600 text-white flex items-center justify-center text-xs font-bold shadow-sm">${mod.number}</div>`
                : `<div class="w-6 h-6 rounded-full border border-slate-300 dark:border-slate-700 text-slate-500 dark:text-slate-400 flex items-center justify-center text-xs font-medium">${mod.number}</div>`
            }
          </div>
          <div class="flex-1 min-w-0">
            <div class="flex items-center justify-between gap-1 mb-0.5">
              <span class="text-[10px] uppercase font-bold tracking-wider ${isActive ? 'text-indigo-600 dark:text-indigo-400' : 'text-slate-400 dark:text-slate-500'}">
                ${mod.phase}
              </span>
              <span class="text-[10px] text-slate-400 dark:text-slate-500">${mod.readingTime.split(' ')[0]} min</span>
            </div>
            <h4 class="text-xs font-semibold leading-tight truncate ${isActive ? 'text-indigo-950 dark:text-white' : 'text-slate-800 dark:text-slate-200'}">
              ${mod.title.replace(/^Módulo \d+: /, '')}
            </h4>
          </div>
        </button>
      `;
    });

    container.innerHTML = html;
  }

  // --- Renderizado del Contenido del Módulo Actual ---
  function renderCurrentStep() {
    const mod = window.COURSE_MODULES[state.currentStep];
    const mainContainer = document.getElementById('step-content-area');
    if (!mainContainer || !mod) return;

    // Actualizar sidebar visual
    renderSidebar();
    updateProgressBar();

    // Si es el módulo de evaluación final
    if (mod.isAssessment) {
      renderAssessmentView(mainContainer);
      attachCodeCopyButtons();
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    // Módulos normales (0 a 8)
    const isCompleted = state.completedSteps.has(state.currentStep);

    let sectionsHtml = '';
    if (mod.sections && mod.sections.length > 0) {
      sectionsHtml = mod.sections.map((sec, i) => `
        <div class="mb-8 pb-8 ${i < mod.sections.length - 1 ? 'border-b border-slate-200 dark:border-slate-800' : ''}">
          <h3 class="text-lg md:text-xl font-bold text-slate-900 dark:text-slate-100 mb-4 flex items-center gap-2">
            ${sec.title}
          </h3>
          <div class="text-slate-700 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            ${sec.content}
          </div>
        </div>
      `).join('');
    }

    let objectivesHtml = '';
    if (mod.objectives && mod.objectives.length > 0) {
      objectivesHtml = `
        <div class="p-5 rounded-2xl bg-indigo-50/60 dark:bg-indigo-950/20 border border-indigo-100 dark:border-indigo-900/40 mb-8">
          <h4 class="text-xs uppercase font-bold tracking-wider text-indigo-700 dark:text-indigo-300 mb-3 flex items-center gap-1.5">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            Objetivos de Aprendizaje del Módulo
          </h4>
          <ul class="space-y-2">
            ${mod.objectives.map(obj => `
              <li class="flex items-start gap-2.5 text-sm text-slate-700 dark:text-slate-300">
                <span class="text-indigo-500 font-bold mt-0.5">•</span>
                <span>${obj}</span>
              </li>
            `).join('')}
          </ul>
        </div>
      `;
    }

    mainContainer.innerHTML = `
      <div class="fade-in-step">
        <!-- Encabezado del Módulo -->
        <div class="mb-6">
          <div class="flex flex-wrap items-center gap-2 mb-2">
            <span class="px-2.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800">
              ${mod.phase}: ${mod.phaseTitle}
            </span>
            <span class="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1">
              <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              ${mod.readingTime}
            </span>
          </div>
          <h1 class="text-2xl md:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-3">
            ${mod.title}
          </h1>
          <p class="text-base md:text-lg text-slate-600 dark:text-slate-400 leading-normal">
            ${mod.subtitle}
          </p>
        </div>

        ${objectivesHtml}

        <!-- Secciones de Contenido -->
        <div class="prose dark:prose-invert max-w-none">
          ${sectionsHtml}
        </div>

        <!-- Tarjeta de Finalización del Paso -->
        <div class="mt-10 p-6 rounded-2xl bg-gradient-to-r from-slate-50 to-indigo-50/30 dark:from-slate-900 dark:to-indigo-950/20 border border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h4 class="font-bold text-slate-900 dark:text-slate-100 text-sm mb-1">
              ${isCompleted ? '✅ Has completado este módulo' : '¿Terminaste de leer este tema?'}
            </h4>
            <p class="text-xs text-slate-500 dark:text-slate-400">
              ${isCompleted ? 'Tu avance ha quedado registrado en tu navegador.' : 'Márcalo como completado para registrar tu progreso en el arnés.'}
            </p>
          </div>
          <button 
            onclick="window.HarnessApp.toggleStepComplete(${state.currentStep})"
            class="px-5 py-2.5 rounded-xl font-semibold text-sm transition-all shadow-sm flex items-center gap-2 ${
              isCompleted
                ? 'bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-800 hover:bg-emerald-200'
                : 'bg-indigo-600 hover:bg-indigo-700 text-white shadow-indigo-500/25'
            }"
          >
            <span>${isCompleted ? 'Completado ✓' : 'Marcar como Completado ✓'}</span>
          </button>
        </div>
      </div>
    `;

    // Renderizar Mermaid Diagrams
    setTimeout(() => {
      if (window.mermaid) {
        try {
          if (typeof window.mermaid.run === 'function') {
            window.mermaid.run({ querySelector: '.mermaid' });
          } else if (typeof window.mermaid.init === 'function') {
            window.mermaid.init(undefined, document.querySelectorAll('.mermaid'));
          }
        } catch (e) {
          console.warn('Mermaid render error:', e);
        }
      }
    }, 60);

    // Adjuntar botones de copiar en bloques de código
    attachCodeCopyButtons();

    // Actualizar botones del Stepper inferior
    updateStepperButtons();

    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // --- Actualizar Controles de Navegación Inferior (Stepper) ---
  function updateStepperButtons() {
    const prevBtn = document.getElementById('stepper-prev-btn');
    const nextBtn = document.getElementById('stepper-next-btn');
    const stepIndicator = document.getElementById('stepper-indicator');

    const totalSteps = window.COURSE_MODULES.length;
    const current = state.currentStep;

    if (stepIndicator) {
      stepIndicator.textContent = `Paso ${current + 1} de ${totalSteps}`;
    }

    if (prevBtn) {
      if (current === 0) {
        prevBtn.disabled = true;
        prevBtn.classList.add('opacity-40', 'cursor-not-allowed');
      } else {
        prevBtn.disabled = false;
        prevBtn.classList.remove('opacity-40', 'cursor-not-allowed');
      }
    }

    if (nextBtn) {
      if (current === totalSteps - 1) {
        nextBtn.innerHTML = `<span>Finalizar Curso</span> <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>`;
      } else if (current === totalSteps - 2) {
        nextBtn.innerHTML = `<span>Ir a la Evaluación Final</span> <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>`;
      } else {
        nextBtn.innerHTML = `<span>Siguiente Módulo</span> <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>`;
      }
    }
  }

  // --- Botones de Copiar Código ---
  function attachCodeCopyButtons() {
    const blocks = document.querySelectorAll('.code-preview-block');
    blocks.forEach(block => {
      if (block.querySelector('.copy-btn')) return; // Evitar duplicar

      const copyBtn = document.createElement('button');
      copyBtn.className = 'copy-btn';
      copyBtn.innerHTML = `
        <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path></svg>
        <span>Copiar</span>
      `;

      copyBtn.addEventListener('click', () => {
        const pre = block.querySelector('pre');
        if (!pre) return;
        const text = pre.innerText;

        navigator.clipboard.writeText(text).then(() => {
          copyBtn.classList.add('copied');
          copyBtn.innerHTML = `
            <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
            <span>¡Copiado!</span>
          `;
          setTimeout(() => {
            copyBtn.classList.remove('copied');
            copyBtn.innerHTML = `
              <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path></svg>
              <span>Copiar</span>
            `;
          }, 2000);
        });
      });

      block.appendChild(copyBtn);
    });
  }

  // --- RENDERIZADO DE EVALUACIÓN FINAL (Paso 9) ---
  function renderAssessmentView(container) {
    const hasResults = !!state.assessmentResult;

    if (hasResults) {
      renderAssessmentResultsView(container);
    } else {
      renderAssessmentQuizView(container);
    }
  }

  // Vista 1: Cuestionario Interactivo
  function renderAssessmentQuizView(container) {
    const questions = window.ASSESSMENT_QUESTIONS;
    const answeredCount = Object.keys(state.assessmentAnswers).length;

    let questionsHtml = questions.map((q, qIdx) => {
      const selectedOpt = state.assessmentAnswers[q.id];

      return `
        <div class="mb-8 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm" id="question-card-${q.id}">
          <div class="flex items-center justify-between gap-2 mb-3">
            <span class="text-xs uppercase font-bold tracking-wider text-indigo-600 dark:text-indigo-400">
              Pregunta ${qIdx + 1} de ${questions.length} • ${q.moduleName}
            </span>
            ${selectedOpt !== undefined ? `<span class="text-xs font-semibold text-emerald-600 dark:text-emerald-400 flex items-center gap-1">Respondida ✓</span>` : `<span class="text-xs text-slate-400">Pendiente</span>`}
          </div>
          <h3 class="text-base md:text-lg font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            ${q.question}
          </h3>
          <div class="space-y-2.5">
            ${q.options.map((opt, optIdx) => {
              const isSelected = selectedOpt === optIdx;
              return `
                <div 
                  onclick="window.HarnessApp.selectOption(${q.id}, ${optIdx})"
                  class="quiz-option p-3.5 rounded-xl text-sm flex items-start gap-3 transition-all ${
                    isSelected ? 'selected' : 'bg-slate-50/50 dark:bg-slate-800/40 text-slate-700 dark:text-slate-300'
                  }"
                >
                  <div class="w-5 h-5 rounded-full border flex items-center justify-center flex-shrink-0 mt-0.5 ${
                    isSelected 
                      ? 'border-indigo-600 bg-indigo-600 text-white text-xs font-bold' 
                      : 'border-slate-300 dark:border-slate-600'
                  }">
                    ${isSelected ? '●' : String.fromCharCode(65 + optIdx)}
                  </div>
                  <div class="flex-1 text-slate-800 dark:text-slate-200 leading-relaxed font-normal">
                    ${opt}
                  </div>
                </div>
              `;
            }).join('')}
          </div>
        </div>
      `;
    }).join('');

    container.innerHTML = `
      <div class="fade-in-step">
        <div class="mb-8">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-purple-100 dark:bg-purple-950 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-800">
              Evaluación Final Oficial
            </span>
            <span class="text-xs text-slate-500">12 Preguntas de Opción Múltiple</span>
          </div>
          <h1 class="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-3">
            Examen de Certificación: Harness Engineer Practitioner
          </h1>
          <p class="text-slate-600 dark:text-slate-400 text-base leading-normal mb-4">
            Valida los conocimientos adquiridos a lo largo de las 4 fases. Para aprobar se requiere un puntaje mínimo del <strong>75%</strong> (9 respuestas correctas). Tus respuestas y calificaciones quedarán almacenadas en tu navegador (<strong>LocalStorage</strong>).
          </p>
          
          <!-- Entrada del Nombre del Alumno -->
          <div class="p-5 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 mb-6">
            <label for="student-name-input" class="block text-xs uppercase font-bold text-slate-700 dark:text-slate-300 mb-1.5">
              Tu Nombre Completo (para emisión de Certificado):
            </label>
            <div class="flex flex-col sm:flex-row gap-3">
              <input 
                type="text" 
                id="student-name-input" 
                value="${state.studentName || ''}" 
                placeholder="Ej. Dra. María González / Lic. Carlos Ruiz"
                class="flex-1 px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                onchange="window.HarnessApp.updateStudentName(this.value)"
              />
              <span class="text-xs text-slate-500 self-center">Aparecerá en tu credencial al aprobar.</span>
            </div>
          </div>
        </div>

        <!-- Indicador de preguntas respondidas -->
        <div class="sticky top-20 z-10 p-3 mb-6 rounded-xl bg-white/90 dark:bg-slate-900/90 backdrop-blur border border-slate-200 dark:border-slate-800 shadow-sm flex items-center justify-between">
          <span class="text-xs font-semibold text-slate-700 dark:text-slate-300">
            Progreso del examen: <span id="answered-counter" class="font-bold text-indigo-600 dark:text-indigo-400">${answeredCount}</span> de ${questions.length} respondidas
          </span>
          <button 
            onclick="window.HarnessApp.submitAssessment()"
            class="px-4 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-xs shadow-sm transition-all"
          >
            Enviar y Calificar Examen
          </button>
        </div>

        <!-- Listado de Preguntas -->
        <div class="space-y-6">
          ${questionsHtml}
        </div>

        <!-- Botón de Envío Inferior -->
        <div class="mt-8 p-6 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-center">
          <p class="text-sm text-slate-600 dark:text-slate-400 mb-4">
            Al hacer clic en calificar, el sistema evaluará tus respuestas, registrará el resultado en LocalStorage y revelará las retroalimentaciones conceptuales.
          </p>
          <button 
            onclick="window.HarnessApp.submitAssessment()"
            class="px-8 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-bold text-sm shadow-lg shadow-indigo-500/25 transition-all transform hover:-translate-y-0.5"
          >
            Finalizar y Guardar Resultados
          </button>
        </div>
      </div>
    `;

    updateStepperButtons();
  }

  // Vista 2: Resultados, Certificado y Revisión de Respuestas
  function renderAssessmentResultsView(container) {
    const res = state.assessmentResult;
    const questions = window.ASSESSMENT_QUESTIONS;
    const isPassed = res.passed;

    let reviewCardsHtml = questions.map((q, idx) => {
      const userAns = res.answers[q.id];
      const isCorrect = userAns === q.correctIndex;

      return `
        <div class="mb-6 p-5 rounded-2xl border ${isCorrect ? 'border-emerald-200 dark:border-emerald-900/60 bg-emerald-50/20' : 'border-rose-200 dark:border-rose-900/60 bg-rose-50/20'}">
          <div class="flex items-center justify-between gap-2 mb-2">
            <span class="text-xs uppercase font-bold tracking-wider ${isCorrect ? 'text-emerald-700 dark:text-emerald-400' : 'text-rose-700 dark:text-rose-400'}">
              Pregunta ${idx + 1} • ${isCorrect ? '¡Correcto! ✓' : 'Incorrecto ✗'}
            </span>
            <span class="text-xs text-slate-500">${q.moduleName}</span>
          </div>
          <h4 class="font-bold text-slate-900 dark:text-slate-100 text-sm mb-3">
            ${q.question}
          </h4>
          
          <div class="space-y-2 mb-3">
            ${q.options.map((opt, optIdx) => {
              const isUserChoice = userAns === optIdx;
              const isRealCorrect = q.correctIndex === optIdx;

              let styleClass = 'border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400';
              if (isRealCorrect) styleClass = 'border-emerald-500 bg-emerald-100/60 dark:bg-emerald-950/60 font-semibold text-emerald-900 dark:text-emerald-200';
              if (isUserChoice && !isRealCorrect) styleClass = 'border-rose-400 bg-rose-100/60 dark:bg-rose-950/60 text-rose-900 dark:text-rose-200';

              return `
                <div class="p-2.5 rounded-lg border text-xs flex items-start gap-2.5 ${styleClass}">
                  <span class="font-bold">${String.fromCharCode(65 + optIdx)}.</span>
                  <span class="flex-1">${opt}</span>
                  ${isRealCorrect ? `<span class="text-emerald-700 font-bold">Respuesta Correcta</span>` : ''}
                  ${isUserChoice && !isRealCorrect ? `<span class="text-rose-700 font-bold">Tu Selección</span>` : ''}
                </div>
              `;
            }).join('')}
          </div>

          <div class="p-3 rounded-xl bg-slate-100 dark:bg-slate-800/80 text-xs text-slate-700 dark:text-slate-300">
            <strong>Explicación:</strong> ${q.explanation}
          </div>
        </div>
      `;
    }).join('');

    const formattedDate = new Date(res.timestamp).toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });

    container.innerHTML = `
      <div class="fade-in-step">
        <!-- Banner de Calificación -->
        <div class="p-6 md:p-8 rounded-3xl ${isPassed ? 'bg-gradient-to-br from-emerald-600 to-teal-700 text-white' : 'bg-gradient-to-br from-rose-600 to-amber-700 text-white'} shadow-xl mb-8">
          <div class="flex flex-col md:flex-row items-center justify-between gap-6">
            <div class="text-center md:text-left">
              <span class="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white/20 mb-2">
                ${isPassed ? '🏆 Certificación Aprobada' : '⚠️ Intento No Superado'}
              </span>
              <h1 class="text-2xl md:text-4xl font-black mb-2">
                ${isPassed ? '¡Felicitaciones, Harness Engineer Practitioner!' : 'Casi lo logras. Te recomendamos repasar.'}
              </h1>
              <p class="text-white/90 text-sm md:text-base max-w-xl">
                ${isPassed 
                  ? `Has demostrado dominio integral de los conceptos de Markdown, Antigravity, Slidev, Mermaid, Context Engineering, Prompts, Git y MCP.` 
                  : `Se requiere un mínimo de 75% (${Math.ceil(questions.length * 0.75)} de ${questions.length}) para obtener el certificado. Revisa las explicaciones abajo y vuelve a intentarlo.`}
              </p>
              <p class="text-xs text-white/70 mt-3">Evaluado el: ${formattedDate} • Registrado en LocalStorage</p>
            </div>
            <div class="flex flex-col items-center justify-center p-6 bg-white/10 backdrop-blur rounded-2xl border border-white/20 min-w-[160px] text-center">
              <span class="text-4xl md:text-5xl font-black">${res.percentage}%</span>
              <span class="text-xs uppercase font-semibold tracking-wider text-white/80 mt-1">
                ${res.score} de ${res.total} Aciertos
              </span>
            </div>
          </div>
        </div>

        <!-- CERTIFICADO OFICIAL IMPRIMIBLE (Si Aprobó) -->
        ${isPassed ? `
          <div class="mb-10 no-print flex justify-between items-center">
            <div>
              <h3 class="text-lg font-bold text-slate-900 dark:text-slate-100">Certificado Digital de Finalización</h3>
              <p class="text-xs text-slate-500">Puedes imprimirlo directamente o guardarlo en formato PDF.</p>
            </div>
            <button 
              onclick="window.print()"
              class="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-xs flex items-center gap-2 shadow-sm transition-all"
            >
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"></path></svg>
              <span>Imprimir / Guardar en PDF</span>
            </button>
          </div>

          <!-- Estructura del Certificado -->
          <div id="printable-certificate" class="certificate-container p-8 md:p-12 rounded-3xl shadow-xl mb-10 text-center relative overflow-hidden">
            <div class="border-4 border-slate-300 dark:border-slate-700 p-6 md:p-8 rounded-2xl">
              <div class="text-xs tracking-widest uppercase font-bold text-indigo-600 dark:text-indigo-400 mb-2">
                CERTIFICADO DE ACREDITACIÓN PROFESIONAL
              </div>
              <h2 class="text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-slate-100 mb-4 tracking-tight">
                HARNESS ENGINEER PRACTITIONER
              </h2>
              <p class="text-xs text-slate-500 uppercase tracking-wider mb-2">Se otorga con distinción de honor a:</p>
              <div class="text-2xl md:text-4xl font-serif font-black text-indigo-900 dark:text-indigo-200 mb-4 underline decoration-indigo-400/50 underline-offset-8">
                ${state.studentName || 'Profesional de Negocios'}
              </div>
              <p class="text-xs md:text-sm text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed mb-6">
                Por haber completado satisfactoriamente los 8 módulos del programa intensivo y validado sus competencias en <strong>Markdown, Agentes Antigravity, Diapositivas Slidev, Diagramas Mermaid, Context Engineering, Prompt Engineering, Control de Versiones con Git y Servidores MCP</strong>.
              </p>
              <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-slate-200 dark:border-slate-800 text-xs text-slate-500">
                <div>
                  <strong class="block text-slate-800 dark:text-slate-200">Fecha de Validación</strong>
                  <span>${formattedDate.split(',')[0]}</span>
                </div>
                <div>
                  <strong class="block text-slate-800 dark:text-slate-200">Calificación Obtenida</strong>
                  <span class="text-emerald-600 font-bold">${res.percentage}% (${res.score}/${res.total})</span>
                </div>
                <div>
                  <strong class="block text-slate-800 dark:text-slate-200">ID de Certificación</strong>
                  <span class="font-mono text-[11px]">HE-${Math.abs(res.timestamp).toString(16).toUpperCase().slice(-8)}</span>
                </div>
              </div>
            </div>
          </div>
        ` : ''}

        <!-- Botones de Acción -->
        <div class="flex flex-wrap items-center justify-between gap-4 p-4 rounded-2xl bg-slate-100 dark:bg-slate-900 mb-8 no-print">
          <div class="text-xs text-slate-500">
            Registro almacenado permanentemente en LocalStorage de este navegador.
          </div>
          <button 
            onclick="window.HarnessApp.retakeAssessment()"
            class="px-4 py-2 rounded-xl bg-slate-200 hover:bg-slate-300 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 text-xs font-semibold transition-all flex items-center gap-1.5"
          >
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path></svg>
            <span>Repetir Evaluación</span>
          </button>
        </div>

        <!-- Revisión Detallada Pregunta por Pregunta -->
        <div class="no-print">
          <h3 class="text-lg font-bold text-slate-900 dark:text-slate-100 mb-4">
            Auditoría de Respuestas y Retroalimentación
          </h3>
          ${reviewCardsHtml}
        </div>
      </div>
    `;

    updateStepperButtons();
  }

  // --- API Pública de la Aplicación ---
  window.HarnessApp = {
    init: function() {
      loadPersistedState();
      applyTheme(state.theme);
      renderSidebar();
      updateProgressBar();
      renderCurrentStep();

      // Atajos de teclado (Flechas izquierda / derecha para navegar)
      window.addEventListener('keydown', (e) => {
        if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
        if (e.key === 'ArrowRight') {
          window.HarnessApp.nextStep();
        } else if (e.key === 'ArrowLeft') {
          window.HarnessApp.prevStep();
        }
      });
    },

    goToStep: function(index) {
      if (index >= 0 && index < window.COURSE_MODULES.length) {
        state.currentStep = index;
        saveState();
        renderCurrentStep();
        // Cerrar sidebar en móviles
        const sidebar = document.getElementById('sidebar-drawer');
        const backdrop = document.getElementById('sidebar-backdrop');
        if (sidebar && sidebar.classList.contains('drawer-open')) {
          sidebar.classList.remove('drawer-open');
        }
        if (backdrop && backdrop.classList.contains('active')) {
          backdrop.classList.remove('active');
        }
      }
    },

    nextStep: function() {
      if (state.currentStep < window.COURSE_MODULES.length - 1) {
        // Marcar el paso actual como completado si no lo está
        state.completedSteps.add(state.currentStep);
        this.goToStep(state.currentStep + 1);
      }
    },

    prevStep: function() {
      if (state.currentStep > 0) {
        this.goToStep(state.currentStep - 1);
      }
    },

    toggleStepComplete: function(stepIndex) {
      if (state.completedSteps.has(stepIndex)) {
        state.completedSteps.delete(stepIndex);
      } else {
        state.completedSteps.add(stepIndex);
      }
      saveState();
      renderCurrentStep();
    },

    toggleTheme: function() {
      toggleTheme();
    },

    toggleMobileSidebar: function() {
      const sidebar = document.getElementById('sidebar-drawer');
      const backdrop = document.getElementById('sidebar-backdrop');
      if (sidebar) {
        sidebar.classList.toggle('drawer-open');
      }
      if (backdrop) {
        backdrop.classList.toggle('active');
      }
    },

    updateStudentName: function(name) {
      state.studentName = name.trim() || 'Profesional de Negocios';
      saveState();
    },

    selectOption: function(questionId, optionIndex) {
      state.assessmentAnswers[questionId] = optionIndex;
      
      // Actualizar tarjeta visual
      const card = document.getElementById(`question-card-${questionId}`);
      if (card) {
        const options = card.querySelectorAll('.quiz-option');
        options.forEach((optEl, idx) => {
          if (idx === optionIndex) {
            optEl.classList.add('selected');
            const circle = optEl.querySelector('div');
            if (circle) circle.textContent = '●';
          } else {
            optEl.classList.remove('selected');
            const circle = optEl.querySelector('div');
            if (circle) circle.textContent = String.fromCharCode(65 + idx);
          }
        });
      }

      // Contador de respondidas
      const counterEl = document.getElementById('answered-counter');
      if (counterEl) {
        counterEl.textContent = Object.keys(state.assessmentAnswers).length;
      }
    },

    submitAssessment: function() {
      const questions = window.ASSESSMENT_QUESTIONS;
      const total = questions.length;
      const answeredKeys = Object.keys(state.assessmentAnswers);

      if (answeredKeys.length < total) {
        const remaining = total - answeredKeys.length;
        const confirmSubmit = confirm(`Aún tienes ${remaining} pregunta(s) sin responder. ¿Deseas enviar y calificar de todos modos?`);
        if (!confirmSubmit) return;
      }

      // Calcular puntaje
      let correctCount = 0;
      questions.forEach(q => {
        if (state.assessmentAnswers[q.id] === q.correctIndex) {
          correctCount++;
        }
      });

      const percentage = Math.round((correctCount / total) * 100);
      const passed = percentage >= PASSING_PERCENTAGE;

      state.assessmentResult = {
        score: correctCount,
        total: total,
        percentage: percentage,
        passed: passed,
        timestamp: Date.now(),
        studentName: state.studentName,
        answers: { ...state.assessmentAnswers }
      };

      // Si aprueba, marcar paso 9 como completado
      if (passed) {
        state.completedSteps.add(9);
      }

      saveState();
      renderCurrentStep();
    },

    retakeAssessment: function() {
      if (confirm('¿Deseas reiniciar la evaluación para responder nuevamente?')) {
        state.assessmentResult = null;
        state.assessmentAnswers = {};
        localStorage.removeItem(STORAGE_KEYS.ASSESSMENT_RESULTS);
        state.completedSteps.delete(9);
        saveState();
        renderCurrentStep();
      }
    },

    resetAllProgress: function() {
      if (confirm('¿Estás seguro de que deseas reiniciar TODO el avance del curso y las calificaciones?')) {
        localStorage.clear();
        state.currentStep = 0;
        state.completedSteps = new Set();
        state.assessmentAnswers = {};
        state.assessmentResult = null;
        saveState();
        renderSidebar();
        updateProgressBar();
        renderCurrentStep();
      }
    }
  };

  // Inicialización al cargar el DOM
  document.addEventListener('DOMContentLoaded', () => {
    window.HarnessApp.init();
  });
})();
