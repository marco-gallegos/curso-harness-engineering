// quizData.js - Preguntas de la Evaluación Final y banco de validación
window.ASSESSMENT_QUESTIONS = [
  {
    id: 1,
    moduleId: 1,
    moduleName: "Módulo 01: Markdown Fundamentos",
    question: "¿Por qué en Harness Engineering se prefiere Markdown (.md) sobre documentos Word (.docx) al enviar información a un modelo de IA?",
    options: [
      "Porque los documentos de Word no pueden ser abiertos en computadoras con sistema operativo Mac.",
      "Porque Markdown ahorra más del 90-95% en peso y metadatos invisibles de estilo, optimizando la ventana de contexto y reduciendo tokens.",
      "Porque los modelos de lenguaje artificial no tienen la capacidad de leer texto en idioma español.",
      "Porque Markdown encripta automáticamente la información confidencial de la empresa."
    ],
    correctIndex: 1,
    explanation: "Los documentos .docx contienen megabytes de metadatos invisibles de formato y diseño que saturan la memoria del modelo. Markdown es texto plano limpio que maximiza la ventana de contexto y los LLMs fueron entrenados nativamente en este formato."
  },
  {
    id: 2,
    moduleId: 1,
    moduleName: "Módulo 01: Markdown Fundamentos",
    question: "¿Cuál de las siguientes líneas representa la sintaxis correcta en Markdown para un encabezado secundario (H2) y una frase con énfasis en negrita?",
    options: [
      "<h2 style='bold'>Reporte Anual</h2>",
      "[H2] Reporte Anual con (negrita) importante",
      "## Reporte Anual y **texto importante en negrita**",
      "-- Reporte Anual y *texto en negrita*"
    ],
    correctIndex: 2,
    explanation: "En Markdown los títulos se indican con almohadillas (## para H2 o subtítulo) y el énfasis en negrita se especifica envolviendo el texto con doble asterisco (**texto**)."
  },
  {
    id: 3,
    moduleId: 2,
    moduleName: "Módulo 02: Ecosistema Antigravity",
    question: "¿Cuál es la diferencia operativa fundamental entre un Chatbot tradicional (ej. ChatGPT web clásico) y un Agente de IA como Antigravity?",
    options: [
      "El agente de IA solo responde en llamadas telefónicas automatizadas.",
      "El chatbot tradicional puede modificar carpetas en tu computadora, mientras el agente solo genera imágenes.",
      "El agente de IA puede ejecutar tareas complejas con herramientas reales (leer/escribir archivos, buscar en internet y delegar a subagentes) dentro de un arnés de reglas persistente.",
      "No existe ninguna diferencia; son exactamente lo mismo con diferente nombre de mercadeo."
    ],
    correctIndex: 2,
    explanation: "Mientras que un chatbot tradicional se limita a un intercambio de texto en una ventana efímera, un Agente de IA cuenta con 'manos y pies' (herramientas) para manipular archivos, correr comandos y delegar subtareas manteniendo un contexto estructurado."
  },
  {
    id: 4,
    moduleId: 2,
    moduleName: "Módulo 02: Ecosistema de Agentes y Limitaciones",
    question: "Al comparar plataformas del mercado (OpenCode, Claude, DeepSeek, Pi Agent y Antigravity), ¿cuál de las siguientes afirmaciones sobre sus diferencias y limitaciones es CORRECTA?",
    options: [
      "Pi Agent es la herramienta ideal para automatizar tareas en el sistema de archivos y modificar hojas de cálculo locales.",
      "OpenCode permite soberanía total de datos en servidores locales (self-hosted), Claude destaca en análisis de documentos densos (200k tokens), mientras que Pi Agent carece de arquitectura de arnés (no manipula archivos ni herramientas).",
      "Los modelos de razonamiento como DeepSeek R1 no presentan ninguna latencia reflexiva y DeepSeek incluye herramientas nativas sin requerir arnés externo.",
      "La 'Deriva de Contexto' (Context Drift) es imposible en los agentes de IA porque los modelos nunca pierden el foco de las reglas iniciales."
    ],
    correctIndex: 1,
    explanation: "Cada plataforma cumple un propósito específico: OpenCode protege la privacidad total en servidores locales, Claude destaca en razonamiento de contratos voluminosos, y Pi Agent es un asistente conversacional empático pero sin arnés de ejecución ni acceso al sistema de archivos."
  },
  {
    id: 5,
    moduleId: 3,
    moduleName: "Módulo 03: Slidev",
    question: "Al crear una presentación en Slidev dentro del archivo slides.md, ¿qué elemento sintáctico se utiliza para separar una diapositiva de la siguiente?",
    options: [
      "La etiqueta <next-slide>",
      "Tres signos de exclamación (!!!)",
      "Tres guiones continuos (---) rodeados de saltos de línea",
      "El comando de teclado CTRL + ENTER"
    ],
    correctIndex: 2,
    explanation: "Slidev utiliza el delimitador horizontal de tres guiones ('---') para marcar el fin de una diapositiva y el inicio de la siguiente."
  },
  {
    id: 6,
    moduleId: 3,
    moduleName: "Módulo 03: Slidev",
    question: "Si la gerencia general requiere revisar la presentación generada en Slidev pero no dispone de herramientas técnicas, ¿a qué formatos estándar puedes exportarla?",
    options: [
      "Únicamente a un archivo ejecutable .exe de Windows.",
      "A formatos ejecutivos universales como PDF estático, página web HTML interactiva o imágenes PNG.",
      "Solo a cintas magnéticas de respaldo.",
      "Slidev no permite exportar a ningún formato fuera de su propio editor."
    ],
    correctIndex: 1,
    explanation: "Una de las grandes fortalezas de Slidev es que exporta directamente a PDF (ideal para imprimir o enviar por correo) y a HTML estático navegable en cualquier navegador sin software adicional."
  },
  {
    id: 7,
    moduleId: 4,
    moduleName: "Módulo 04: Mermaid",
    question: "¿Por qué en los entornos de IA se recomienda diagramar con Mermaid en lugar de adjuntar imágenes de Lucidchart o Microsoft Visio?",
    options: [
      "Porque Mermaid requiere obligatoriamente una tarjeta gráfica de alta gama.",
      "Porque un diagrama de Mermaid consume solo entre 20 y 50 tokens de texto, logrando un ahorro superior al 90% en la ventana de contexto y permitiendo modificaciones instantáneas cambiando solo una línea.",
      "Porque las imágenes de Visio no pueden verse en monitores modernos.",
      "Porque Mermaid prohíbe el uso de flechas de conexión en los diagramas."
    ],
    correctIndex: 1,
    explanation: "El texto en sintaxis Mermaid es infinitamente más ligero para la IA que procesar imágenes pesadas con modelos de visión. Además, si cambia una política, la IA o el usuario solo modifican una palabra en el texto para redibujar el diagrama al instante."
  },
  {
    id: 8,
    moduleId: 4,
    moduleName: "Módulo 04: Mermaid",
    question: "En un diagrama de flujo en Mermaid (`flowchart TD`), ¿qué símbolo o contenedor se utiliza comúnmente para plantear una decisión o condición (ej. ¿Supera los $5,000 USD?)?",
    options: [
      "Paréntesis redondos: (¿Supera los $5,000 USD?)",
      "Llaves en forma de rombo de decisión: {¿Supera los $5,000 USD?}",
      "Corchetes cuadrados: [¿Supera los $5,000 USD?]",
      "Barras invertidas: \\¿Supera los $5,000 USD?\\"
    ],
    correctIndex: 1,
    explanation: "En la sintaxis de Mermaid, las llaves `{...}` representan nodos con forma de rombo de decisión (condicionales), mientras que los corchetes `[...]` representan rectángulos de acción."
  },
  {
    id: 9,
    moduleId: 5,
    moduleName: "Módulo 05: Context Engineering",
    question: "Desde la perspectiva técnica de la Inteligencia Artificial, ¿por qué es incorrecto pensar que la IA 'recuerda' conversaciones pasadas como una persona humana?",
    options: [
      "Porque los servidores de IA se apagan automáticamente cada 3 minutos.",
      "Porque los modelos de IA son estáticos; en cada nueva interacción leen únicamente los datos que se suministran dentro de la ventana de contexto activa.",
      "Porque los modelos de IA solo pueden retener números pares.",
      "Porque la memoria humana es digital y la IA es puramente mecánica."
    ],
    correctIndex: 1,
    explanation: "Los modelos de lenguaje no aprenden ni recuerdan 'experiencias' de conversaciones previas una vez cerrada la sesión. Su comportamiento depende 100% de la arquitectura y calidad del contexto que se les suministra en cada llamado."
  },
  {
    id: 10,
    moduleId: 5,
    moduleName: "Módulo 05: Context Engineering",
    question: "¿Cuál es el propósito del archivo `AGENT.md` colocado en la raíz de un proyecto de trabajo?",
    options: [
      "Es un instalador de Windows que activa las licencias de Microsoft Office.",
      "Es el archivo de directivas del arnés donde se establecen el rol del agente, las reglas inquebrantables, el tono y los formatos de salida esperados.",
      "Es una copia de seguridad de la base de datos de correos de la empresa.",
      "Es un diccionario de contraseñas de los usuarios."
    ],
    correctIndex: 1,
    explanation: "AGENT.md es el componente central del arnés: le proporciona al agente su marco de gobernanza, prohibiciones explícitas, estándar monetario, tono y criterios de entrega de resultados."
  },
  {
    id: 11,
    moduleId: 6,
    moduleName: "Módulo 06: Prompt Engineering",
    question: "¿Cuáles son los 4 elementos de la 'Fórmula Ejecutiva' para redactar instrucciones de alto impacto y evitar respuestas mediocres?",
    options: [
      "1. Saludo, 2. Agradecimiento, 3. Pregunta retórica, 4. Firma digital.",
      "1. Persona/Rol, 2. Contexto u Objetivo, 3. Restricciones/Reglas, 4. Formato de Salida.",
      "1. Presupuesto, 2. Clave secreta, 3. Modelo del procesador, 4. Código postal.",
      "1. Título, 2. Sinónimos, 3. Fecha del sistema, 4. Nombre del navegador."
    ],
    correctIndex: 1,
    explanation: "La fórmula de 4 elementos para profesionales de negocio asegura certidumbre: definir quién es la IA (Persona), cuál es la situación (Contexto), qué tiene prohibido hacer (Restricciones) y cómo debe lucir el resultado (Formato)."
  },
  {
    id: 12,
    moduleId: 7,
    moduleName: "Módulo 07 & 08: Git & MCP",
    question: "En el flujo de trabajo con GitHub Desktop y la integración con Model Context Protocol (MCP), ¿qué afirmación es CORRECTA?",
    options: [
      "Hacer un 'Commit' en GitHub Desktop es guardar una foto histórica con mensaje descriptivo, y MCP permite conectar a la IA de forma estandarizada con datos reales (hojas de cálculo, bases de datos o correo).",
      "Git obliga a memorizar 100 comandos de consola y MCP es un software que solo funciona en teléfonos móviles.",
      "GitHub Desktop elimina los archivos de tu computadora cada viernes para ahorrar disco.",
      "MCP sirve únicamente para apagar la computadora cuando no se está usando."
    ],
    correctIndex: 0,
    explanation: "GitHub Desktop brinda una interfaz visual donde un Commit guarda un punto de control con comentario claro, mientras que MCP (Model Context Protocol) estandariza la conexión segura entre agentes de IA y herramientas empresariales como Google Sheets, bases de datos o correo institucional."
  }
];
