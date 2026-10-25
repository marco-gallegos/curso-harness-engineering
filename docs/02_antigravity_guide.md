# Módulo 02: Ecosistema Antigravity y Agentes de Inteligencia Artificial

## 🎯 Objetivo del Módulo
Comprender el concepto de **Agente de IA**, explorar las plataformas líderes del mercado (**Antigravity, OpenCode, Claude, Pi Agent y DeepSeek Harness**), analizar sus diferencias mediante tablas comparativas ejecutivas y dominar sus **limitaciones operativas y de seguridad** para tomar decisiones de negocio fundamentadas.

---

## 🤖 ¿Qué es un Agente de IA vs un Chatbot Tradicional?

| Característica | Chatbot Tradicional (ej. ChatGPT web clásico) | Agente de IA con Arnés (ej. Antigravity) |
| :--- | :--- | :--- |
| **Interacción** | Pregunta y respuesta en un hilo plano secuencial | Ejecución autónoma de flujos de trabajo paso a paso |
| **Capacidades** | Solo genera texto o código en la pantalla | Lee/escribe archivos reales, busca en web, ejecuta herramientas |
| **Contexto** | Se pierde al cerrar la ventana o reiniciar el chat | Mantiene un arnés de reglas persistente (`AGENT.md`), archivos e historia |
| **Sub-tareas** | El usuario debe pedir cada paso manualmente | Puede delegar a subagentes especializados autónomamente |

---

## 🌌 Visión General del Agente Antigravity

**Antigravity** es un entorno de desarrollo y automatización asistido por Inteligencia Artificial diseñado específicamente para implementar **Harness Engineering**.

### Componentes Clave en Antigravity:
1. **Reglas Globales y de Proyecto**: Archivos donde especificamos cómo queremos que se comporte el agente, su tono corporativo y restricciones inquebrantables.
2. **Tools (Herramientas)**: Capacidades nativas para inspeccionar carpetas, redactar reportes, realizar búsquedas o ejecutar scripts.
3. **Subagentes Especializados**: Capacidad de instanciar asistentes secundarios dedicados a tareas paralelas (ej. un subagente investigador y un subagente redactor).

---

## 🌐 Ecosistema de Agentes y Arneses del Mercado

No todos los modelos ni plataformas de IA cumplen el mismo rol dentro de una organización. A continuación analizamos los 5 actores más relevantes:

### 1. Antigravity (Google / DeepMind)
- **Enfoque**: Entorno integral de Harness Engineering y orquestación multi-agente local/híbrida.
- **Fortaleza**: Control granular sobre directivas de proyecto, soporte nativo de *Skills* reusables y delegación fluida a subagentes sin salir del espacio de trabajo.
- **Público**: Equipos que buscan transformar directivas organizacionales en automatizaciones auditables sobre sus propios archivos.

### 2. OpenCode (Ecosistema Open Source "Todo Incluido")
- **Enfoque**: Agente de código abierto robusto para la terminal y entornos de desarrollo con filosofía *"Batteries-Included"* (todo incluido).
- **Fortaleza**: Cuenta con modo de planificación (*Plan Mode*), gestión multi-sesión, subagentes integrados, diagnósticos de código y soberanía total de datos al desplegarse localmente.
- **Público**: Organizaciones y desarrolladores que buscan una plataforma lista para usar sin necesidad de configurar extensiones manuales.

### 3. Pi Coding Agent (`pi` - Earendil / pi.dev)
- **Enfoque**: El arnés de agente de código abierto más **minimalista, hackeable y ligero** del ecosistema (la filosofía *"Neovim"* de los agentes).
- **Fortaleza**: Su núcleo es ultra-ligero: opera con solo 4 herramientas esenciales (`read`, `write`, `edit`, `bash`) y un prompt de sistema diminuto (<1,000 tokens). Es altamente extensible mediante TypeScript, extensiones modulares, skills y servidores MCP. Además, soporta múltiples proveedores (puede incluso utilizar a OpenCode como proveedor de inferencia: `pi --model opencode/...`).
- **Público**: Equipos que desean control absoluto sobre cada token de contexto, personalización profunda y nulo consumo superfluo de recursos.

### 4. Claude (Anthropic - Projects & Claude Code)
- **Enfoque**: Agente en la nube de alta fidelidad analítica con ventana de contexto masiva (200k+ tokens).
- **Fortaleza**: Capacidad de razonamiento conceptual superior, lectura de manuales o contratos de cientos de páginas sin perder detalles, y generación de *Artifacts* interactivos.
- **Público**: Análisis estratégico, revisión de políticas corporativas extensas y auditoría de documentos densos.

### 5. DeepSeek Harness (DeepSeek V3 & R1)
- **Enfoque**: Modelos de razonamiento profundo con pesos abiertos (*Open Weights*) integrados en arneses de inferencia lógica.
- **Fortaleza**: Capacidad de pensamiento paso a paso (*Chain-of-Thought*) transparente y matemática a un costo hasta **90% menor** que modelos propietarios occidentales. Puede desplegarse en la nube o en servidores locales mediante herramientas como Ollama o vLLM.
- **Público**: Procesamiento de datos estructurados, validación financiera, lógica contable y organizaciones que buscan maximizar el retorno de inversión (ROI) en cómputo.

---

## 📊 Matriz Comparativa Ejecutiva

