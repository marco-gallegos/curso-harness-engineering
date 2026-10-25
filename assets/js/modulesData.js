// modulesData.js - Contenido completo y estructurado del Curso de Harness Engineering
window.COURSE_MODULES = [
  {
    id: 0,
    number: "00",
    phase: "Fase 0",
    phaseTitle: "Introducción & Preparación",
    title: "Bienvenida y Roadmap del Curso",
    subtitle: "Ruta de aprendizaje hacia el rol de Harness Engineer Practitioner",
    readingTime: "4 min de lectura",
    icon: "compass",
    badge: "Fundacional",
    objectives: [
      "Comprender qué es el Harness Engineering y por qué transforma el trabajo administrativo y de gestión.",
      "Conocer el mapa de 4 fases para dominar agentes de IA sin saber programar.",
      "Identificar el arnés de herramientas que se dominarán a lo largo del curso."
    ],
    summary: "Este programa te llevará gradualmente desde el uso básico de chatbots de Inteligencia Artificial hasta la capacidad de estructurar entornos de contexto (Harness), automatizaciones sencillas y conexión de servidores MCP, sin requerir conocimientos de programación ni uso de terminales.",
    sections: [
      {
        title: "📦 ¿Qué es el Harness Engineering?",
        content: `
          <p class="mb-4">El <strong>Harness Engineering</strong> (Ingeniería de Arnés y Contexto) es la disciplina que permite a profesionales no técnicos <strong>construir el entorno de trabajo, las reglas operativas, las herramientas y las restricciones</strong> necesarias para que un Agente de Inteligencia Artificial ejecute procesos complejos de negocio de forma autónoma, confiable y sin alucinaciones.</p>
          <div class="p-4 rounded-xl border border-amber-200 dark:border-amber-800/60 bg-amber-50 dark:bg-amber-950/30 mb-6">
            <div class="flex items-start gap-3">
              <span class="text-2xl">💡</span>
              <div>
                <h4 class="font-bold text-amber-900 dark:text-amber-200 mb-1">Para quién está diseñado este curso</h4>
                <p class="text-sm text-amber-800 dark:text-amber-300">Profesionales administrativos, docentes, contadores, ejecutivos y líderes de negocio con alto criterio analítico, pero que <strong>no son programadores</strong> ni tienen experiencia técnica con terminales de comandos o lenguajes de código.</p>
              </div>
            </div>
          </div>
        `
      },
      {
        title: "🗺️ Mapa de Aprendizaje (Roadmap de 4 Fases)",
        content: `
          <p class="mb-4">El curso se organiza en cuatro fases progresivas e interconectadas que te convertirán en un <strong>Harness Engineer Practitioner</strong>:</p>
          <div class="mermaid my-6 flex justify-center bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-x-auto">
flowchart TD
    Start["🚀 Inicio: Usuario de AI Chatbots"]

    subgraph F1 ["Fase 1: Comunicación Estructurada & Visual"]
        M1["📝 01. Markdown Fundamentos<br/><i>Texto limpio y legible por IA</i>"]
        M2["📊 04. Mermaid Diagrams<br/><i>Diagramación basada en código</i>"]
    end

    subgraph F2 ["Fase 2: Presentación & Agentes Modernos"]
        M3["🤖 02. Ecosistema Antigravity<br/><i>Agentes de IA y Entorno de Trabajo</i>"]
        M4["🛝 03. Slidev Presentations<br/><i>Diapositivas dinámicas en Markdown</i>"]
    end

    subgraph F3 ["Fase 3: Ingeniería de Contexto & Prompts"]
        M5["🎯 06. Prompt Engineering Práctico<br/><i>Instrucciones efectivas sin 'prompts dummy'</i>"]
        M6["🧠 05. Context Engineering<br/><i>AGENT.md, Reglas, Tools & Skills</i>"]
    end

    subgraph F4 ["Fase 4: Control & Extensión de Capacidades"]
        M7["📦 07. Control de Versiones<br/><i>Git & GitHub Desktop visual</i>"] 
        M8["⚙️ 08. Scripts & Servidores MCP<br/><i>Conexión de herramientas e integración</i>"]
    end

    Start --> M1
    M1 --> M2
    M2 --> M3
    M3 --> M4
    M4 --> M5
    M5 --> M6
    M6 --> M7
    M7 --> M8

    M8 --> Goal["🏆 Meta: Harness Engineer Practitioner"]
          </div>
        `
      },
      {
        title: "💡 Prerrequisitos Esperados vs No Requeridos",
        content: `
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
            <div class="p-5 rounded-xl border border-emerald-200 dark:border-emerald-800/60 bg-emerald-50/50 dark:bg-emerald-950/20">
              <h4 class="font-bold text-emerald-800 dark:text-emerald-300 flex items-center gap-2 mb-3">
                <span>✅</span> Lo que SÍ necesitas
              </h4>
              <ul class="space-y-2 text-sm text-slate-700 dark:text-slate-300">
                <li class="flex items-start gap-2"><span>•</span><span>Dominio en el uso diario de la computadora e Internet (Windows o Mac).</span></li>
                <li class="flex items-start gap-2"><span>•</span><span>Experiencia previa usando chatbots de Inteligencia Artificial (ChatGPT, Claude, Gemini, etc.).</span></li>
                <li class="flex items-start gap-2"><span>•</span><span>Capacidad de análisis crítico, lectura reflexiva y resolución de problemas de negocio.</span></li>
              </ul>
            </div>
            <div class="p-5 rounded-xl border border-rose-200 dark:border-rose-800/60 bg-rose-50/50 dark:bg-rose-950/20">
              <h4 class="font-bold text-rose-800 dark:text-rose-300 flex items-center gap-2 mb-3">
                <span>❌</span> Lo que NO necesitas
              </h4>
              <ul class="space-y-2 text-sm text-slate-700 dark:text-slate-300">
                <li class="flex items-start gap-2"><span>•</span><span>Saber programar ni escribir líneas de código manualmente.</span></li>
                <li class="flex items-start gap-2"><span>•</span><span>Experiencia en terminales o comandos complejos Unix / Linux.</span></li>
                <li class="flex items-start gap-2"><span>•</span><span>Conocimientos previos de Git, Markdown o herramientas de diagramación.</span></li>
              </ul>
            </div>
          </div>
          <div class="p-4 rounded-xl border border-blue-200 dark:border-blue-800/50 bg-blue-50/40 dark:bg-blue-950/20 mt-4">
            <p class="text-sm text-blue-900 dark:text-blue-200">
              <strong>Nota Pedagógica:</strong> Este curso está concebido con acompañamiento y práctica reflexiva. Avanza paso a paso en el wizard y al finalizar pondrás a prueba tus conocimientos en la <strong>Evaluación Final</strong>.
            </p>
          </div>
        `
      },
      {
        title: "🛠️ El Taller de Trabajo: Editores de Código y Texto Recomendados",
        content: `
          <p class="mb-4">Aunque en este curso <strong>no vas a programar código</strong>, estructurar un arnés de IA requiere interactuar con carpetas y archivos de texto plano (<code>.md</code>, <code>AGENT.md</code>, diapositivas y diagramas). No usamos Microsoft Word porque incluye megabytes de metadatos invisibles que saturan la memoria de la IA. En su lugar, el profesional moderno utiliza un <strong>Editor de Código / Texto Moderno</strong>:</p>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
            <div class="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
              <div class="flex items-center justify-between mb-2">
                <h5 class="font-bold text-slate-900 dark:text-slate-100 text-sm">Visual Studio Code (VS Code)</h5>
                <span class="px-2 py-0.5 rounded text-[10px] font-bold bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300">Estándar Global</span>
              </div>
              <p class="text-xs text-slate-600 dark:text-slate-400 mb-2">Desarrollado por Microsoft, gratuito y universal. Ofrece vista previa de Markdown en tiempo real (<code>Ctrl+Shift+V</code>) y soporte para Mermaid.</p>
              <a href="https://code.visualstudio.com/" target="_blank" rel="noopener noreferrer" class="text-xs text-indigo-600 dark:text-indigo-400 font-semibold hover:underline">Descargar VS Code Oficial →</a>
            </div>

            <div class="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
              <div class="flex items-center justify-between mb-2">
                <h5 class="font-bold text-slate-900 dark:text-slate-100 text-sm">Zed</h5>
                <span class="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300">Ultra Rápido</span>
              </div>
              <p class="text-xs text-slate-600 dark:text-slate-400 mb-2">Editor moderno escrito en Rust, se abre de forma instantánea, consume recursos mínimos y cuenta con panel de IA integrado nativamente.</p>
              <a href="https://zed.dev/" target="_blank" rel="noopener noreferrer" class="text-xs text-emerald-600 dark:text-emerald-400 font-semibold hover:underline">Conocer Zed Editor →</a>
            </div>

            <div class="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
              <div class="flex items-center justify-between mb-2">
                <h5 class="font-bold text-slate-900 dark:text-slate-100 text-sm">Cursor & Windsurf</h5>
                <span class="px-2 py-0.5 rounded text-[10px] font-bold bg-amber-100 dark:bg-amber-950 text-amber-700 dark:text-amber-300">Agentes Nativos</span>
              </div>
              <p class="text-xs text-slate-600 dark:text-slate-400 mb-2">Basados en la interfaz familiar de VS Code pero con agentes de IA diseñados para leer toda la carpeta del proyecto y sugerir mejoras automáticas.</p>
              <div class="flex gap-2 text-xs">
                <a href="https://www.cursor.com/" target="_blank" rel="noopener noreferrer" class="text-amber-600 dark:text-amber-400 font-semibold hover:underline">Cursor</a> • 
                <a href="https://codeium.com/windsurf" target="_blank" rel="noopener noreferrer" class="text-amber-600 dark:text-amber-400 font-semibold hover:underline">Windsurf</a>
              </div>
            </div>

            <div class="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
              <div class="flex items-center justify-between mb-2">
                <h5 class="font-bold text-slate-900 dark:text-slate-100 text-sm">Obsidian</h5>
                <span class="px-2 py-0.5 rounded text-[10px] font-bold bg-purple-100 dark:bg-purple-950 text-purple-700 dark:text-purple-300">Notas & Red</span>
              </div>
              <p class="text-xs text-slate-600 dark:text-slate-400 mb-2">Aplicación visual orientada a gestionar conocimiento corporativo, procedimientos y minutas interconectadas en archivos Markdown locales.</p>
              <a href="https://obsidian.md/" target="_blank" rel="noopener noreferrer" class="text-xs text-purple-600 dark:text-purple-400 font-semibold hover:underline">Descargar Obsidian →</a>
            </div>
          </div>
        `
      }
    ,
      {
        title: "📝 Tarea Práctica — Módulo 00",
        content: `
          <div class="p-5 rounded-2xl border border-amber-200 dark:border-amber-800/60 bg-amber-50/40 dark:bg-amber-950/20">
            <div class="flex items-center gap-3 mb-4">
              <span class="text-2xl">📝</span>
              <div>
                <h4 class="font-bold text-amber-900 dark:text-amber-200 text-base">Tarea Práctica — Módulo 00</h4>
                <p class="text-xs text-amber-700 dark:text-amber-400 font-medium">Mapa Personal del Flujo de Trabajo con IA</p>
              </div>
            </div>
            <ol class="space-y-2 mb-5 list-none">
              <li class="flex items-start gap-2"><span class="mt-0.5 text-amber-600 dark:text-amber-400 font-bold text-xs">→</span><span class="text-xs text-slate-700 dark:text-slate-300">Crea un archivo llamado <code>docs/tarea_00_flujo.md</code>.</span></li>
              <li class="flex items-start gap-2"><span class="mt-0.5 text-amber-600 dark:text-amber-400 font-bold text-xs">→</span><span class="text-xs text-slate-700 dark:text-slate-300">Describe con tus propias palabras: ¿Cuál es la diferencia entre un <em>chatbot</em> reactivo y un <em>agente</em> autónomo?</span></li>
              <li class="flex items-start gap-2"><span class="mt-0.5 text-amber-600 dark:text-amber-400 font-bold text-xs">→</span><span class="text-xs text-slate-700 dark:text-slate-300">Dibuja (en texto o con Mermaid) el ciclo de trabajo <strong>Percibir → Planificar → Actuar → Verificar</strong> aplicado a una tarea de tu departamento.</span></li>
              <li class="flex items-start gap-2"><span class="mt-0.5 text-amber-600 dark:text-amber-400 font-bold text-xs">→</span><span class="text-xs text-slate-700 dark:text-slate-300">Identifica una tarea repetitiva de tu trabajo diario que podría delegarse a un agente bien configurado.</span></li>
            </ol>
            <div class="p-3.5 rounded-xl border border-emerald-200 dark:border-emerald-800/60 bg-emerald-50/40 dark:bg-emerald-950/20 mb-3">
              <h5 class="font-bold text-emerald-800 dark:text-emerald-300 text-xs mb-2">✅ Criterio de Éxito:</h5>
              <ul class="space-y-1 list-none">
              <li class="flex items-start gap-2"><span class="text-emerald-500">✓</span><span class="text-xs text-slate-700 dark:text-slate-300">Archivo <code>docs/tarea_00_flujo.md</code> creado.</span></li>
              <li class="flex items-start gap-2"><span class="text-emerald-500">✓</span><span class="text-xs text-slate-700 dark:text-slate-300">La distinción chatbot vs. agente está explicada con un ejemplo de tu área.</span></li>
              <li class="flex items-start gap-2"><span class="text-emerald-500">✓</span><span class="text-xs text-slate-700 dark:text-slate-300">Al menos una tarea real identificada como candidata a automatización.</span></li>
              </ul>
            </div>
            <div class="p-3 rounded-lg bg-blue-50/60 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800/40 text-xs text-blue-800 dark:text-blue-300">
              💡 No te preocupes por la sintaxis perfecta — el objetivo es articular el concepto con tus propias palabras. Eso es exactamente lo que hace un Harness Engineer: pensar, no programar.
            </div>
          </div>
        `
      }]
  },
  {
    id: 1,
    number: "01",
    phase: "Fase 1",
    phaseTitle: "Comunicación Estructurada & Visual",
    title: "Módulo 01: Markdown Fundamentos para Profesionales",
    subtitle: "El lenguaje universal y eficiente de comunicación con Inteligencia Artificial",
    readingTime: "6 min de lectura",
    icon: "file-text",
    badge: "Fase 1",
    objectives: [
      "Comprender qué es Markdown y por qué es el estándar absoluto para interactuar con LLMs.",
      "Entender el concepto de 'Eficiencia de Tokens' y el 95% de ahorro frente a documentos Word (.docx).",
      "Dominar la sintaxis esencial: encabezados, listas, tablas ejecutivas y citas.",
      "Aprender a exportar Markdown a al menos 6 formatos distintos (Mermaid, Slidev, PDF, HTML, Word, EPUB)."
    ],
    summary: "Markdown (.md) es un estándar de texto ligero y universal que elimina el peso invisible de los procesadores tradicionales, optimiza la memoria de la IA y permite estructurar ideas de forma limpia.",
    sections: [
      {
        title: "📈 ¿Por qué Markdown es Obligatorio en la Era de la IA?",
        content: `
          <p class="mb-4">En el entorno administrativo tradicional, formatos como <code>.docx</code> (Microsoft Word) o <code>.pdf</code> son la norma. Sin embargo, en el ámbito del <strong>Harness Engineering</strong> y la Inteligencia Artificial, Markdown (<code>.md</code>) es el formato rey debido a tres razones científicas y operativas:</p>
          
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
            <div class="p-4 rounded-xl border border-indigo-200 dark:border-indigo-800/50 bg-indigo-50/40 dark:bg-indigo-950/30">
              <div class="text-2xl font-bold text-indigo-600 dark:text-indigo-400 mb-1">+90%</div>
              <h5 class="font-semibold text-slate-800 dark:text-slate-200 text-sm mb-1">Entrenamiento de LLMs</h5>
              <p class="text-xs text-slate-600 dark:text-slate-400">Los grandes modelos (GPT-4, Claude 3.5, Gemini 1.5) han sido entrenados nativamente sobre texto en Markdown.</p>
            </div>
            <div class="p-4 rounded-xl border border-emerald-200 dark:border-emerald-800/50 bg-emerald-50/40 dark:bg-emerald-950/30">
              <div class="text-2xl font-bold text-emerald-600 dark:text-emerald-400 mb-1">95%</div>
              <h5 class="font-semibold text-slate-800 dark:text-slate-200 text-sm mb-1">Ahorro de Peso y Tokens</h5>
              <p class="text-xs text-slate-600 dark:text-slate-400">Un documento Word incluye megabytes de metadatos invisibles de estilo. Markdown reduce el consumo de ventana de contexto drásticamente.</p>
            </div>
            <div class="p-4 rounded-xl border border-purple-200 dark:border-purple-800/50 bg-purple-50/40 dark:bg-purple-950/30">
              <div class="text-2xl font-bold text-purple-600 dark:text-purple-400 mb-1">100%</div>
              <h5 class="font-semibold text-slate-800 dark:text-slate-200 text-sm mb-1">Portabilidad Universal</h5>
              <p class="text-xs text-slate-600 dark:text-slate-400">Se puede abrir y editar en cualquier computadora, teléfono o editor de notas sin requerir licencias de software costosas.</p>
            </div>
          </div>
        `
      },
      {
        title: "📝 Cheat Sheet (Guía Rápida) de Sintaxis Markdown",
        content: `
          <p class="mb-4">Elementos más utilizados en la redacción administrativa y de negocios:</p>
          
          <h4 class="font-semibold text-base text-slate-800 dark:text-slate-200 mt-4 mb-2">1. Encabezados Jerárquicos</h4>
          <p class="text-sm text-slate-600 dark:text-slate-400 mb-2">Usamos el símbolo <code>#</code> seguido de un espacio. A mayor cantidad de <code>#</code>, menor jerarquía.</p>
          <div class="code-preview-block mb-4">
            <pre><code># Título Principal del Reporte (H1 - Equivalente a Título de Documento)
## Sección Principal (H2 - Equivalente a Capítulo o Módulo)
### Subsección (H3 - Equivalente a Apartado)</code></pre>
          </div>

          <h4 class="font-semibold text-base text-slate-800 dark:text-slate-200 mt-4 mb-2">2. Formato de Texto</h4>
          <div class="code-preview-block mb-4">
            <pre><code>Este es un texto *en cursiva* (énfasis suave).
Este es un texto **en negrita** (énfasis importante).
Este es un texto ***cursiva y negrita***.
Este es un texto ~~tachado~~ (para marcar elementos obsoletos).</code></pre>
          </div>

          <h4 class="font-semibold text-base text-slate-800 dark:text-slate-200 mt-4 mb-2">3. Tablas Ejecutivas de Datos</h4>
          <p class="text-sm text-slate-600 dark:text-slate-400 mb-2">Ideales para cuadros comparativos o balances financieros estructurados:</p>
          <div class="code-preview-block mb-3">
            <pre><code>| Departamento | Presupuesto 2026 | Estado |
| :--- | :---: | ---: |
| Administración | $15,000 USD | Aprobado |
| Contabilidad | $12,000 USD | En Revisión |
| Recursos Humanos | $9,500 USD | Aprobado |</code></pre>
          </div>
          <div class="p-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 mb-4">
            <span class="text-xs uppercase font-semibold text-slate-500 tracking-wider">Resultado visual:</span>
            <div class="mt-2 overflow-x-auto">
              <table class="min-w-full text-xs text-left border-collapse">
                <thead>
                  <tr class="border-b border-slate-300 dark:border-slate-700">
                    <th class="py-1 px-3 font-semibold">Departamento</th>
                    <th class="py-1 px-3 font-semibold text-center">Presupuesto 2026</th>
                    <th class="py-1 px-3 font-semibold text-right">Estado</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-slate-200 dark:divide-slate-800">
                  <tr><td class="py-1 px-3">Administración</td><td class="py-1 px-3 text-center">$15,000 USD</td><td class="py-1 px-3 text-right"><span class="px-2 py-0.5 rounded text-[10px] bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300">Aprobado</span></td></tr>
                  <tr><td class="py-1 px-3">Contabilidad</td><td class="py-1 px-3 text-center">$12,000 USD</td><td class="py-1 px-3 text-right"><span class="px-2 py-0.5 rounded text-[10px] bg-amber-100 dark:bg-amber-950 text-amber-700 dark:text-amber-300">En Revisión</span></td></tr>
                  <tr><td class="py-1 px-3">Recursos Humanos</td><td class="py-1 px-3 text-center">$9,500 USD</td><td class="py-1 px-3 text-right"><span class="px-2 py-0.5 rounded text-[10px] bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300">Aprobado</span></td></tr>
                </tbody>
              </table>
            </div>
          </div>

          <h4 class="font-semibold text-base text-slate-800 dark:text-slate-200 mt-4 mb-2">4. Bloques de Cita o Notas</h4>
          <div class="code-preview-block mb-4">
            <pre><code>> **Nota Importante**: La entrega de reportes trimestrales vence el último día hábil del mes.</code></pre>
          </div>
        `
      },
      {
        title: "💻 ¿Dónde se Escribe Markdown? Tu Editor de Código (VS Code, Zed y Más)",
        content: `
          <p class="mb-4">Para editar archivos Markdown en tu computadora no necesitas un procesador de textos pesado como Word. Recomendamos instalar un editor especializado que te ofrezca <strong>vista previa instantánea</strong> y control de carpetas:</p>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
            <div class="p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/60">
              <strong class="text-xs text-indigo-700 dark:text-indigo-300 font-bold block mb-1">Visual Studio Code (Microsoft):</strong>
              <p class="text-xs text-slate-600 dark:text-slate-400 mb-2">El editor más utilizado a nivel mundial. Presiona <code>Ctrl + Shift + V</code> (o <code>Cmd + Shift + V</code> en Mac) para ver el documento formateado al lado de tu texto.</p>
              <a href="https://code.visualstudio.com/" target="_blank" rel="noopener noreferrer" class="text-xs text-indigo-600 dark:text-indigo-400 font-medium hover:underline">Descargar VS Code →</a>
            </div>
            <div class="p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/60">
              <strong class="text-xs text-emerald-700 dark:text-emerald-300 font-bold block mb-1">Zed Editor:</strong>
              <p class="text-xs text-slate-600 dark:text-slate-400 mb-2">Construido en Rust, diseñado para máxima ligereza y rapidez. Ideal si buscas un editor que abra al instante sin saturar tu equipo.</p>
              <a href="https://zed.dev/" target="_blank" rel="noopener noreferrer" class="text-xs text-emerald-600 dark:text-emerald-400 font-medium hover:underline">Descargar Zed →</a>
            </div>
            <div class="p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/60">
              <strong class="text-xs text-amber-700 dark:text-amber-300 font-bold block mb-1">Cursor & Windsurf:</strong>
              <p class="text-xs text-slate-600 dark:text-slate-400 mb-2">Editores orientados a inteligencia artificial que permiten editar archivos Markdown y código pidiéndole cambios al agente en lenguaje natural.</p>
              <a href="https://www.cursor.com/" target="_blank" rel="noopener noreferrer" class="text-xs text-amber-600 dark:text-amber-400 font-medium hover:underline">Descargar Cursor →</a>
            </div>
            <div class="p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/60">
              <strong class="text-xs text-purple-700 dark:text-purple-300 font-bold block mb-1">Obsidian:</strong>
              <p class="text-xs text-slate-600 dark:text-slate-400 mb-2">Entorno visual para notas conectadas en Markdown local, ideal para documentar manuales de procedimientos y políticas de negocio.</p>
              <a href="https://obsidian.md/" target="_blank" rel="noopener noreferrer" class="text-xs text-purple-600 dark:text-purple-400 font-medium hover:underline">Descargar Obsidian →</a>
            </div>
          </div>
        `
      },
      {
        title: "📤 Exportación Multiformato: Markdown como Fuente Única de la Verdad",
        content: `
          <p class="mb-4">Uno de los mayores superpoderes de Markdown en el <strong>Harness Engineering</strong> es que actúa como una <strong>Fuente Única de Verdad</strong> (<em>Single Source of Truth</em>). Redactas la información una sola vez en texto limpio y, mediante herramientas automatizadas o comandos al agente de IA, puedes exportarla a al menos <strong>6 formatos estándar de negocio</strong>:</p>
          
          <div class="overflow-x-auto my-4">
            <table class="w-full text-xs md:text-sm border-collapse border border-slate-200 dark:border-slate-700 rounded-xl overflow-hidden">
              <thead class="bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200">
                <tr>
                  <th class="p-2.5 text-center font-bold border-b border-slate-200 dark:border-slate-700">#</th>
                  <th class="p-2.5 text-left font-bold border-b border-slate-200 dark:border-slate-700">Formato Destino</th>
                  <th class="p-2.5 text-left font-bold border-b border-slate-200 dark:border-slate-700">Motor / Herramienta</th>
                  <th class="p-2.5 text-left font-bold border-b border-slate-200 dark:border-slate-700">Ejemplo Práctico de Negocio</th>
                  <th class="p-2.5 text-left font-bold border-b border-slate-200 dark:border-slate-700">Ventaja para el Profesional</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-200 dark:divide-slate-800 text-slate-700 dark:text-slate-300">
                <tr>
                  <td class="p-2.5 font-bold text-center text-indigo-600">1</td>
                  <td class="p-2.5 font-bold">Mermaid (.svg / .png)</td>
                  <td class="p-2.5 text-xs">Mermaid.js / Live Editor</td>
                  <td class="p-2.5">Flujograma visual de aprobación de facturas o compras.</td>
                  <td class="p-2.5 text-xs">Ahorro de más del 90% de tokens frente a imágenes; editable modificando una línea.</td>
                </tr>
                <tr>
                  <td class="p-2.5 font-bold text-center text-indigo-600">2</td>
                  <td class="p-2.5 font-bold">Slidev (.html / .pdf)</td>
                  <td class="p-2.5 text-xs">Slidev Engine</td>
                  <td class="p-2.5">Presentación de resultados trimestrales (Q1) para junta directiva.</td>
                  <td class="p-2.5 text-xs">Crea 15 diapositivas en 2 minutos sin alinear cajas en PowerPoint; temas automáticos.</td>
                </tr>
                <tr>
                  <td class="p-2.5 font-bold text-center text-indigo-600">3</td>
                  <td class="p-2.5 font-bold">PDF Ejecutivo (.pdf)</td>
                  <td class="p-2.5 text-xs">Pandoc / Markdown PDF</td>
                  <td class="p-2.5">Manual de políticas internas y cumplimiento normativo.</td>
                  <td class="p-2.5 text-xs">Documento formal inmutable con portada, índice automático y paginación institucional.</td>
                </tr>
                <tr>
                  <td class="p-2.5 font-bold text-center text-indigo-600">4</td>
                  <td class="p-2.5 font-bold">HTML / Web (.html)</td>
                  <td class="p-2.5 text-xs">GitHub Pages / SSG</td>
                  <td class="p-2.5">Portal interactivo de preguntas frecuentes o base de conocimiento.</td>
                  <td class="p-2.5 text-xs">Navegable desde cualquier explorador web o smartphone sin instalar ningún software.</td>
                </tr>
                <tr>
                  <td class="p-2.5 font-bold text-center text-indigo-600">5</td>
                  <td class="p-2.5 font-bold">Microsoft Word (.docx)</td>
                  <td class="p-2.5 text-xs">Pandoc / Typora</td>
                  <td class="p-2.5">Borrador de contrato para abogados externos que exigen Word.</td>
                  <td class="p-2.5 text-xs">Genera un .docx perfectamente formateado sin arrastrar estilos invisibles defectuosos.</td>
                </tr>
                <tr>
                  <td class="p-2.5 font-bold text-center text-indigo-600">6</td>
                  <td class="p-2.5 font-bold">Libro Digital E-Pub (.epub)</td>
                  <td class="p-2.5 text-xs">Calibre / Pandoc</td>
                  <td class="p-2.5">Guía de inducción (Onboarding) y capacitación para nuevo personal.</td>
                  <td class="p-2.5 text-xs">Lectura fluida y redimensionable en tabletas y lectores digitales (Kindle/Kobo).</td>
                </tr>
              </tbody>
            </table>
          </div>
        `
      },
      {
        title: "🔗 Referencias Externas y Práctica",
        content: `
          <div class="flex flex-wrap gap-3 mt-2">
            <a href="https://code.visualstudio.com/" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-800 text-indigo-700 dark:text-indigo-300 text-xs font-medium">
              <span>VS Code Oficial</span>
            </a>
            <a href="https://zed.dev/" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-emerald-700 dark:text-emerald-300 text-xs font-medium">
              <span>Zed Editor</span>
            </a>
            <a href="https://dillinger.io/" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 text-xs font-medium">
              <span>🌐 Editor en Línea Dillinger.io</span>
            </a>
          </div>
        `
      }
    ,
      {
        title: "📝 Tarea Práctica — Módulo 01",
        content: `
          <div class="p-5 rounded-2xl border border-amber-200 dark:border-amber-800/60 bg-amber-50/40 dark:bg-amber-950/20">
            <div class="flex items-center gap-3 mb-4">
              <span class="text-2xl">📝</span>
              <div>
                <h4 class="font-bold text-amber-900 dark:text-amber-200 text-base">Tarea Práctica — Módulo 01</h4>
                <p class="text-xs text-amber-700 dark:text-amber-400 font-medium">Tu Primer Documento Markdown Profesional</p>
              </div>
            </div>
            <ol class="space-y-2 mb-5 list-none">
              <li class="flex items-start gap-2"><span class="mt-0.5 text-amber-600 dark:text-amber-400 font-bold text-xs">→</span><span class="text-xs text-slate-700 dark:text-slate-300">Crea el archivo <code>docs/tarea_01_markdown.md</code>.</span></li>
              <li class="flex items-start gap-2"><span class="mt-0.5 text-amber-600 dark:text-amber-400 font-bold text-xs">→</span><span class="text-xs text-slate-700 dark:text-slate-300">Incluye al menos: un encabezado de nivel 1, un párrafo introductorio, una lista con tres puntos, una tabla con dos columnas y dos filas, y un bloque de código cercado.</span></li>
              <li class="flex items-start gap-2"><span class="mt-0.5 text-amber-600 dark:text-amber-400 font-bold text-xs">→</span><span class="text-xs text-slate-700 dark:text-slate-300">Agrega un bloque <em>frontmatter</em> YAML al inicio del archivo con campos <code>title</code>, <code>author</code> y <code>date</code>.</span></li>
              <li class="flex items-start gap-2"><span class="mt-0.5 text-amber-600 dark:text-amber-400 font-bold text-xs">→</span><span class="text-xs text-slate-700 dark:text-slate-300">Opcional avanzado: exporta el archivo a PDF usando <code>pandoc</code> asistido por el agente.</span></li>
            </ol>
            <div class="p-3.5 rounded-xl border border-emerald-200 dark:border-emerald-800/60 bg-emerald-50/40 dark:bg-emerald-950/20 mb-3">
              <h5 class="font-bold text-emerald-800 dark:text-emerald-300 text-xs mb-2">✅ Criterio de Éxito:</h5>
              <ul class="space-y-1 list-none">
              <li class="flex items-start gap-2"><span class="text-emerald-500">✓</span><span class="text-xs text-slate-700 dark:text-slate-300">El archivo <code>docs/tarea_01_markdown.md</code> existe y tiene todos los elementos solicitados.</span></li>
              <li class="flex items-start gap-2"><span class="text-emerald-500">✓</span><span class="text-xs text-slate-700 dark:text-slate-300">El frontmatter YAML está correctamente delimitado con <code>---</code>.</span></li>
              <li class="flex items-start gap-2"><span class="text-emerald-500">✓</span><span class="text-xs text-slate-700 dark:text-slate-300">La tabla tiene encabezados y al menos dos filas de datos reales (no de ejemplo).</span></li>
              </ul>
            </div>
            <div class="p-3 rounded-lg bg-blue-50/60 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800/40 text-xs text-blue-800 dark:text-blue-300">
              💡 Pídele al agente: <em>"Revisa mi archivo tarea_01_markdown.md y dime si la sintaxis Markdown es correcta"</em>. Eso es Harness Engineering en acción.
            </div>
          </div>
        `
      }]
  },
  {
    id: 2,
    number: "02",
    phase: "Fase 2",
    phaseTitle: "Presentación & Agentes Modernos",
    title: "Módulo 02: Ecosistema de Agentes: Antigravity, OpenCode, Claude, Pi y DeepSeek",
    subtitle: "Comparativa ejecutiva de arneses modernos, casos de uso de negocio y análisis crítico de limitaciones",
    readingTime: "8 min de lectura",
    icon: "bot",
    badge: "Fase 2",
    objectives: [
      "Distinguir claramente un Chatbot Tradicional de un Agente de IA con arnés operativo.",
      "Comprender el rol y la propuesta de valor de 5 plataformas clave: Antigravity, OpenCode, Claude, Pi Agent y DeepSeek Harness.",
      "Dominar la Matriz Comparativa Ejecutiva (entorno local vs nube, privacidad y acceso a herramientas).",
      "Identificar las limitaciones críticas de cada solución y los riesgos generales del Harness Engineering (Deriva de Contexto, Latencia y Sandboxing).",
      "Cumplir la Meta Práctica de la Fase 2: Instalar y verificar tu primer agente de IA en tu computadora."
    ],
    summary: "Los agentes de IA no solo responden texto: interactúan con archivos y herramientas dentro de un arnés de reglas. Analizamos Antigravity, OpenCode, Claude, Pi Agent y DeepSeek, con sus matrices comparativas y limitaciones clave.",
    sections: [
      {
        title: "🤖 ¿Qué es un Agente de IA vs un Chatbot Tradicional?",
        content: `
          <p class="mb-4">Para un profesional moderno, comprender esta distinción es fundamental para no desperdiciar tiempo en tareas mecánicas repetitivas:</p>
          <div class="overflow-x-auto my-4">
            <table class="w-full text-sm border-collapse border border-slate-200 dark:border-slate-700 rounded-xl overflow-hidden">
              <thead class="bg-slate-100 dark:bg-slate-800">
                <tr>
                  <th class="p-3 text-left font-semibold text-slate-800 dark:text-slate-200 border-b border-slate-200 dark:border-slate-700">Característica</th>
                  <th class="p-3 text-left font-semibold text-slate-700 dark:text-slate-300 border-b border-slate-200 dark:border-slate-700">Chatbot Tradicional (ej. ChatGPT web clásico)</th>
                  <th class="p-3 text-left font-semibold text-indigo-600 dark:text-indigo-400 border-b border-slate-200 dark:border-slate-700">Agente de IA con Arnés (ej. Antigravity)</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-200 dark:divide-slate-800 text-slate-700 dark:text-slate-300">
                <tr>
                  <td class="p-3 font-medium">Interacción</td>
                  <td class="p-3">Pregunta y respuesta en un hilo plano secuencial</td>
                  <td class="p-3 font-semibold text-indigo-700 dark:text-indigo-300">Ejecución autónoma de tareas complejas paso a paso</td>
                </tr>
                <tr>
                  <td class="p-3 font-medium">Capacidades</td>
                  <td class="p-3">Solo genera texto/código en la pantalla</td>
                  <td class="p-3">Lee/escribe archivos reales, busca en web, ejecuta herramientas</td>
                </tr>
                <tr>
                  <td class="p-3 font-medium">Contexto</td>
                  <td class="p-3">Se pierde al cerrar la ventana o al superar la memoria</td>
                  <td class="p-3">Mantiene un arnés de reglas persistente (<code>AGENT.md</code>), archivos e historia</td>
                </tr>
                <tr>
                  <td class="p-3 font-medium">Sub-tareas</td>
                  <td class="p-3">El usuario debe pedir cada paso manualmente</td>
                  <td class="p-3">Puede delegar a subagentes especializados autónomamente</td>
                </tr>
              </tbody>
            </table>
          </div>
        `
      },
      {
        title: "🌌 Visión General del Agente Antigravity",
        content: `
          <p class="mb-4"><strong>Antigravity</strong> es un entorno de desarrollo e interacción asistido por Inteligencia Artificial diseñado específicamente para implementar <strong>Harness Engineering</strong>.</p>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4 my-4">
            <div class="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
              <div class="text-xl mb-2">📜</div>
              <h5 class="font-bold text-sm text-slate-900 dark:text-slate-100 mb-1">1. Reglas Globales y de Proyecto</h5>
              <p class="text-xs text-slate-600 dark:text-slate-400">Archivos donde especificamos cómo queremos que se comporte el agente, el tono y los límites corporativos.</p>
            </div>
            <div class="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
              <div class="text-xl mb-2">🧰</div>
              <h5 class="font-bold text-sm text-slate-900 dark:text-slate-100 mb-1">2. Herramientas (Tools)</h5>
              <p class="text-xs text-slate-600 dark:text-slate-400">Capacidades nativas para inspeccionar carpetas, redactar reportes, realizar búsquedas o ejecutar scripts.</p>
            </div>
            <div class="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
              <div class="text-xl mb-2">👥</div>
              <h5 class="font-bold text-sm text-slate-900 dark:text-slate-100 mb-1">3. Subagentes Especializados</h5>
              <p class="text-xs text-slate-600 dark:text-slate-400">Capacidad de instanciar asistentes secundarios dedicados a tareas paralelas (ej. un subagente investigador y un subagente redactor).</p>
            </div>
          </div>
        `
      },
      {
        title: "🌐 Ecosistema de Agentes y Arneses del Mercado",
        content: `
          <p class="mb-4">En el panorama corporativo actual conviven distintas filosofías de agentes y arneses. Analizamos los 5 actores clave:</p>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
            <!-- 1. Antigravity -->
            <div class="p-5 rounded-2xl border border-indigo-200 dark:border-indigo-800/60 bg-indigo-50/30 dark:bg-indigo-950/20">
              <div class="flex items-center justify-between mb-2">
                <h4 class="font-bold text-indigo-950 dark:text-indigo-200 text-base">1. Antigravity (Google / DeepMind)</h4>
                <span class="px-2 py-0.5 rounded text-[10px] font-bold uppercase bg-indigo-100 dark:bg-indigo-900/60 text-indigo-700 dark:text-indigo-300">Harness Integral</span>
              </div>
              <p class="text-xs text-slate-700 dark:text-slate-300 mb-3 leading-relaxed">
                Plataforma de ingeniería de contexto con arnés multi-agente nativo, reglas por carpeta (<code>AGENT.md</code>), herramientas de sistema de archivos y ejecución de scripts locales.
              </p>
              <div class="text-[11px] text-slate-500 space-y-1">
                <div><strong>Fortaleza:</strong> Control total del entorno de trabajo y orquestación multi-agente sin salir del proyecto.</div>
                <div><strong>Ideal para:</strong> Automatización estructurada de operaciones empresariales complejas.</div>
              </div>
            </div>

            <!-- 2. OpenCode -->
            <div class="p-5 rounded-2xl border border-emerald-200 dark:border-emerald-800/60 bg-emerald-50/30 dark:bg-emerald-950/20">
              <div class="flex items-center justify-between mb-2">
                <h4 class="font-bold text-emerald-950 dark:text-emerald-200 text-base">2. OpenCode (Ecosistema Open Source)</h4>
                <span class="px-2 py-0.5 rounded text-[10px] font-bold uppercase bg-emerald-100 dark:bg-emerald-900/60 text-emerald-700 dark:text-emerald-300">Soberanía Total</span>
              </div>
              <p class="text-xs text-slate-700 dark:text-slate-300 mb-3 leading-relaxed">
                Arnés de código abierto diseñado para ejecutarse 100% de manera local o en servidores propios (<em>Self-Hosted</em>). Los datos nunca salen de la infraestructura de la empresa.
              </p>
              <div class="text-[11px] text-slate-500 space-y-1">
                <div><strong>Fortaleza:</strong> Privacidad absoluta de información sensible y cero costo de suscripciones por usuario.</div>
                <div><strong>Ideal para:</strong> Sectores altamente regulados (banca, salud, legal y contabilidad confidencial).</div>
              </div>
            </div>

            <!-- 3. Claude (Anthropic) -->
            <div class="p-5 rounded-2xl border border-amber-200 dark:border-amber-800/60 bg-amber-50/30 dark:bg-amber-950/20">
              <div class="flex items-center justify-between mb-2">
                <h4 class="font-bold text-amber-950 dark:text-amber-200 text-base">3. Claude (Anthropic Projects & Code)</h4>
                <span class="px-2 py-0.5 rounded text-[10px] font-bold uppercase bg-amber-100 dark:bg-amber-900/60 text-amber-700 dark:text-amber-300">Razonamiento Denso</span>
              </div>
              <p class="text-xs text-slate-700 dark:text-slate-300 mb-3 leading-relaxed">
                Reconocido por su ventana de contexto masiva (más de 200,000 tokens) y su capacidad analítica superior para digerir contratos legales, normativas y reportes financieros densos.
              </p>
              <div class="text-[11px] text-slate-500 space-y-1">
                <div><strong>Fortaleza:</strong> Síntesis conceptual minuciosa sin omitir cláusulas y generación de <em>Artifacts</em> interactivos.</div>
                <div><strong>Ideal para:</strong> Auditorías documentales, análisis de riesgos y consultoría estratégica en la nube.</div>
              </div>
            </div>

            <!-- 4. DeepSeek Harness -->
            <div class="p-5 rounded-2xl border border-sky-200 dark:border-sky-800/60 bg-sky-50/30 dark:bg-sky-950/20">
              <div class="flex items-center justify-between mb-2">
                <h4 class="font-bold text-sky-950 dark:text-sky-200 text-base">4. DeepSeek Harness (V3 & R1)</h4>
                <span class="px-2 py-0.5 rounded text-[10px] font-bold uppercase bg-sky-100 dark:bg-sky-900/60 text-sky-700 dark:text-sky-300">Inferencia Económica</span>
              </div>
              <p class="text-xs text-slate-700 dark:text-slate-300 mb-3 leading-relaxed">
                Modelos de razonamiento profundo con pesos abiertos (<em>Open Weights</em>). Permiten implementar arneses de inferencia lógica y cadenas de pensamiento (<em>Chain-of-Thought</em>) a una fracción del costo habitual.
              </p>
              <div class="text-[11px] text-slate-500 space-y-1">
                <div><strong>Fortaleza:</strong> Capacidad matemática y lógica rigurosa con costos de token hasta 90% más bajos; desplegable en Ollama o vLLM.</div>
                <div><strong>Ideal para:</strong> Conciliaciones contables masivas, análisis de hojas de cálculo y optimización de presupuesto de IA.</div>
              </div>
            </div>

            <!-- 5. Pi Agent -->
            <div class="p-5 rounded-2xl border border-rose-200 dark:border-rose-800/60 bg-rose-50/30 dark:bg-rose-950/20 md:col-span-2">
              <div class="flex items-center justify-between mb-2">
                <h4 class="font-bold text-rose-950 dark:text-rose-200 text-base">5. Pi — Agente Minimalista Hackeable (pi.dev)</h4>
                <span class="px-2 py-0.5 rounded text-[10px] font-bold uppercase bg-rose-100 dark:bg-rose-900/60 text-rose-700 dark:text-rose-300">OSS · Minimalista · TypeScript</span>
              </div>
              <p class="text-xs text-slate-700 dark:text-slate-300 mb-2 leading-relaxed">
                <strong>Pi</strong> es un arnés de codificación <strong>de código abierto, ultra-minimalista y completamente hackeable</strong>, creado por el equipo de Earendil (<a href="https://pi.dev" target="_blank" class="underline text-rose-700 dark:text-rose-300">pi.dev</a>). Su filosofía es la opuesta a un agente "todo-incluido": el prompt de sistema tiene menos de 1,000 tokens y solo expone <strong>4 herramientas</strong> (<code>read</code>, <code>write</code>, <code>edit</code>, <code>bash</code>). Puedes extenderlo en TypeScript en minutos y usarlo como motor interno de OpenCode u otros orquestadores.
              </p>
              <div class="text-[11px] text-slate-500 space-y-1">
                <div><strong>Ventaja clave:</strong> Footprint mínimo — ideal para entornos restringidos donde importa cada token de contexto.</div>
                <div><strong>Caso de uso:</strong> Automatizaciones quirúrgicas de archivos, scripting ligero y base para construir tu propio arnés personalizado.</div>
                <div><strong>Diferencia con OpenCode:</strong> Si OpenCode es el "VS Code" (completo, con baterías incluidas), Pi es el "Neovim" (potente, configurable desde cero, solo para quien quiere control total).</div>
              </div>
            </div>
          </div>
        `
      },
      {
        title: "📊 Matriz Comparativa Ejecutiva",
        content: `
          <p class="mb-3 text-sm text-slate-700 dark:text-slate-300">Cuadro sintético para respaldar la toma de decisiones tecnológicas en la organización:</p>
          <div class="overflow-x-auto my-4">
            <table class="w-full text-xs md:text-sm border-collapse border border-slate-200 dark:border-slate-700 rounded-xl overflow-hidden">
              <thead class="bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200">
                <tr>
                  <th class="p-3 text-left font-bold border-b border-slate-200 dark:border-slate-700">Plataforma</th>
                  <th class="p-3 text-left font-bold border-b border-slate-200 dark:border-slate-700">Tipo de Arnés</th>
                  <th class="p-3 text-left font-bold border-b border-slate-200 dark:border-slate-700">Entorno</th>
                  <th class="p-3 text-left font-bold border-b border-slate-200 dark:border-slate-700">Herramientas / Archivos</th>
                  <th class="p-3 text-left font-bold border-b border-slate-200 dark:border-slate-700">Soberanía de Datos</th>
                  <th class="p-3 text-left font-bold border-b border-slate-200 dark:border-slate-700">Enfoque Primario</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-200 dark:divide-slate-800 text-slate-700 dark:text-slate-300">
                <tr>
                  <td class="p-3 font-bold text-indigo-700 dark:text-indigo-400">Antigravity</td>
                  <td class="p-3"><span class="px-2 py-0.5 rounded bg-indigo-50 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 font-semibold text-[11px]">Completo Multi-agente</span></td>
                  <td class="p-3">Local & Híbrido</td>
                  <td class="p-3">Nativo (Lectura, escritura, web, scripts)</td>
                  <td class="p-3">Alta (Archivos locales en tu disco)</td>
                  <td class="p-3 font-medium">Flujos de negocio estructurados</td>
                </tr>
                <tr>
                  <td class="p-3 font-bold text-emerald-700 dark:text-emerald-400">OpenCode</td>
                  <td class="p-3"><span class="px-2 py-0.5 rounded bg-emerald-50 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 font-semibold text-[11px]">Modular Open Source</span></td>
                  <td class="p-3">100% Local / Self-Hosted</td>
                  <td class="p-3">Extensible mediante APIs y scripts</td>
                  <td class="p-3"><span class="text-emerald-600 font-bold">Total (Aislado de terceros)</span></td>
                  <td class="p-3 font-medium">Privacidad y cumplimiento legal estricto</td>
                </tr>
                <tr>
                  <td class="p-3 font-bold text-amber-700 dark:text-amber-400">Claude (Anthropic)</td>
                  <td class="p-3"><span class="px-2 py-0.5 rounded bg-amber-50 dark:bg-amber-950 text-amber-700 dark:text-amber-300 font-semibold text-[11px]">Gestionado (Projects)</span></td>
                  <td class="p-3">Nube (Cloud)</td>
                  <td class="p-3">Vía Artifacts, Claude Code o API</td>
                  <td class="p-3">Sujeto a políticas de la nube</td>
                  <td class="p-3 font-medium">Lectura de contratos y documentos masivos</td>
                </tr>
                <tr>
                  <td class="p-3 font-bold text-sky-700 dark:text-sky-400">DeepSeek Harness</td>
                  <td class="p-3"><span class="px-2 py-0.5 rounded bg-sky-50 dark:bg-sky-950 text-sky-700 dark:text-sky-300 font-semibold text-[11px]">Razonamiento (R1/V3)</span></td>
                  <td class="p-3">Nube o Local (Ollama)</td>
                  <td class="p-3">Requiere orquestadores externos (LangChain, etc.)</td>
                  <td class="p-3">Total si se aloja localmente</td>
                  <td class="p-3 font-medium">Lógica, matemáticas y optimización de costes</td>
                </tr>
                <tr>
                  <td class="p-3 font-bold text-rose-700 dark:text-rose-400">Pi (pi.dev)</td>
                  <td class="p-3"><span class="px-2 py-0.5 rounded bg-rose-50 dark:bg-rose-950 text-rose-700 dark:text-rose-300 font-semibold text-[11px]">Minimalista OSS (4 herramientas)</span></td>
                  <td class="p-3">100% Local / Self-Hosted</td>
                  <td class="p-3"><span class="text-rose-600 font-semibold">read, write, edit, bash — extensible con TypeScript</span></td>
                  <td class="p-3 text-emerald-700 dark:text-emerald-400 font-semibold">Total (Local)</td>
                  <td class="p-3 font-medium">Automatizaciones quirúrgicas y base para arnés personalizado</td>
                </tr>
              </tbody>
            </table>
          </div>
        `
      },
      {
        title: "⚠️ Análisis de Limitaciones Críticas (Lo que Debes Saber Antes de Implementar)",
        content: `
          <p class="mb-4 text-sm text-slate-700 dark:text-slate-300">Como Harness Engineer Practitioner, tu valor no radica solo en saber qué puede hacer un modelo, sino en <strong>auditar sus límites y prevenir errores costosos</strong>:</p>

          <h4 class="font-bold text-slate-900 dark:text-slate-100 text-sm mb-3">1. Limitaciones Específicas por Solución:</h4>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
            <div class="p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/60">
              <strong class="text-xs text-indigo-700 dark:text-indigo-300">Antigravity:</strong>
              <p class="text-xs text-slate-600 dark:text-slate-400 mt-1">Exige rigor al redactar el archivo <code>AGENT.md</code>. Si las instrucciones de gobernanza son ambiguas, los subagentes pueden iterar en bucles o generar resultados imprecisos.</p>
            </div>
            <div class="p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/60">
              <strong class="text-xs text-emerald-700 dark:text-emerald-300">OpenCode:</strong>
              <p class="text-xs text-slate-600 dark:text-slate-400 mt-1">Para obtener velocidades competitivas sin recurrir a la nube, requiere servidores locales con tarjetas de video (GPUs) de alto costo de adquisición.</p>
            </div>
            <div class="p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/60">
              <strong class="text-xs text-amber-700 dark:text-amber-300">Claude:</strong>
              <p class="text-xs text-slate-600 dark:text-slate-400 mt-1">Dependencia obligatoria de conexión a internet. En momentos de alta demanda global, el servicio puede aplicar límites de mensajes por hora (<em>rate limits</em>).</p>
            </div>
            <div class="p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/60">
              <strong class="text-xs text-sky-700 dark:text-sky-300">DeepSeek (R1):</strong>
              <p class="text-xs text-slate-600 dark:text-slate-400 mt-1"><strong>Latencia reflexiva:</strong> los modelos de razonamiento pueden tardar varios segundos antes de generar la respuesta porque construyen cadenas de inferencia internas. No es nativamente un agente con herramientas, requiere un arnés externo.</p>
            </div>
            <div class="p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/60 md:col-span-2">
              <strong class="text-xs text-rose-700 dark:text-rose-300">Pi (pi.dev) — Arnés Minimalista:</strong>
              <p class="text-xs text-slate-600 dark:text-slate-400 mt-1"><strong>Curva de configuración:</strong> Su filosofía minimalista implica que funcionalidades avanzadas (memoria persistente, sub-agentes, LSP) <em>no vienen incluidas</em> — debes construirlas tú mismo en TypeScript. Ideal para perfiles técnicos que quieren control total; no recomendado como primera herramienta para profesionales no técnicos.</p>
            </div>
          </div>

          <h4 class="font-bold text-slate-900 dark:text-slate-100 text-sm mb-3">2. Limitaciones Generales del Harness Engineering:</h4>
          <div class="space-y-3">
            <div class="p-4 rounded-xl border border-rose-200 dark:border-rose-900/40 bg-rose-50/40 dark:bg-rose-950/20 flex items-start gap-3">
              <span class="text-xl mt-0.5">📉</span>
              <div>
                <h5 class="font-bold text-rose-900 dark:text-rose-200 text-xs mb-1">Deriva de Contexto (Context Drift)</h5>
                <p class="text-xs text-slate-700 dark:text-slate-300">A medida que una sesión acumula docenas de mensajes, el modelo acumula texto irrelevante que 'diluye' su atención. Las reglas iniciales de <code>AGENT.md</code> pueden perder prioridad si no se compacta o reinicia el contexto periódicamente.</p>
              </div>
            </div>

            <div class="p-4 rounded-xl border border-amber-200 dark:border-amber-900/40 bg-amber-50/40 dark:bg-amber-950/20 flex items-start gap-3">
              <span class="text-xl mt-0.5">🛡️</span>
              <div>
                <h5 class="font-bold text-amber-900 dark:text-amber-200 text-xs mb-1">Riesgos de Seguridad y Falta de Sandboxing</h5>
                <p class="text-xs text-slate-700 dark:text-slate-300">Un agente con permiso de escritura descontrolado podría sobrescribir fórmulas en un Excel o eliminar un reporte por error. El arnés siempre debe implementar confirmación humana (<em>Human-in-the-Loop</em>) antes de acciones destructivas.</p>
              </div>
            </div>

            <div class="p-4 rounded-xl border border-blue-200 dark:border-blue-900/40 bg-blue-50/40 dark:bg-blue-950/20 flex items-start gap-3">
              <span class="text-xl mt-0.5">⚖️</span>
              <div>
                <h5 class="font-bold text-blue-900 dark:text-blue-200 text-xs mb-1">Complejidad vs Costo de Inferencia</h5>
                <p class="text-xs text-slate-700 dark:text-slate-300">No uses modelos de razonamiento pesado para tareas sencillas (ej. traducir una frase o extraer una fecha). Un buen Harness Engineer calibra qué motor usar para maximizar velocidad y minimizar costos operativos.</p>
              </div>
            </div>
          </div>
        `
      },
      {
        title: "🎯 Meta Práctica de la Fase 2: Instalar y Verificar tu Primer Agente de IA",
        content: `
          <div class="p-5 rounded-2xl bg-indigo-50/60 dark:bg-indigo-950/30 border border-indigo-200 dark:border-indigo-800 mb-6">
            <h4 class="font-bold text-indigo-900 dark:text-indigo-200 text-sm mb-1">🏁 Milestone de la Fase 2 (Goal Obligatorio)</h4>
            <p class="text-xs text-slate-700 dark:text-slate-300">
              Para avanzar a la Fase 3 con confianza, debes tener instalado un agente de IA en tu máquina. La plataforma recomendada para este curso es <strong>Antigravity</strong>.
            </p>
          </div>

          <div class="space-y-4">
            <div class="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
              <span class="text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase">Paso 1: Descargar el Instalador</span>
              <p class="text-xs text-slate-600 dark:text-slate-400 mt-1 mb-2">Ingresa a <a href="https://antigravity.google/download" target="_blank" rel="noopener noreferrer" class="text-indigo-600 dark:text-indigo-400 font-semibold underline">antigravity.google/download</a> y descarga la versión para Windows o Mac.</p>
            </div>

            <div class="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
              <span class="text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase">Paso 2: Conectar tu Carpeta de Trabajo</span>
              <p class="text-xs text-slate-600 dark:text-slate-400 mt-1">Abre la aplicación y selecciona <strong>"Open Folder"</strong> apuntando a la carpeta de este proyecto: <code>curso-_harness_engineering/</code>.</p>
            </div>

            <div class="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
              <span class="text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase">Paso 3: El Test de Saludo y Verificación</span>
              <p class="text-xs text-slate-600 dark:text-slate-400 mt-1 mb-2">Escribe en el panel del agente la siguiente instrucción de prueba:</p>
              <div class="code-preview-block text-xs">
                <pre><code>Hola agente. Por favor examina esta carpeta y confirma qué archivos ves en el directorio docs/ y si reconoces el archivo AGENT.md.</code></pre>
              </div>
            </div>

            <div class="p-4 rounded-xl border border-emerald-200 dark:border-emerald-800 bg-emerald-50/50 dark:bg-emerald-950/20">
              <h5 class="font-bold text-emerald-800 dark:text-emerald-300 text-xs mb-2">✅ Criterio de Éxito de la Meta:</h5>
              <ul class="text-xs text-slate-700 dark:text-slate-300 space-y-1">
                <li>• El agente lista los 8 archivos <code>.md</code> de la carpeta <code>docs/</code> sin que tengas que copiarlos a mano.</li>
                <li>• El agente confirma que puede interactuar con el sistema de archivos local.</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        title: "🔗 Referencias Externas y Recursos",
        content: `
          <div class="flex flex-wrap gap-3 mt-2">
            <a href="https://antigravity.google" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-800 text-indigo-700 dark:text-indigo-300 text-xs font-medium">
              <span>Antigravity Docs</span>
            </a>
            <a href="https://docs.anthropic.com/" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800 text-amber-700 dark:text-amber-300 text-xs font-medium">
              <span>Claude & Claude Code</span>
            </a>
            <a href="https://www.deepseek.com/" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-sky-50 dark:bg-sky-950/40 border border-sky-200 dark:border-sky-800 text-sky-700 dark:text-sky-300 text-xs font-medium">
              <span>DeepSeek AI</span>
            </a>
            <a href="https://pi.dev/" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-800 text-rose-700 dark:text-rose-300 text-xs font-medium">
              <span>Pi Agent (pi.dev)</span>
            </a>
          </div>
        `
      }
    ,
      {
        title: "📝 Tarea Práctica — Módulo 02",
        content: `
          <div class="p-5 rounded-2xl border border-amber-200 dark:border-amber-800/60 bg-amber-50/40 dark:bg-amber-950/20">
            <div class="flex items-center gap-3 mb-4">
              <span class="text-2xl">📝</span>
              <div>
                <h4 class="font-bold text-amber-900 dark:text-amber-200 text-base">Tarea Práctica — Módulo 02</h4>
                <p class="text-xs text-amber-700 dark:text-amber-400 font-medium">Análisis Comparativo de Agentes para Tu Organización</p>
              </div>
            </div>
            <ol class="space-y-2 mb-5 list-none">
              <li class="flex items-start gap-2"><span class="mt-0.5 text-amber-600 dark:text-amber-400 font-bold text-xs">→</span><span class="text-xs text-slate-700 dark:text-slate-300">Crea el archivo <code>docs/tarea_02_agentes.md</code>.</span></li>
              <li class="flex items-start gap-2"><span class="mt-0.5 text-amber-600 dark:text-amber-400 font-bold text-xs">→</span><span class="text-xs text-slate-700 dark:text-slate-300">Redacta una tabla comparativa de <strong>al menos 3 agentes</strong> (Antigravity, OpenCode y uno más a tu elección) evaluando: Privacidad de datos, Facilidad de instalación, Costo estimado y Caso de uso ideal para tu empresa.</span></li>
              <li class="flex items-start gap-2"><span class="mt-0.5 text-amber-600 dark:text-amber-400 font-bold text-xs">→</span><span class="text-xs text-slate-700 dark:text-slate-300">Escribe un párrafo de recomendación: ¿Cuál usarías primero en tu organización y por qué?</span></li>
              <li class="flex items-start gap-2"><span class="mt-0.5 text-amber-600 dark:text-amber-400 font-bold text-xs">→</span><span class="text-xs text-slate-700 dark:text-slate-300">Identifica una limitación crítica que deberías comunicar a tu director o gerente antes de implementar cualquier agente.</span></li>
            </ol>
            <div class="p-3.5 rounded-xl border border-emerald-200 dark:border-emerald-800/60 bg-emerald-50/40 dark:bg-emerald-950/20 mb-3">
              <h5 class="font-bold text-emerald-800 dark:text-emerald-300 text-xs mb-2">✅ Criterio de Éxito:</h5>
              <ul class="space-y-1 list-none">
              <li class="flex items-start gap-2"><span class="text-emerald-500">✓</span><span class="text-xs text-slate-700 dark:text-slate-300">Tabla comparativa con mínimo 3 agentes y 4 criterios evaluados.</span></li>
              <li class="flex items-start gap-2"><span class="text-emerald-500">✓</span><span class="text-xs text-slate-700 dark:text-slate-300">Recomendación fundamentada (no genérica) con mención de al menos un riesgo.</span></li>
              <li class="flex items-start gap-2"><span class="text-emerald-500">✓</span><span class="text-xs text-slate-700 dark:text-slate-300">Archivo guardado en <code>docs/tarea_02_agentes.md</code>.</span></li>
              </ul>
            </div>
            <div class="p-3 rounded-lg bg-blue-50/60 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800/40 text-xs text-blue-800 dark:text-blue-300">
              💡 El objetivo de este ejercicio no es ser experto técnico, sino poder <strong>justificar decisiones tecnológicas</strong> ante stakeholders — exactamente el rol del Harness Engineer Practitioner.
            </div>
          </div>
        `
      }]
  },
  {
    id: 3,
    number: "03",
    phase: "Fase 2",
    phaseTitle: "Presentación & Agentes Modernos",
    title: "Módulo 03: Slidev - Presentaciones Ejecutivas con Markdown",
    subtitle: "Diapositivas dinámicas, separación de contenido y diseño, y exportación multiformato",
    readingTime: "5 min de lectura",
    icon: "presentation",
    badge: "Fase 2",
    objectives: [
      "Comprender el concepto de Slidev y cómo sustituye horas de formateo manual en PowerPoint.",
      "Identificar el separador de diapositivas '---' en archivos slides.md.",
      "Conocer las opciones de exportación ejecutiva: PDF estático, HTML interactivo y PNG."
    ],
    summary: "Slidev permite redactar presentaciones de alto impacto usando únicamente Markdown. La IA genera el contenido estructurado y el motor aplica temas profesionales automáticamente.",
    sections: [
      {
        title: "🛝 ¿Qué es Slidev y Por Qué Reemplaza a PowerPoint?",
        content: `
          <p class="mb-4">En el trabajo administrativo convencional, crear una presentación en Microsoft PowerPoint o Google Slides requiere horas de diseño manual, alineación de cuadros de texto y ajustes tipográficos.</p>
          <p class="mb-4"><strong>Slidev</strong> es una herramienta moderna que permite generar presentaciones profesionales escribiendo únicamente texto en Markdown.</p>
          
          <div class="p-4 rounded-xl border border-sky-200 dark:border-sky-800/60 bg-sky-50 dark:bg-sky-950/30 mb-6">
            <h5 class="font-bold text-sky-900 dark:text-sky-200 mb-1">Nota del Curso:</h5>
            <p class="text-sm text-sky-800 dark:text-sky-300">El objetivo para el profesional no técnico no es compilar o instalar Slidev en su computadora mediante consola, sino <strong>conocer su sintaxis, pedirle a la IA que cree las diapositivas y auditar el archivo <code>slides.md</code></strong>.</p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-4 my-4">
            <div class="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
              <h5 class="font-semibold text-slate-900 dark:text-slate-100 text-sm mb-1">1. Generación Directa con IA</h5>
              <p class="text-xs text-slate-600 dark:text-slate-400">Puedes pedirle al agente de IA que elabore 10 diapositivas para junta directiva y recibirás el archivo <code>slides.md</code> listo.</p>
            </div>
            <div class="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
              <h5 class="font-semibold text-slate-900 dark:text-slate-100 text-sm mb-1">2. Separación Contenido / Diseño</h5>
              <p class="text-xs text-slate-600 dark:text-slate-400">El estilo visual se maneja mediante temas profesionales; tú solo te enfocas en los datos y argumentos de negocio.</p>
            </div>
            <div class="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
              <h5 class="font-semibold text-slate-900 dark:text-slate-100 text-sm mb-1">3. Control de Versiones Real</h5>
              <p class="text-xs text-slate-600 dark:text-slate-400">Al ser texto plano, puedes llevar el historial exacto de cambios en Git sin archivos binarios pesados.</p>
            </div>
          </div>
        `
      },
      {
        title: "🛠️ Sintaxis Básica de Slidev",
        content: `
          <p class="mb-3 text-sm text-slate-700 dark:text-slate-300">Un archivo de Slidev se estructura dividiendo cada una de las diapositivas con <strong>tres guiones</strong> (<code>---</code>):</p>
          <div class="code-preview-block mb-4">
            <pre><code>---
theme: seriph
title: Presentación de Resultados Q1
---

# Reporte de Resultados Financieros - Q1
### Presentado por la Dirección Administrativa

---

# Aspectos Destacados del Trimestre

- Crecimiento de ingresos del **15%**.
- Reducción de costos operativos en un **8%**.
- Aprobación del nuevo presupuesto para capacitación.

---

# Conclusiones y Próximos Pasos

1. Iniciar la implementación del nuevo software contable.
2. Presentar reporte final antes del 30 de abril.</code></pre>
          </div>
        `
      },
      {
        title: "📤 Formatos de Exportación Ejecutiva",
        content: `
          <div class="grid grid-cols-1 md:grid-cols-3 gap-3 my-3">
            <div class="p-3 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900">
              <span class="font-bold text-slate-900 dark:text-slate-100 text-sm">📄 Exportación a PDF</span>
              <p class="text-xs text-slate-600 dark:text-slate-400 mt-1">Listo para imprimir o enviar por correo electrónico a clientes o directivos.</p>
            </div>
            <div class="p-3 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900">
              <span class="font-bold text-slate-900 dark:text-slate-100 text-sm">🌐 Exportación a HTML Estático</span>
              <p class="text-xs text-slate-600 dark:text-slate-400 mt-1">Produce una página interactiva navegable en cualquier explorador web sin instalar nada.</p>
            </div>
            <div class="p-3 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900">
              <span class="font-bold text-slate-900 dark:text-slate-100 text-sm">🖼️ Exportación a PNG/Imágenes</span>
              <p class="text-xs text-slate-600 dark:text-slate-400 mt-1">Para incrustar diapositivas individuales en minutas o memorandos oficiales.</p>
            </div>
          </div>
          <div class="mt-4">
            <a href="https://sli.dev/" target="_blank" rel="noopener noreferrer" class="text-xs text-indigo-600 dark:text-indigo-400 underline font-medium">Sitio Oficial de Slidev (sli.dev) →</a>
          </div>
        `
      }
    ,
      {
        title: "📝 Tarea Práctica — Módulo 03",
        content: `
          <div class="p-5 rounded-2xl border border-amber-200 dark:border-amber-800/60 bg-amber-50/40 dark:bg-amber-950/20">
            <div class="flex items-center gap-3 mb-4">
              <span class="text-2xl">📝</span>
              <div>
                <h4 class="font-bold text-amber-900 dark:text-amber-200 text-base">Tarea Práctica — Módulo 03</h4>
                <p class="text-xs text-amber-700 dark:text-amber-400 font-medium">Presentación Ejecutiva con Slidev (5 diapositivas)</p>
              </div>
            </div>
            <ol class="space-y-2 mb-5 list-none">
              <li class="flex items-start gap-2"><span class="mt-0.5 text-amber-600 dark:text-amber-400 font-bold text-xs">→</span><span class="text-xs text-slate-700 dark:text-slate-300">Crea el archivo <code>docs/tarea_03_slides.md</code>.</span></li>
              <li class="flex items-start gap-2"><span class="mt-0.5 text-amber-600 dark:text-amber-400 font-bold text-xs">→</span><span class="text-xs text-slate-700 dark:text-slate-300">Pídele al agente que genere una presentación Slidev de <strong>5 diapositivas</strong> sobre un proyecto real o hipotético de tu área (ej. implementación de IA, reporte trimestral, plan de mejora de proceso).</span></li>
              <li class="flex items-start gap-2"><span class="mt-0.5 text-amber-600 dark:text-amber-400 font-bold text-xs">→</span><span class="text-xs text-slate-700 dark:text-slate-300">Cada diapositiva debe tener: un título claro, máximo 3 puntos de contenido y un emoji o ícono representativo.</span></li>
              <li class="flex items-start gap-2"><span class="mt-0.5 text-amber-600 dark:text-amber-400 font-bold text-xs">→</span><span class="text-xs text-slate-700 dark:text-slate-300">Revisa el archivo generado e identifica al menos un ajuste que harías al contenido (no al formato técnico).</span></li>
            </ol>
            <div class="p-3.5 rounded-xl border border-emerald-200 dark:border-emerald-800/60 bg-emerald-50/40 dark:bg-emerald-950/20 mb-3">
              <h5 class="font-bold text-emerald-800 dark:text-emerald-300 text-xs mb-2">✅ Criterio de Éxito:</h5>
              <ul class="space-y-1 list-none">
              <li class="flex items-start gap-2"><span class="text-emerald-500">✓</span><span class="text-xs text-slate-700 dark:text-slate-300">Archivo <code>docs/tarea_03_slides.md</code> con separadores <code>---</code> correctos.</span></li>
              <li class="flex items-start gap-2"><span class="text-emerald-500">✓</span><span class="text-xs text-slate-700 dark:text-slate-300">Las 5 diapositivas tienen estructura coherente con el tema elegido.</span></li>
              <li class="flex items-start gap-2"><span class="text-emerald-500">✓</span><span class="text-xs text-slate-700 dark:text-slate-300">Al menos un ajuste de contenido documentado (en comentario o en el propio archivo).</span></li>
              </ul>
            </div>
            <div class="p-3 rounded-lg bg-blue-50/60 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800/40 text-xs text-blue-800 dark:text-blue-300">
              💡 Recuerda: tu trabajo no es escribir código Slidev, sino <strong>validar que el mensaje es correcto</strong> para tu audiencia ejecutiva. La IA hace la forma; tú pones el fondo.
            </div>
          </div>
        `
      }]
  },
  {
    id: 4,
    number: "04",
    phase: "Fase 1",
    phaseTitle: "Comunicación Estructurada & Visual",
    title: "Módulo 04: Mermaid - Diagramas como Código para Procesos",
    subtitle: "Diagramación inteligente con 90% de ahorro de tokens y renderizado automático",
    readingTime: "6 min de lectura",
    icon: "git-fork",
    badge: "Fase 1",
    objectives: [
      "Comprender el paradigma 'Diagrams as Code' (Diagramas como Código).",
      "Valorar el ahorro de 20-50 tokens frente a miles de tokens de imágenes o archivos Visio.",
      "Auditar y crear diagramas de flujo de procesos administrativos (flowchart TD)."
    ],
    summary: "Mermaid permite convertir descripciones lógicas de procesos en diagramas visuales mediante texto simple, optimizando el ancho de banda y la comprensión por parte de la IA.",
    sections: [
      {
        title: "📊 ¿Qué es Mermaid y por qué supera a Visio o Canva?",
        content: `
          <p class="mb-4">Tradicionalmente, para hacer un flujograma se utilizan programas como Microsoft Visio, Lucidchart o Canva, donde se arrastran figuras y líneas manualmente. En caso de cambiar una etapa, hay que reacomodar todo el dibujo.</p>
          <p class="mb-4"><strong>Mermaid</strong> permite crear diagramas generados mediante texto directo dentro de archivos Markdown:</p>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
            <div class="p-4 rounded-xl border border-indigo-200 dark:border-indigo-800/60 bg-indigo-50/40 dark:bg-indigo-950/20">
              <h5 class="font-bold text-indigo-900 dark:text-indigo-200 text-sm mb-1">⚡ Eficiencia Extrema de Tokens</h5>
              <p class="text-xs text-slate-700 dark:text-slate-300">Un diagrama completo en Mermaid consume entre <strong>20 y 50 tokens</strong>. Analizar una captura de pantalla o un archivo <code>.vsdx</code> consume miles de tokens y exige modelos de visión costosos y lentos (ahorro de más del <strong>90%</strong>).</p>
            </div>
            <div class="p-4 rounded-xl border border-emerald-200 dark:border-emerald-800/60 bg-emerald-50/40 dark:bg-emerald-950/20">
              <h5 class="font-bold text-emerald-900 dark:text-emerald-200 text-sm mb-1">✏️ Edición en 1 Segundo</h5>
              <p class="text-xs text-slate-700 dark:text-slate-300">Modificar un paso del proceso requiere cambiar una sola línea de texto en el archivo. La IA o el visor redibuja automáticamente los conectores sin deformar el diagrama.</p>
            </div>
          </div>
        `
      },
      {
        title: "📐 Ejemplo Práctico: Diagrama de Aprobación de Facturas",
        content: `
          <p class="mb-3 text-sm text-slate-700 dark:text-slate-300">Observe cómo el siguiente bloque de texto se transforma en un flujograma profesional interactivo:</p>
          <div class="code-preview-block mb-4">
            <pre><code>flowchart TD
    A[Recepción de Factura] --> B{¿Supera los $5,000 USD?}
    B -- Sí --> C[Requiere Firma de Gerencia]
    B -- No --> D[Aprobación Directa de Jefatura]
    C --> E[Pago Programado por Tesorería]
    D --> E[Pago Programado por Tesorería]</code></pre>
          </div>
          
          <div class="mermaid my-6 flex justify-center bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-x-auto">
flowchart TD
    A["📥 Recepción de Factura"] --> B{"¿Supera los $5,000 USD?"}
    B -- Sí --> C["✍️ Requiere Firma de Gerencia"]
    B -- No --> D["✅ Aprobación Directa de Jefatura"]
    C --> E["💰 Pago Programado por Tesorería"]
    D --> E["💰 Pago Programado por Tesorería"]
          </div>
        `
      },
      {
        title: "🎨 Exportación y Formatos",
        content: `
          <p class="text-sm text-slate-700 dark:text-slate-300 mb-3">Los diagramas Mermaid pueden convertirse fácilmente en:</p>
          <ul class="list-disc list-inside text-sm text-slate-600 dark:text-slate-400 space-y-1 mb-4">
            <li><strong>PNG / JPEG:</strong> Para insertar en correos, Word o presentaciones tradicionales.</li>
            <li><strong>SVG (Vectorial):</strong> Ideal para impresiones de alta resolución o gigantografías de procesos operativos.</li>
            <li><strong>PDF:</strong> Para anexos técnicos en manuales de políticas y auditorías.</li>
          </ul>
          <div class="flex gap-3">
            <a href="https://mermaid.live" target="_blank" rel="noopener noreferrer" class="text-xs px-3 py-1.5 rounded bg-indigo-50 dark:bg-indigo-950/40 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800 font-medium">Mermaid Live Editor Oficial →</a>
          </div>
        `
      }
    ,
      {
        title: "📝 Tarea Práctica — Módulo 04",
        content: `
          <div class="p-5 rounded-2xl border border-amber-200 dark:border-amber-800/60 bg-amber-50/40 dark:bg-amber-950/20">
            <div class="flex items-center gap-3 mb-4">
              <span class="text-2xl">📝</span>
              <div>
                <h4 class="font-bold text-amber-900 dark:text-amber-200 text-base">Tarea Práctica — Módulo 04</h4>
                <p class="text-xs text-amber-700 dark:text-amber-400 font-medium">Diagrama de Proceso de Negocio con Mermaid</p>
              </div>
            </div>
            <ol class="space-y-2 mb-5 list-none">
              <li class="flex items-start gap-2"><span class="mt-0.5 text-amber-600 dark:text-amber-400 font-bold text-xs">→</span><span class="text-xs text-slate-700 dark:text-slate-300">Identifica un proceso de tu departamento que tenga al menos 4 pasos secuenciales (ej. aprobación de facturas, incorporación de empleados, cierre contable mensual).</span></li>
              <li class="flex items-start gap-2"><span class="mt-0.5 text-amber-600 dark:text-amber-400 font-bold text-xs">→</span><span class="text-xs text-slate-700 dark:text-slate-300">Pídele al agente que genere el diagrama Mermaid correspondiente (<code>flowchart TD</code>) y guárdalo en <code>docs/tarea_04_diagrama.md</code>.</span></li>
              <li class="flex items-start gap-2"><span class="mt-0.5 text-amber-600 dark:text-amber-400 font-bold text-xs">→</span><span class="text-xs text-slate-700 dark:text-slate-300">Verifica que el diagrama representa correctamente el proceso: identifica si falta algún paso o si alguno está incorrecto.</span></li>
              <li class="flex items-start gap-2"><span class="mt-0.5 text-amber-600 dark:text-amber-400 font-bold text-xs">→</span><span class="text-xs text-slate-700 dark:text-slate-300">Opcional: agrega un diagrama de secuencia (<code>sequenceDiagram</code>) mostrando quién aprueba cada paso.</span></li>
            </ol>
            <div class="p-3.5 rounded-xl border border-emerald-200 dark:border-emerald-800/60 bg-emerald-50/40 dark:bg-emerald-950/20 mb-3">
              <h5 class="font-bold text-emerald-800 dark:text-emerald-300 text-xs mb-2">✅ Criterio de Éxito:</h5>
              <ul class="space-y-1 list-none">
              <li class="flex items-start gap-2"><span class="text-emerald-500">✓</span><span class="text-xs text-slate-700 dark:text-slate-300">Archivo <code>docs/tarea_04_diagrama.md</code> con al menos un diagrama Mermaid válido.</span></li>
              <li class="flex items-start gap-2"><span class="text-emerald-500">✓</span><span class="text-xs text-slate-700 dark:text-slate-300">El proceso representado tiene un inicio, pasos intermedios y un resultado final.</span></li>
              <li class="flex items-start gap-2"><span class="text-emerald-500">✓</span><span class="text-xs text-slate-700 dark:text-slate-300">Documentas al menos una corrección o mejora que realizaste al diagrama generado por la IA.</span></li>
              </ul>
            </div>
            <div class="p-3 rounded-lg bg-blue-50/60 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800/40 text-xs text-blue-800 dark:text-blue-300">
              💡 Un diagrama que la IA genera en 10 segundos puede ahorrar una reunión de 2 horas de levantamiento de proceso. Eso es el retorno de inversión del Harness Engineering.
            </div>
          </div>
        `
      }]
  },
  {
    id: 5,
    number: "05",
    phase: "Fase 3",
    phaseTitle: "Ingeniería de Contexto & Prompts",
    title: "Módulo 05: Context Engineering - El Corazón del Harness",
    subtitle: "Cómo el contexto supera a la memoria y la estructura del archivo AGENT.md",
    readingTime: "7 min de lectura",
    icon: "cpu",
    badge: "Fase 3",
    objectives: [
      "Desmitificar la supuesta 'memoria' de la Inteligencia Artificial.",
      "Comprender la Arquitectura de un Arnés: AGENT.md, Reglas, Herramientas y Skills.",
      "Aprender la estructura de un archivo AGENT.md corporativo para evitar alucinaciones."
    ],
    summary: "Los modelos de IA son estáticos y leen todo el contexto en cada llamada. La Ingeniería de Contexto diseña el arnés exacto de directivas, herramientas y habilidades para garantizar resultados predecibles.",
    sections: [
      {
        title: "🧠 Contexto vs Memoria: El Gran Mito de la Inteligencia Artificial",
        content: `
          <div class="p-4 rounded-xl border border-rose-200 dark:border-rose-900/50 bg-rose-50/60 dark:bg-rose-950/20 mb-4">
            <h5 class="font-bold text-rose-900 dark:text-rose-200 mb-1">Mito vs Realidad</h5>
            <p class="text-sm text-rose-800 dark:text-rose-300">Un error común entre profesionales es creer que la IA 'recuerda' conversaciones pasadas como un ser humano. <strong>Técnicamente, los modelos de IA son estáticos.</strong> En cada mensaje, el modelo lee todo lo que está presente en la ventana de contexto actual. Si el contexto es desordenado o contradictorio, la IA cometerá errores ('alucinaciones').</p>
          </div>
          <p class="text-sm text-slate-700 dark:text-slate-300">La <strong>Ingeniería de Contexto (Context Engineering)</strong> consiste en estructurar la información exacta, reglas operativas y recursos que el agente necesita leer para ejecutar su trabajo con exactitud matemática.</p>
        `
      },
      {
        title: "📄 Componentes de la Arquitectura del Arnés (Harness)",
        content: `
          <div class="mermaid my-6 flex justify-center bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-x-auto">
flowchart TD
    subgraph Harness ["⚙️ Arnés del Proyecto (Harness)"]
        A["📄 AGENT.md / Reglas<br/><i>Directivas operativas y tono</i>"]
        B["🧰 Tools (Herramientas)<br/><i>Lectura, escritura, búsquedas</i>"]
        C["🎓 Skills (Habilidades)<br/><i>Manuales de procedimientos reusables</i>"]
    end

    Harness --> Agente["🤖 Agente de IA Ejecutante"]
    Agente --> Resultado["📦 Resultado de Negocio Esperado"]
          </div>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <div class="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
              <h5 class="font-bold text-slate-800 dark:text-slate-200 text-sm mb-1">Tools (Herramientas)</h5>
              <p class="text-xs text-slate-600 dark:text-slate-400">Son los 'brazos y piernas' del agente: le permiten leer archivos Excel, consultar bases de datos o redactar un nuevo informe.</p>
            </div>
            <div class="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
              <h5 class="font-bold text-slate-800 dark:text-slate-200 text-sm mb-1">Skills (Habilidades)</h5>
              <p class="text-xs text-slate-600 dark:text-slate-400">Son paquetes de instrucciones paso a paso para resolver un proceso recurrente (ej. 'Procedimiento de Auditoría de Gastos de Representación').</p>
            </div>
          </div>
        `
      },
      {
        title: "📋 Estructura de un Archivo AGENT.md Real",
        content: `
          <p class="text-sm text-slate-700 dark:text-slate-300 mb-3">El archivo <code>AGENT.md</code> se sitúa en la carpeta principal del proyecto para que la IA asimile automáticamente el marco operativo:</p>
          <div class="code-preview-block mb-4">
            <pre><code># Directivas del Agente Administrativo

## Rol y Objetivo
Eres el Asistente Ejecutivo de la Dirección de Finanzas. Tu objetivo es revisar reportes de gastos y preparar borradores de presupuestos.

## Reglas Inquebrantables
1. **Moneda Estándar**: Todos los valores deben expresarse en USD.
2. **Tono de Comunicación**: Estrictamente formal y corporativo.
3. **Verificación de Datos**: Nunca asumas un gasto no justificado; solicita aclaración si falta el recibo correspondiente.

## Formato de Salida
Todas las respuestas deben entregarse en formato Markdown estructurado con tablas resumidas.</code></pre>
          </div>
        `
      }
    ,
      {
        title: "📝 Tarea Práctica — Módulo 05",
        content: `
          <div class="p-5 rounded-2xl border border-amber-200 dark:border-amber-800/60 bg-amber-50/40 dark:bg-amber-950/20">
            <div class="flex items-center gap-3 mb-4">
              <span class="text-2xl">📝</span>
              <div>
                <h4 class="font-bold text-amber-900 dark:text-amber-200 text-base">Tarea Práctica — Módulo 05</h4>
                <p class="text-xs text-amber-700 dark:text-amber-400 font-medium">Diseña tu AGENT.md para un Proyecto Real</p>
              </div>
            </div>
            <ol class="space-y-2 mb-5 list-none">
              <li class="flex items-start gap-2"><span class="mt-0.5 text-amber-600 dark:text-amber-400 font-bold text-xs">→</span><span class="text-xs text-slate-700 dark:text-slate-300">Elige un proyecto real de tu trabajo (o uno hipotético detallado) donde usarías un agente de IA.</span></li>
              <li class="flex items-start gap-2"><span class="mt-0.5 text-amber-600 dark:text-amber-400 font-bold text-xs">→</span><span class="text-xs text-slate-700 dark:text-slate-300">Crea el archivo <code>docs/tarea_05_agentmd.md</code> con un borrador de <code>AGENT.md</code> para ese proyecto.</span></li>
              <li class="flex items-start gap-2"><span class="mt-0.5 text-amber-600 dark:text-amber-400 font-bold text-xs">→</span><span class="text-xs text-slate-700 dark:text-slate-300">El borrador debe incluir: Rol del agente, al menos 3 reglas inquebrantables, el contexto del proyecto (qué archivos existen) y el formato de entrega esperado.</span></li>
              <li class="flex items-start gap-2"><span class="mt-0.5 text-amber-600 dark:text-amber-400 font-bold text-xs">→</span><span class="text-xs text-slate-700 dark:text-slate-300">Agrega al menos una regla de seguridad (<em>Human-in-the-Loop</em>): qué debe preguntar el agente antes de ejecutar acciones irreversibles.</span></li>
            </ol>
            <div class="p-3.5 rounded-xl border border-emerald-200 dark:border-emerald-800/60 bg-emerald-50/40 dark:bg-emerald-950/20 mb-3">
              <h5 class="font-bold text-emerald-800 dark:text-emerald-300 text-xs mb-2">✅ Criterio de Éxito:</h5>
              <ul class="space-y-1 list-none">
              <li class="flex items-start gap-2"><span class="text-emerald-500">✓</span><span class="text-xs text-slate-700 dark:text-slate-300">Archivo <code>docs/tarea_05_agentmd.md</code> con las 4 secciones requeridas.</span></li>
              <li class="flex items-start gap-2"><span class="text-emerald-500">✓</span><span class="text-xs text-slate-700 dark:text-slate-300">Las reglas son específicas y aplicables (no genéricas como 'sé amable').</span></li>
              <li class="flex items-start gap-2"><span class="text-emerald-500">✓</span><span class="text-xs text-slate-700 dark:text-slate-300">Incluye al menos una regla de confirmación humana para acciones de riesgo.</span></li>
              </ul>
            </div>
            <div class="p-3 rounded-lg bg-blue-50/60 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800/40 text-xs text-blue-800 dark:text-blue-300">
              💡 Un buen <code>AGENT.md</code> es como un contrato de trabajo para la IA — cuanto más específico, menos sorpresas desagradables. Este ejercicio es la habilidad central del Harness Engineer.
            </div>
          </div>
        `
      }]
  },
  {
    id: 6,
    number: "06",
    phase: "Fase 3",
    phaseTitle: "Ingeniería de Contexto & Prompts",
    title: "Módulo 06: Prompt Engineering Práctico para Negocios",
    subtitle: "Eliminando prompts 'dummy' y aplicando la fórmula ejecutiva de 4 elementos",
    readingTime: "6 min de lectura",
    icon: "target",
    badge: "Fase 3",
    objectives: [
      "Reconocer las fallas críticas de los 'prompts dummy' genéricos.",
      "Dominar la Fórmula de 4 Elementos: Persona, Contexto, Restricciones y Formato.",
      "Aplicar técnicas avanzadas: Few-Shot Prompting y Chain-of-Thought (paso a paso)."
    ],
    summary: "Un prompt profesional para negocios no es una frase informal: es una instrucción rigurosa que define rol, contexto situacional, límites estrictos y el formato exacto de salida.",
    sections: [
      {
        title: "🚫 La Diferencia entre un Prompt 'Dummy' y un Prompt Profesional",
        content: `
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
            <div class="p-4 rounded-xl border border-rose-200 dark:border-rose-900/60 bg-rose-50/50 dark:bg-rose-950/20">
              <h5 class="font-bold text-rose-800 dark:text-rose-300 text-sm mb-2">❌ Prompt 'Dummy' (Vago e Ineficiente)</h5>
              <blockquote class="italic text-xs text-rose-950 dark:text-rose-200 p-2 bg-white/60 dark:bg-slate-900/60 rounded border-l-2 border-rose-400 mb-2">
                "Hazme un plan de trabajo para el área de administración."
              </blockquote>
              <p class="text-xs text-slate-600 dark:text-slate-400"><strong>Resultado:</strong> La IA devuelve generalidades obvias, lugares comunes y consejos genéricos sin aplicabilidad real.</p>
            </div>
            <div class="p-4 rounded-xl border border-emerald-200 dark:border-emerald-900/60 bg-emerald-50/50 dark:bg-emerald-950/20">
              <h5 class="font-bold text-emerald-800 dark:text-emerald-300 text-sm mb-2">✅ Prompt Profesional (Estructurado)</h5>
              <div class="code-preview-block text-xs">
                <pre><code>Actúa como un Consultor Senior de Operaciones.
### Contexto:
Somos una firma contable de 25 personas con retrasos de 5 días en la facturación.
### Tarea:
Diseña un Plan de Acción de 3 pasos para optimizar el flujo de cobros.
### Restricciones:
- No sugieras contratación de personal.
- Usa herramientas digitales ya existentes.
### Formato de Salida:
1. Resumen Ejecutivo (máx. 100 palabras).
2. Tabla Markdown con: Paso, Responsable e Impacto.
3. Diagrama sintético en Mermaid.</code></pre>
              </div>
            </div>
          </div>
        `
      },
      {
        title: "📐 La Fórmula de 4 Elementos para Prompts Ejecutivos",
        content: `
          <p class="text-sm text-slate-700 dark:text-slate-300 mb-4">Para obtener resultados de calidad a la primera, incluye siempre estos 4 ingredientes:</p>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            <div class="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
              <span class="text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">1. Persona / Rol</span>
              <p class="text-xs text-slate-600 dark:text-slate-400 mt-1">¿Quién debe ser la IA? (ej. Auditor Contable, Directora de RRHH, Docente Titular).</p>
            </div>
            <div class="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
              <span class="text-xs font-bold text-sky-600 dark:text-sky-400 uppercase tracking-wider">2. Contexto u Objetivo</span>
              <p class="text-xs text-slate-600 dark:text-slate-400 mt-1">¿Cuál es la situación actual y qué meta específica se persigue?</p>
            </div>
            <div class="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
              <span class="text-xs font-bold text-amber-600 dark:text-amber-400 uppercase tracking-wider">3. Restricciones</span>
              <p class="text-xs text-slate-600 dark:text-slate-400 mt-1">¿Qué NO debe hacer la IA? ¿Límites presupuestarios o de tono?</p>
            </div>
            <div class="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
              <span class="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">4. Formato de Salida</span>
              <p class="text-xs text-slate-600 dark:text-slate-400 mt-1">¿Cómo quieres el resultado? (Tabla Markdown, Slidev, lista numerada, Mermaid).</p>
            </div>
          </div>
        `
      },
      {
        title: "💡 Técnicas Avanzadas con Procesos Reales y Archivos de Estado Bandera",
        content: `
          <p class="mb-4 text-sm text-slate-700 dark:text-slate-300">
            En automatización administrativa y <strong>Harness Engineering</strong>, los agentes coordinan flujos mediante <strong>Archivos de Estado Bandera</strong> (<em>Flag State Files</em>, ej. <code>STATUS.flag</code> o <code>ESTADO.md</code>). Son pequeños archivos de texto que guardan en qué etapa se encuentra un expediente (<code>PENDIENTE</code>, <code>EN_REVISION</code>, <code>APROBADO</code>, <code>RECHAZADO</code>).
          </p>

          <h4 class="font-bold text-slate-900 dark:text-slate-100 text-sm mb-2">1. Ejemplo de Few-Shot Prompting con Archivo Bandera (STATUS.flag)</h4>
          <p class="text-xs text-slate-600 dark:text-slate-400 mb-3">
            Le damos a la IA <strong>2 ejemplos previos resueltos</strong> (*shots*) de auditoría de facturas para que aprenda exactamente cómo evaluar y actualizar el archivo de bandera:
          </p>
          <div class="code-preview-block text-xs mb-6">
            <pre><code>Actúa como Auditor Contable Automatizado de Cuentas por Pagar.

### Contexto:
Revisa la factura y genera el archivo de estado bandera 'STATUS.flag'.
Reglas:
- Si monto < $2,500 USD con recibo fiscal: ESTADO = APROBADO_DIRECTO.
- Si monto >= $2,500 USD o falta recibo: ESTADO = REQUIERE_AUTORIZACION_GERENCIAL.

---
### Ejemplo 1 (Shot 1):
Entrada: Factura F-101 por $1,200 USD de "Papelería Express" con recibo fiscal adjunto.
Salida (STATUS.flag):
ESTADO: APROBADO_DIRECTO
RESPONSABLE: Auditoría Automática
FECHA: 2026-10-24
NOTAS: Cumple con límite presupuestario y soporte fiscal completo.

---
### Ejemplo 2 (Shot 2):
Entrada: Factura F-102 por $4,800 USD de "Limpieza Integral" con recibo fiscal adjunto.
Salida (STATUS.flag):
ESTADO: REQUIERE_AUTORIZACION_GERENCIAL
RESPONSABLE: Auditoría Automática
FECHA: 2026-10-24
NOTAS: Monto excede umbral de $2,500 USD. Se deriva a Gerencia Financiera.

---
### Tarea Actual:
Entrada: Factura F-103 por $950 USD de "Mantenimiento AC", pero el proveedor NO adjuntó el recibo fiscal.
Genera exactamente el contenido que debe escribirse en 'STATUS.flag'.</code></pre>
          </div>

          <h4 class="font-bold text-slate-900 dark:text-slate-100 text-sm mb-2">2. Ejemplo de Chain-of-Thought (CoT) con Archivo Bandera (ESTADO_REEMBOLSO.md)</h4>
          <p class="text-xs text-slate-600 dark:text-slate-400 mb-3">
            La técnica <em>Chain-of-Thought</em> obliga al modelo a desglosar su razonamiento paso a paso antes de emitir la bandera final, garantizando que no cometa errores aritméticos ni pase por alto políticas:
          </p>
          <div class="code-preview-block text-xs mb-4">
            <pre><code>Actúa como Supervisor de Recursos Humanos y Auditoría de Gastos.

### Contexto:
El empleado Juan Pérez solicita reembolso de viaje por $180 USD con estos 3 comprobantes:
1. Almuerzo con cliente: $65 USD.
2. Taxi al aeropuerto: $35 USD.
3. Cena de trabajo: $80 USD.

### Política Inquebrantable:
- Límite máximo reembolsable por comida individual: $50 USD.
- Gastos de transporte terrestre: Sin límite si tienen comprobante.

### Instrucción con Chain-of-Thought:
Piensa paso a paso y justifica minuciosamente cada gasto antes de emitir tu conclusión.

Parte 1: Razonamiento Paso a Paso (Audit Trail)
- Revisa cada comprobante contra la política.
- Calcula el excedente no reembolsable.
- Determina el monto neto a reembolsar.

Parte 2: Actualización de Archivo Bandera ('ESTADO_REEMBOLSO.md')
Genera el contenido estructurado final:
# BANDERA DE ESTADO: REEMBOLSO DE VIÁTICOS
- EXPEDIENTE: VIAJE-2026-089
- SOLICITANTE: Juan Pérez
- ESTADO: [APROBADO_TOTAL | APROBADO_CON_AJUSTE | RECHAZADO]
- MONTO SOLICITADO: $... USD
- MONTO APROBADO: $... USD
- MONTO DEDUCIDO POR POLÍTICA: $... USD
- ACCIÓN SIGUIENTE: Derivar a Tesorería para dispersión.</code></pre>
          </div>
        `
      }
    ,
      {
        title: "📝 Tarea Práctica — Módulo 06",
        content: `
          <div class="p-5 rounded-2xl border border-amber-200 dark:border-amber-800/60 bg-amber-50/40 dark:bg-amber-950/20">
            <div class="flex items-center gap-3 mb-4">
              <span class="text-2xl">📝</span>
              <div>
                <h4 class="font-bold text-amber-900 dark:text-amber-200 text-base">Tarea Práctica — Módulo 06</h4>
                <p class="text-xs text-amber-700 dark:text-amber-400 font-medium">Prompts Avanzados: Few-Shot y Chain-of-Thought</p>
              </div>
            </div>
            <ol class="space-y-2 mb-5 list-none">
              <li class="flex items-start gap-2"><span class="mt-0.5 text-amber-600 dark:text-amber-400 font-bold text-xs">→</span><span class="text-xs text-slate-700 dark:text-slate-300">Elige una tarea de análisis o clasificación de tu área (ej. clasificar correos por urgencia, categorizar gastos, evaluar propuestas de proveedores).</span></li>
              <li class="flex items-start gap-2"><span class="mt-0.5 text-amber-600 dark:text-amber-400 font-bold text-xs">→</span><span class="text-xs text-slate-700 dark:text-slate-300">Escribe un prompt <strong>Few-Shot</strong> con 2 ejemplos completos (entrada → salida esperada) y aplícalo a 3 casos reales. Guarda en <code>docs/tarea_06_prompts.md</code>.</span></li>
              <li class="flex items-start gap-2"><span class="mt-0.5 text-amber-600 dark:text-amber-400 font-bold text-xs">→</span><span class="text-xs text-slate-700 dark:text-slate-300">Para la misma tarea, escribe un prompt <strong>Chain-of-Thought</strong> que pida al agente razonar en voz alta antes de dar la respuesta final.</span></li>
              <li class="flex items-start gap-2"><span class="mt-0.5 text-amber-600 dark:text-amber-400 font-bold text-xs">→</span><span class="text-xs text-slate-700 dark:text-slate-300">Compara los resultados: ¿Cuál fue más preciso? ¿Cuál fue más costoso en tiempo?</span></li>
            </ol>
            <div class="p-3.5 rounded-xl border border-emerald-200 dark:border-emerald-800/60 bg-emerald-50/40 dark:bg-emerald-950/20 mb-3">
              <h5 class="font-bold text-emerald-800 dark:text-emerald-300 text-xs mb-2">✅ Criterio de Éxito:</h5>
              <ul class="space-y-1 list-none">
              <li class="flex items-start gap-2"><span class="text-emerald-500">✓</span><span class="text-xs text-slate-700 dark:text-slate-300">Archivo <code>docs/tarea_06_prompts.md</code> con ambos tipos de prompts documentados.</span></li>
              <li class="flex items-start gap-2"><span class="text-emerald-500">✓</span><span class="text-xs text-slate-700 dark:text-slate-300">El prompt Few-Shot tiene al menos 2 ejemplos completos con formato de tabla.</span></li>
              <li class="flex items-start gap-2"><span class="text-emerald-500">✓</span><span class="text-xs text-slate-700 dark:text-slate-300">El prompt Chain-of-Thought incluye instrucción explícita de razonamiento paso a paso.</span></li>
              <li class="flex items-start gap-2"><span class="text-emerald-500">✓</span><span class="text-xs text-slate-700 dark:text-slate-300">Hay una comparación breve (3-5 líneas) de los resultados obtenidos.</span></li>
              </ul>
            </div>
            <div class="p-3 rounded-lg bg-blue-50/60 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800/40 text-xs text-blue-800 dark:text-blue-300">
              💡 Los prompts Few-Shot son como formularios pre-llenados que guían a la IA. Los Chain-of-Thought son como pedirle al agente que 'muestre el trabajo' — útiles cuando la precisión importa más que la velocidad.
            </div>
          </div>
        `
      }]
  },
  {
    id: 7,
    number: "07",
    phase: "Fase 4",
    phaseTitle: "Control & Extensión de Capacidades",
    title: "Módulo 07: Control de Versiones con Git y GitHub Desktop",
    subtitle: "Adiós al caos de 'archivo_final_v2_EDITADO.docx' mediante interfaces visuales",
    readingTime: "5 min de lectura",
    icon: "git-commit",
    badge: "Fase 4",
    objectives: [
      "Superar el caos de nombrado manual de archivos en las organizaciones.",
      "Entender los conceptos de Repositorio, Commit y Push.",
      "Dominar el flujo de trabajo en 3 pasos con GitHub Desktop sin usar comandos de terminal."
    ],
    summary: "Git permite guardar un historial inmutable de cambios ('commits') en un solo archivo. Con GitHub Desktop, cualquier profesional administrativo puede controlar versiones de forma 100% visual.",
    sections: [
      {
        title: "📦 ¿Por qué un Administrador Necesita Control de Versiones?",
        content: `
          <p class="mb-3">En la gestión documental tradicional, solemos encontrarnos con este escenario:</p>
          <div class="p-3 rounded-lg bg-rose-50 dark:bg-rose-950/30 border border-rose-200 dark:border-rose-900 font-mono text-xs text-rose-800 dark:text-rose-300 space-y-1 mb-4">
            <div>📄 Reporte_Final.docx</div>
            <div>📄 Reporte_Final_v2.docx</div>
            <div>📄 Reporte_Final_v2_EDITADO_juan.docx</div>
            <div>📄 Reporte_Final_DEFINITIVO_AHORA_SI.docx</div>
          </div>
          <p class="text-sm text-slate-700 dark:text-slate-300">Con <strong>Git</strong> existe un solo archivo (ej. <code>reporte.md</code>). Cada vez que guardas un avance significativo, Git registra una 'foto' instantánea llamada <strong>Commit</strong>, permitiéndote volver en el tiempo o comparar qué palabra cambió exactamente.</p>
        `
      },
      {
        title: "🖥️ Flujo de Trabajo en 3 Pasos con GitHub Desktop",
        content: `
          <p class="text-sm text-slate-700 dark:text-slate-300 mb-4"><strong>GitHub Desktop</strong> es una aplicación gráfica para Windows y Mac que elimina cualquier uso de comandos de consola:</p>
          <div class="mermaid my-6 flex justify-center bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-x-auto">
flowchart LR
    A["✏️ 1. Modificar Archivo<br/><i>(Markdown / Slidev)</i>"] --> B["📸 2. Hacer Commit<br/><i>(Guardar Foto en Historial)</i>"]
    B --> C["☁️ 3. Push / Sync<br/><i>(Sincronizar con la Nube)</i>"]
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-3 my-4">
            <div class="p-3 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
              <span class="font-bold text-sm text-slate-900 dark:text-slate-100">1. Repositorio</span>
              <p class="text-xs text-slate-600 dark:text-slate-400 mt-1">La carpeta del proyecto donde Git supervisa todos los archivos automáticamente.</p>
            </div>
            <div class="p-3 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
              <span class="font-bold text-sm text-slate-900 dark:text-slate-100">2. Commit</span>
              <p class="text-xs text-slate-600 dark:text-slate-400 mt-1">Punto de control con mensaje descriptivo (ej. 'Actualización de presupuesto trimestral').</p>
            </div>
            <div class="p-3 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
              <span class="font-bold text-sm text-slate-900 dark:text-slate-100">3. Push / Sync</span>
              <p class="text-xs text-slate-600 dark:text-slate-400 mt-1">Subir los cambios guardados a la nube (GitHub.com) para respaldo o trabajo en equipo.</p>
            </div>
          </div>
          <div class="mt-4">
            <a href="https://desktop.github.com/" target="_blank" rel="noopener noreferrer" class="text-xs text-indigo-600 dark:text-indigo-400 underline font-medium">Descargar GitHub Desktop Oficial (desktop.github.com) →</a>
          </div>
        `
      }
    ,
      {
        title: "📝 Tarea Práctica — Módulo 07",
        content: `
          <div class="p-5 rounded-2xl border border-amber-200 dark:border-amber-800/60 bg-amber-50/40 dark:bg-amber-950/20">
            <div class="flex items-center gap-3 mb-4">
              <span class="text-2xl">📝</span>
              <div>
                <h4 class="font-bold text-amber-900 dark:text-amber-200 text-base">Tarea Práctica — Módulo 07</h4>
                <p class="text-xs text-amber-700 dark:text-amber-400 font-medium">Primera Confirmación de Historial de Trabajo con Git</p>
              </div>
            </div>
            <ol class="space-y-2 mb-5 list-none">
              <li class="flex items-start gap-2"><span class="mt-0.5 text-amber-600 dark:text-amber-400 font-bold text-xs">→</span><span class="text-xs text-slate-700 dark:text-slate-300">Abre la carpeta <code>curso-_harness_engineering/</code> con GitHub Desktop.</span></li>
              <li class="flex items-start gap-2"><span class="mt-0.5 text-amber-600 dark:text-amber-400 font-bold text-xs">→</span><span class="text-xs text-slate-700 dark:text-slate-300">Verifica que los archivos de tus tareas anteriores aparecen como cambios pendientes.</span></li>
              <li class="flex items-start gap-2"><span class="mt-0.5 text-amber-600 dark:text-amber-400 font-bold text-xs">→</span><span class="text-xs text-slate-700 dark:text-slate-300">Realiza un <em>commit</em> con el mensaje: <code>"feat: tareas completadas módulos 00-06"</code>.</span></li>
              <li class="flex items-start gap-2"><span class="mt-0.5 text-amber-600 dark:text-amber-400 font-bold text-xs">→</span><span class="text-xs text-slate-700 dark:text-slate-300">Opcionalmente, publica (push) los cambios al repositorio remoto en GitHub.</span></li>
              <li class="flex items-start gap-2"><span class="mt-0.5 text-amber-600 dark:text-amber-400 font-bold text-xs">→</span><span class="text-xs text-slate-700 dark:text-slate-300">Captura o describe el estado del panel de GitHub Desktop tras el commit exitoso en un archivo <code>docs/tarea_07_git.md</code>.</span></li>
            </ol>
            <div class="p-3.5 rounded-xl border border-emerald-200 dark:border-emerald-800/60 bg-emerald-50/40 dark:bg-emerald-950/20 mb-3">
              <h5 class="font-bold text-emerald-800 dark:text-emerald-300 text-xs mb-2">✅ Criterio de Éxito:</h5>
              <ul class="space-y-1 list-none">
              <li class="flex items-start gap-2"><span class="text-emerald-500">✓</span><span class="text-xs text-slate-700 dark:text-slate-300">Al menos un commit realizado con mensaje descriptivo.</span></li>
              <li class="flex items-start gap-2"><span class="text-emerald-500">✓</span><span class="text-xs text-slate-700 dark:text-slate-300">Archivo <code>docs/tarea_07_git.md</code> describiendo la experiencia.</span></li>
              <li class="flex items-start gap-2"><span class="text-emerald-500">✓</span><span class="text-xs text-slate-700 dark:text-slate-300">Entiende la diferencia entre <em>commit</em> (guardar localmente) y <em>push</em> (compartir al servidor).</span></li>
              </ul>
            </div>
            <div class="p-3 rounded-lg bg-blue-50/60 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800/40 text-xs text-blue-800 dark:text-blue-300">
              💡 Este commit es tu primera 'fotografía oficial' del progreso del curso. Los commits frecuentes son el equivalente al botón Ctrl+Z infinito — sin ellos, cada error es permanente.
            </div>
          </div>
        `
      }]
  },
  {
    id: 8,
    number: "08",
    phase: "Fase 4",
    phaseTitle: "Control & Extensión de Capacidades",
    title: "Módulo 08: Servidores MCP y Scripts Asistidos por IA",
    subtitle: "Conectando al agente con el mundo exterior y liderando automatizaciones",
    readingTime: "6 min de lectura",
    icon: "plug",
    badge: "Fase 4",
    objectives: [
      "Comprender el estándar Model Context Protocol (MCP).",
      "Identificar cómo MCP conecta la IA con Google Sheets, correos corporativos y bases de datos.",
      "Asumir el rol de 'Arquitecto y Auditor' al pedir automatizaciones asistidas por IA."
    ],
    summary: "MCP es el puente seguro que conecta a los agentes con los sistemas reales del negocio. Como profesional, no programas el script: guías a la IA y auditas los resultados.",
    sections: [
      {
        title: "⚙️ ¿Qué es MCP (Model Context Protocol)?",
        content: `
          <p class="mb-4">Hasta hace poco, un chatbot de IA solo podía procesar el texto que tú le pegabas manualmente en la ventana. <strong>Model Context Protocol (MCP)</strong> es un estándar universal de la industria para que los agentes se conecten de forma segura a sistemas externos de la empresa:</p>
          
          <div class="mermaid my-6 flex justify-center bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-x-auto">
flowchart TD
    A["🤖 Agente de IA (Antigravity)"] <-->|Protocolo MCP| B["🔌 Servidor MCP"]
    B <--> C["📊 Google Sheets"]
    B <--> D["📧 Correo Institucional"]
    B <--> E["💾 Archivos Locales"]
          </div>
        `
      },
      {
        title: "🐍 Automatizaciones y Scripts Asistidos por IA",
        content: `
          <p class="mb-4 text-sm text-slate-700 dark:text-slate-300">Como profesional no técnico, tu papel no es memorizar la sintaxis de Python o JavaScript, sino actuar como <strong>Arquitecto y Auditor</strong>:</p>
          <div class="space-y-3">
            <div class="p-3 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 flex items-start gap-3">
              <span class="font-bold text-indigo-600 dark:text-indigo-400 text-sm">Paso 1</span>
              <div>
                <strong class="text-sm text-slate-900 dark:text-slate-100">Define el Problema con Claridad:</strong>
                <p class="text-xs text-slate-600 dark:text-slate-400 italic">"Tengo una carpeta con 50 facturas en PDF y necesito extraer el total y la fecha de cada una a un archivo Excel."</p>
              </div>
            </div>
            <div class="p-3 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 flex items-start gap-3">
              <span class="font-bold text-indigo-600 dark:text-indigo-400 text-sm">Paso 2</span>
              <div>
                <strong class="text-sm text-slate-900 dark:text-slate-100">Solicita la Solución al Agente:</strong>
                <p class="text-xs text-slate-600 dark:text-slate-400 italic">"Crea un script asistido que lea los archivos PDF y genere el archivo totales.csv estructurado."</p>
              </div>
            </div>
            <div class="p-3 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 flex items-start gap-3">
              <span class="font-bold text-indigo-600 dark:text-indigo-400 text-sm">Paso 3</span>
              <div>
                <strong class="text-sm text-slate-900 dark:text-slate-100">Pide Instrucciones Visuales de Ejecución:</strong>
                <p class="text-xs text-slate-600 dark:text-slate-400 italic">"Explícame paso a paso cómo ejecutarlo con un solo clic o ejecuta la tarea directamente con tus herramientas."</p>
              </div>
            </div>
          </div>
        `
      },
      {
        title: "🎓 Cierre del Programa: Tu Nuevo Perfil Profesional",
        content: `
          <div class="p-5 rounded-xl border border-indigo-200 dark:border-indigo-800/80 bg-gradient-to-br from-indigo-50/50 to-purple-50/50 dark:from-indigo-950/30 dark:to-purple-950/20">
            <h4 class="font-bold text-indigo-900 dark:text-indigo-200 mb-2">🏆 Has completado todos los módulos formativos</h4>
            <p class="text-sm text-slate-700 dark:text-slate-300 mb-3">Ahora posees el criterio para estructurar arneses de IA, redactar prompts estructurados, representar flujos en Mermaid, comunicar ideas con Slidev y auditar integraciones con servidores MCP.</p>
            <p class="text-sm font-semibold text-indigo-700 dark:text-indigo-300">¡Es momento de validar tus conocimientos en la Evaluación Final!</p>
          </div>
        `
      }
    ,
      {
        title: "📝 Tarea Práctica — Módulo 08",
        content: `
          <div class="p-5 rounded-2xl border border-amber-200 dark:border-amber-800/60 bg-amber-50/40 dark:bg-amber-950/20">
            <div class="flex items-center gap-3 mb-4">
              <span class="text-2xl">📝</span>
              <div>
                <h4 class="font-bold text-amber-900 dark:text-amber-200 text-base">Tarea Práctica — Módulo 08</h4>
                <p class="text-xs text-amber-700 dark:text-amber-400 font-medium">Diseño de Escenario MCP para Tu Organización</p>
              </div>
            </div>
            <ol class="space-y-2 mb-5 list-none">
              <li class="flex items-start gap-2"><span class="mt-0.5 text-amber-600 dark:text-amber-400 font-bold text-xs">→</span><span class="text-xs text-slate-700 dark:text-slate-300">Elige una herramienta externa relevante para tu trabajo: Google Sheets, Gmail/correo institucional, o una carpeta de archivos con registros históricos.</span></li>
              <li class="flex items-start gap-2"><span class="mt-0.5 text-amber-600 dark:text-amber-400 font-bold text-xs">→</span><span class="text-xs text-slate-700 dark:text-slate-300">Crea el archivo <code>docs/tarea_08_mcp.md</code> y responde: (1) ¿Qué datos debe <em>leer</em> el agente? (2) ¿Qué debe <em>escribir o actualizar</em>? (3) ¿Qué acción <strong>nunca</strong> debe ejecutar sin confirmación humana?</span></li>
              <li class="flex items-start gap-2"><span class="mt-0.5 text-amber-600 dark:text-amber-400 font-bold text-xs">→</span><span class="text-xs text-slate-700 dark:text-slate-300">Redacta el prompt completo de 3 pasos (Arquitecto y Auditor): Definición del problema → Solicitud del script → Instrucciones de ejecución.</span></li>
              <li class="flex items-start gap-2"><span class="mt-0.5 text-amber-600 dark:text-amber-400 font-bold text-xs">→</span><span class="text-xs text-slate-700 dark:text-slate-300">Identifica una señal de alerta (<em>red flag</em>) que indicaría que el agente está actuando fuera de sus límites.</span></li>
            </ol>
            <div class="p-3.5 rounded-xl border border-emerald-200 dark:border-emerald-800/60 bg-emerald-50/40 dark:bg-emerald-950/20 mb-3">
              <h5 class="font-bold text-emerald-800 dark:text-emerald-300 text-xs mb-2">✅ Criterio de Éxito:</h5>
              <ul class="space-y-1 list-none">
              <li class="flex items-start gap-2"><span class="text-emerald-500">✓</span><span class="text-xs text-slate-700 dark:text-slate-300">Archivo <code>docs/tarea_08_mcp.md</code> con las 3 preguntas del paso 2 respondidas.</span></li>
              <li class="flex items-start gap-2"><span class="text-emerald-500">✓</span><span class="text-xs text-slate-700 dark:text-slate-300">Prompt de 3 pasos redactado con datos reales o verosímiles de tu contexto.</span></li>
              <li class="flex items-start gap-2"><span class="text-emerald-500">✓</span><span class="text-xs text-slate-700 dark:text-slate-300">Al menos una acción identificada como requerida de confirmación humana.</span></li>
              <li class="flex items-start gap-2"><span class="text-emerald-500">✓</span><span class="text-xs text-slate-700 dark:text-slate-300">Al menos un <em>red flag</em> documentado con criterio de detección.</span></li>
              </ul>
            </div>
            <div class="p-3 rounded-lg bg-blue-50/60 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800/40 text-xs text-blue-800 dark:text-blue-300">
              💡 Este ejercicio representa el nivel más avanzado del curso — diseñas el arnés completo de conexión entre IA y sistemas empresariales sin escribir una línea de código. Eso es Harness Engineering aplicado.
            </div>
          </div>
        `
      }]
  },
  {
    id: 9,
    number: "09",
    phase: "Evaluación",
    phaseTitle: "Certificación Final",
    title: "Evaluación Final: Harness Engineer Practitioner",
    subtitle: "Ponte a prueba con 12 preguntas de validación. Tus resultados se guardan en LocalStorage",
    readingTime: "10-15 min",
    icon: "award",
    badge: "Examen",
    isAssessment: true,
    objectives: [
      "Evaluar tu comprensión conceptual de los 8 módulos del programa.",
      "Obtener una calificación mínima del 75% para aprobar.",
      "Guardar tu registro oficial de resultados en LocalStorage y generar tu Certificado Digital."
    ],
    summary: "Esta evaluación consta de 12 preguntas de opción múltiple basadas en casos y principios reales vistos en el curso. Al aprobar, podrás personalizar y descargar tu certificado oficial.",
    sections: []
  }
];
