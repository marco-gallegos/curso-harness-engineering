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

### 2. OpenCode (Ecosistema Abierto / Open Source)
- **Enfoque**: Arneses de código abierto para ejecución local o en servidores propios (*Self-Hosted*).
- **Fortaleza**: **Soberanía y privacidad total de los datos**. Ninguna información confidencial de la empresa viaja a servidores de terceros en la nube. Totalmente auditable y libre de licencias por asiento.
- **Público**: Organizaciones con políticas estrictas de cumplimiento normativo (banca, salud, sector legal) que cuentan con infraestructura propia.

### 3. Claude (Anthropic - Projects & Claude Code)
- **Enfoque**: Agente en la nube de alta fidelidad analítica con ventana de contexto masiva (200k+ tokens).
- **Fortaleza**: Capacidad de razonamiento conceptual superior, lectura de manuales o contratos de cientos de páginas sin perder detalles, y generación de *Artifacts* interactivos.
- **Público**: Análisis estratégico, revisión de políticas corporativas extensas y auditoría de documentos densos.

### 4. Pi Agent (Inflection AI)
- **Enfoque**: Asistente conversacional empático y de diálogo personal.
- **Fortaleza**: Conversación cálida, fluida y adaptativa; excelente para brainstorming desestructurado, reflexión gerencial o coaching de comunicación.
- **Público**: Usuarios individuales que buscan un compañero de conversación y clarificación de ideas, **no de ejecución de tareas operativas**.

### 5. DeepSeek Harness (DeepSeek V3 & R1)
- **Enfoque**: Modelos de razonamiento profundo con pesos abiertos (*Open Weights*) integrados en arneses de inferencia lógica.
- **Fortaleza**: Capacidad de pensamiento paso a paso (*Chain-of-Thought*) transparente y matemática a un costo hasta **90% menor** que modelos propietarios occidentales. Puede desplegarse en la nube o en servidores locales mediante herramientas como Ollama o vLLM.
- **Público**: Procesamiento de datos estructurados, validación financiera, lógica contable y organizaciones que buscan maximizar el retorno de inversión (ROI) en cómputo.

---

## 📊 Matriz Comparativa Ejecutiva

| Plataforma | Tipo de Arnés | Entorno de Ejecución | Acceso a Archivos / Herramientas | Enfoque Primario de Negocio |
| :--- | :--- | :--- | :--- | :--- |
| **Antigravity** | Completo (Rules + Tools + Subagents) | Local & Híbrido | Nativo (Lectura, escritura, terminal, web) | Flujos corporativos estructurados y orquestación |
| **OpenCode** | Abierto y Modular | 100% Local / Self-Hosted | Extensible (Scripts locales y APIs abiertas) | Máxima privacidad y soberanía de datos internos |
| **Claude (Anthropic)** | Gestionado (Projects / Artifacts) | Nube (Cloud Anthropic) | Mediante Artifacts, Claude Code o API | Razonamiento complejo sobre textos extensos |
| **DeepSeek Harness** | Inferencia Lógica / Razonamiento | Nube o Local (vLLM / Ollama) | Mediante orquestadores externos (LangChain, etc.) | Lógica analítica, matemáticas y costos ultra-bajos |
| **Pi Agent** | Nulo (Chatbot Conversacional Puro) | Nube (Inflection) | Nulo (Solo texto en pantalla) | Brainstorming personal y coaching de comunicación |

---

## ⚠️ Análisis de Limitaciones Críticas (Lo que Debes Saber)

Para un profesional no técnico, conocer los límites de cada herramienta es tan crucial como conocer sus bondades:

### 1. Limitaciones Específicas por Plataforma:
- **Antigravity**: Requiere definir con rigor el arnés (`AGENT.md`); si las reglas son ambiguas, los subagentes pueden tomar caminos no deseados.
- **OpenCode**: Demanda servidores locales potentes con tarjetas gráficas dedicadas (GPUs) si se desea prescindir de la nube por completo.
- **Claude**: Dependencia 100% de la nube y conexión a internet; sujeto a límites de uso (*rate limits*) en horas pico y políticas de moderación centralizadas.
- **Pi Agent**: **Incapacidad total de arnés**. No puede leer un archivo Excel, no puede guardar documentos en tu computadora, ni ejecutar automatizaciones de procesos.
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

## 🔗 Referencias Externas y Recursos
- [Documentación Oficial de Antigravity](https://antigravity.google)
- [Ecosistema Abierto OpenCode](https://github.com/)
- [Anthropic Claude & Claude Code Documentation](https://docs.anthropic.com/)
- [DeepSeek AI Research & Models](https://www.deepseek.com/)
- [Inflection Pi Assistant](https://pi.ai/)