| Plataforma | Tipo de Arnés | Entorno de Ejecución | Acceso a Herramientas / Archivos | Filosofía de Diseño | Enfoque Primario de Negocio |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Antigravity** | Completo Multi-agente | Local & Híbrido | Nativo (Lectura, escritura, terminal, web) | Arnés guiado por reglas (`AGENT.md`) | Flujos corporativos estructurados y orquestación |
| **OpenCode** | Open Source "Todo Incluido" | 100% Local / Self-Hosted | Nativo (Plan mode, sub-agents, LSP) | "Estilo VS Code" (Plataforma lista para usar) | Privacidad y cumplimiento legal con funciones completas |
| **Pi Agent (`pi`)** | Open Source Minimalista | 100% Local / Terminal | 4 herramientas esenciales (`read`, `write`, `edit`, `bash`) | "Estilo Neovim" (Núcleo mínimo, ultra-extensible) | Máximo control de tokens, scripts a medida y ligereza |
| **Claude (Anthropic)** | Gestionado (Projects / Code) | Nube (Cloud Anthropic) | Mediante Artifacts, Claude Code o API | Alta fidelidad en contexto masivo | Razonamiento complejo sobre textos y contratos extensos |
| **DeepSeek Harness** | Inferencia / Razonamiento | Nube o Local (vLLM / Ollama) | Mediante orquestadores externos (LangChain, etc.) | Razonamiento reflexivo de pesos abiertos | Lógica analítica, matemáticas y costes ultra-bajos |

---

## ⚠️ Análisis de Limitaciones Críticas (Lo que Debes Saber)

Para un profesional no técnico, conocer los límites de cada herramienta es tan crucial como conocer sus bondades:

### 1. Limitaciones Específicas por Plataforma:
- **Antigravity**: Requiere definir con rigor el arnés (`AGENT.md`); si las reglas son ambiguas, los subagentes pueden iterar en bucles.
- **OpenCode**: Al ser una suite completa, su prompt inicial y contexto base consumen más tokens por llamada que un arnés minimalista.
- **Pi Agent (`pi`)**: Al ser minimalista por diseño, requiere que el usuario instale o configure extensiones si necesita interfaces gráficas complejas.
- **Claude**: Dependencia 100% de la nube y conexión a internet; sujeto a límites de uso (*rate limits*) en horas pico.
- **DeepSeek (R1)**: Mayor latencia de respuesta (los modelos de razonamiento se toman varios segundos en "pensar" antes de emitir la primera palabra) y requiere un arnés externo para conectarse con herramientas del mundo real.

### 2. Limitaciones Generales del Harness Engineering:
- **Deriva de Contexto (*Context Drift*)**: En conversaciones o tareas excesivamente largas, el modelo acumula texto residual que diluye la atención de las reglas originales. Se recomienda reiniciar o compactar el contexto periódicamente.
- **Riesgo de Automatización sin Sandbox**: Conceder permisos de escritura o ejecución de comandos sin supervisión humana puede sobrescribir archivos valiosos. Siempre debe mantenerse el rol del humano como **Auditor Final**.
- **Costo de Inferencia vs Complejidad**: Usar modelos de razonamiento ultra-pesados para tareas triviales (como formatear una fecha) encarece los procesos sin aportar valor real.

---

## 🎯 Meta Práctica de la Fase 2: Instalar y Verificar tu Primer Agente de IA

La teoría cobra sentido cuando la llevas a tu computadora. **La meta obligatoria de esta Fase 2 es que instales y dejes operativo tu primer agente de IA.**

### Guía de Instalación del Agente (Antigravity):

#### Paso 1: Descarga e Instalación del Entorno
- Ingresa al portal oficial [antigravity.google/download](https://antigravity.google/download) y descarga el instalador correspondiente a tu sistema operativo (Windows o macOS).
- Ejecuta el asistente de instalación estándar (hacer clic en *Siguiente / Aceptar* sin necesidad de abrir consolas).

#### Paso 2: Autenticación y Conexión de tu Espacio de Trabajo
- Abre la aplicación de Antigravity e inicia sesión con tu cuenta de acceso corporativa o personal.
- Selecciona la opción **"Open Folder" (Abrir Carpeta)** y apunta a la carpeta de este curso: `curso-_harness_engineering/`.

#### Paso 3: Test de Validación (Prueba del Hola Mundo del Agente)
Envía este mensaje en el panel de interacción con el agente:
> *"Hola, soy tu operador. Por favor, examina esta carpeta y dime qué módulos encuentras en el directorio `docs/`."*

#### Paso 4: Criterio de Éxito de la Meta (Checklist)
Has superado la meta de la Fase 2 si el agente cumple con lo siguiente:
- [ ] Logra leer la lista de archivos de la carpeta sin que tengas que copiarlos manualmente en el chat.
- [ ] Confirma que reconoce el archivo de directivas `AGENT.md`.
- [ ] Responde de forma estructurada indicando que sus herramientas de lectura están activas.

---

## 📝 Tarea Práctica del Módulo (Homework 02)

**Objetivo:** Vivir la experiencia práctica de interactuar con un agente local y evaluar la diferencia entre arneses abiertos.

### Instrucciones Paso a Paso:
1. **Instalación:** Completa la meta práctica instalando Antigravity o activando un agente en tu editor de código.
2. **Ejecución del Primer Test:** Abre la carpeta del curso y pídele al agente:
   > *"Hola agente. Resume en 3 viñetas qué diferencias prácticas encontraría un profesional administrativo entre usar OpenCode ('batteries-included') y Pi Coding Agent (núcleo minimalista hackeable)."*
3. **Entregable:** Guarda la respuesta del agente en un nuevo archivo llamado `docs/tarea_02_agentes.md` dentro de tu proyecto.

---

## 🔗 Referencias Externas y Recursos
- [Documentación Oficial de Antigravity](https://antigravity.google)
- [Sitio Oficial de OpenCode (opencode.ai)](https://opencode.ai/)
- [Sitio Oficial de Pi Coding Agent (pi.dev)](https://pi.dev/)
- [Anthropic Claude & Claude Code Documentation](https://docs.anthropic.com/)
- [DeepSeek AI Research & Models](https://www.deepseek.com/)
