# Módulo 06: Prompt Engineering Práctico para Negocios

## 🎯 Objetivo del Módulo
Aprender la estructura profesional para redactar instrucciones de alto impacto, eliminando los "prompts dummy" o genéricos, y aplicando técnicas avanzadas de comunicación con modelos de lenguaje.

---

## 🚫 La Diferencia entre un Prompt "Dummy" y un Prompt Profesional

### ❌ Ejemplo de Prompt "Dummy" (Vago e Ineficiente):
> "Hazme un plan de trabajo para el área de administración."

*Resultado*: La IA ofrecerá una respuesta genérica, llena de lugares comunes y sin utilidad real para la empresa.

---

### ✅ Ejemplo de Prompt Profesional (Estructurado):

```markdown
Actúa como un Consultor Senior de Operaciones Administrativas.

### Contexto:
Somos una empresa de servicios contables con 25 empleados. Estamos experimentando retrasos de 5 días en la facturación mensual.

### Tarea:
Diseña un Plan de Acción de 3 pasos para optimizar el flujo de emisión y cobro de facturas.

### Restricciones:
- No sugieras la contratación de nuevo personal.
- Enfócate en la optimización de procesos y el uso de herramientas digitales existentes.

### Formato de Salida:
1. Resumen Ejecutivo (máximo 100 palabras).
2. Tabla en Markdown con: Paso, Responsable, Tiempo Estimado e Impacto Esperado.
3. Un diagrama de flujo sintético en Mermaid.
```

---

## 📐 La Fórmula de 4 Elementos para Prompts Ejecutivos

Para garantizar que tus solicitudes tengan éxito a la primera, incluye siempre:

1. **Persona / Rol**: ¿Quién debe ser la IA? (ej. Contador Auditor, Gerente de RRHH, Docente Titular).
2. **Contexto u Objetivo**: ¿Cuál es la situación actual y qué se intenta lograr?
3. **Restricciones y Reglas**: ¿Qué NO debe hacer o qué límites debe respetar?
4. **Formato de Salida**: ¿Cómo quieres recibir la respuesta? (Tabla, Markdown, Slidev, lista con viñetas).

---

## 💡 Técnicas Avanzadas con Procesos Reales y Archivos de Estado Bandera

En el **Harness Engineering**, los agentes de IA trabajan frecuentemente con **Archivos de Estado Bandera** (*Flag State Files*, ej. `ESTADO.flag`, `STATUS.txt`, `PROCESO_ESTADO.md`). Un archivo bandera es un documento de texto simple donde se registra la etapa actual de un proceso de negocio (`PENDIENTE`, `EN_REVISION`, `APROBADO`, `RECHAZADO`). El agente lee la bandera, ejecuta la tarea y actualiza la bandera para el siguiente responsable.

A continuación se presentan dos ejemplos prácticos de alto impacto:

---

### 1. Ejemplo de Few-Shot Prompting con Archivo Bandera (`STATUS.flag`)

**Concepto**: En lugar de solo describir qué queremos, le proporcionamos a la IA **2 ejemplos resueltos** (*few shots*) de entrada, análisis y actualización de la bandera antes de pedirle que procese el caso nuevo.

```markdown
Actúa como Auditor Contable Automatizado de Cuentas por Pagar.

### Contexto del Proceso:
Tu trabajo es revisar los datos de la factura que recibes y generar el archivo de estado bandera `STATUS.flag` según las siguientes reglas:
- Si el monto es menor a $2,500 USD y tiene recibo fiscal válido: ESTADO = APROBADO_DIRECTO.
- Si el monto supera los $2,500 USD o falta el recibo: ESTADO = REQUIERE_AUTORIZACION_GERENCIAL.

---

### Ejemplo 1 (Shot 1):
Entrada: Factura F-101 por $1,200 USD de "Papelería Express" con recibo fiscal adjunto.
Salida esperada (Contenido de STATUS.flag):
ESTADO: APROBADO_DIRECTO
RESPONSABLE: Auditoría Automática
FECHA: 2026-10-24
NOTAS: Cumple con límite presupuestario y soporte fiscal completo.

---

### Ejemplo 2 (Shot 2):
Entrada: Factura F-102 por $4,800 USD de "Servicios de Limpieza" con recibo fiscal adjunto.
Salida esperada (Contenido de STATUS.flag):
ESTADO: REQUIERE_AUTORIZACION_GERENCIAL
RESPONSABLE: Auditoría Automática
FECHA: 2026-10-24
NOTAS: Monto excede el umbral de $2,500 USD. Se deriva a Gerencia Financiera.

---

### Tarea Actual (Tu Turno):
Entrada: Factura F-103 por $950 USD de "Mantenimiento AC", pero el proveedor no adjuntó el recibo fiscal.
Genera exactamente el contenido que debe escribirse en el archivo `STATUS.flag`.
```

