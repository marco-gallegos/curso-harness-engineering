# Módulo 03: Slidev - Presentaciones Ejecutivas con Markdown

## 🎯 Objetivo del Módulo
Aprender qué es **Slidev**, por qué revoluciona la creación de presentaciones para profesionales y que puede exportar diapositivas a formatos estándar como **PDF** y **HTML** sin depender de PowerPoint.

### NOTA

el objetivo aqui no es ejecutar slidev si no darlo a conocer, no es esperado que puedas ejecutarlo en tu pc.

---

## 🛝 ¿Qué es Slidev y Por Qué Reemplaza a PowerPoint?

En el trabajo administrativo convencional, crear una presentación en Microsoft PowerPoint o Google Slides requiere horas de diseño manual, alineación de cuadros de texto y ajustes de formato.

**Slidev** es una herramienta moderna que permite generar presentaciones profesionales escribiendo únicamente texto en Markdown.

### Ventajas Principales:
1. **Generación Directa con IA**: Puedes pedirle a la IA que cree una presentación completa de 10 diapositivas y obtener directamente el archivo `slides.md`.
2. **Separación de Contenido y Diseño**: El diseño se maneja automáticamente mediante temas profesionales; tú solo te enfocas en las ideas.
3. **Control de Versiones**: Al ser texto plano, puedes guardar el historial completo de versiones de tus diapositivas en Git.

---

## 🛠️ Sintaxis Basica de Slidev

Un archivo de Slidev se estructura dividiendo las diapositivas con tres guiones `---`.

```markdown
---
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
2. Presentar reporte final antes del 30 de abril.
```

---

## 📤 Formatos de Exportación

Una de las grandes fortalezas de Slidev es que el creador de la presentación puede exportar el resultado final a cualquier formato necesario para la audiencia:

1. **Exportación a PDF**: Genera un archivo listo para imprimir o enviar por correo electrónico a clientes o directivos.
2. **Exportación a HTML Estático**: Produce una página web interactiva que se puede visualizar en cualquier navegador web sin necesidad de instalar programas adicionales.
3. **Exportación a PNG/Imágenes**: Para incluir diapositivas específicas dentro de informes escritos.

---

## 📝 Tarea Práctica del Módulo (Homework 03)

**Objetivo:** Redactar una presentación ejecutiva de 3 diapositivas utilizando la sintaxis de separación de Slidev (`---`).

### Instrucciones Paso a Paso:
1. Crea un archivo llamado `mis_diapositivas_ejecutivas.md` en tu espacio de trabajo.
2. Agrega el encabezado de configuración de tema en la parte superior:
   ```markdown
   ---
   theme: default
   title: Resumen de Iniciativas Estratégicas
   ---
   ```
3. Diseña 3 diapositivas separadas estrictamente por `---`:
   - **Diapositiva 1 (Portada):** Título de tu departamento, subtítulo y tu nombre/cargo.
   - **Diapositiva 2 (Resultados Clave):** 3 viñetas con cifras o porcentajes relevantes de tu área.
   - **Diapositiva 3 (Plan de Acción):** Una lista numerada con los próximos 2 pasos operativos.
4. **Entregable:** Archivo `mis_diapositivas_ejecutivas.md` listo para ser procesado por la IA o exportado a PDF.

---

## 🔗 Referencias Externas y Recursos
- [Sitio Oficial de Slidev (sli.dev)](https://sli.dev/)
- [Galería de Temas Oficiales de Slidev](https://sli.dev/themes/gallery.html)