---

### 2. Ejemplo de Chain-of-Thought (CoT) con Archivo Bandera (`ESTADO_REEMBOLSO.md`)

**Concepto**: La técnica *Chain-of-Thought* (Cadena de Pensamiento) obliga al modelo a desglosar su razonamiento paso a paso antes de tomar una decisión o escribir la bandera final, evitando errores de cálculo o juicios precipitados.

```markdown
Actúa como Supervisor de Recursos Humanos y Finanzas.

### Contexto:
El empleado Juan Pérez ha presentado una solicitud de reembolso de gastos de viaje por un total declarado de $180 USD con los siguientes comprobantes:
1. Almuerzo con cliente: $65 USD.
2. Taxi al aeropuerto: $35 USD.
3. Cena de trabajo: $80 USD.

### Política Corporativa Inquebrantable:
- Límite máximo reembolsable por comida individual: $50 USD.
- Gastos de transporte terrestre: Sin límite si cuentan con comprobante.

### Instrucción con Chain-of-Thought (Pensamiento Paso a Paso):
Piensa paso a paso y justifica minuciosamente cada gasto antes de emitir tu conclusión. Estructura tu respuesta en dos partes obligatorias:

#### Parte 1: Razonamiento Paso a Paso (Audit Trail)
- Analiza cada comprobante contra la política corporativa.
- Calcula el excedente no reembolsable si existiera.
- Determina el monto final neto a pagar a Juan Pérez.

#### Parte 2: Actualización del Archivo de Estado Bandera (`ESTADO_REEMBOLSO.md`)
Escribe el bloque exacto que se guardará en `ESTADO_REEMBOLSO.md`:

```markdown
# BANDERA DE ESTADO: REEMBOLSO DE VIÁTICOS
- EXPEDIENTE: VIAJE-2026-089
- SOLICITANTE: Juan Pérez
- ESTADO: [APROBADO_TOTAL | APROBADO_CON_AJUSTE | RECHAZADO]
- MONTO SOLICITADO: $... USD
- MONTO APROBADO: $... USD
- MONTO DEDUCIDO POR POLÍTICA: $... USD
- ACCIÓN SIGUIENTE: Derivar a Tesorería para dispersión.
```
```

---

## 📝 Tarea Práctica del Módulo (Homework 06)

**Objetivo:** Redactar un prompt ejecutivo con técnica de Few-Shot o Chain-of-Thought para gobernar un archivo de estado bandera.

### Instrucciones Paso a Paso:
1. Diseña un prompt estructurado aplicando la **Fórmula de 4 Elementos** (*Persona, Contexto, Restricciones y Formato*).
2. Incorpora la técnica de **Few-Shot** (dar 2 ejemplos de entrada/salida) o de **Chain-of-Thought** (*"Piensa paso a paso y justifica..."*).
3. Pídele al agente que evalúe un proceso administrativo y genere el contenido para actualizar un archivo de bandera (`STATUS.flag` o `ESTADO_PROCESO.md`).
4. Ejecuta el prompt con tu agente de IA y evalúa si la bandera generada cumplió con el formato sin alucinaciones.
5. **Entregable:** Guarda el prompt y el archivo bandera resultante en `docs/tarea_06_prompt.md`.

---

## 🔗 Referencias Externas y Recursos
- [Guía de Prompt Engineering de OpenAI](https://platform.openai.com/docs/guides/prompt-engineering)
- [Anthropic Interactive Prompt Engineering Tutorial](https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/overview)
