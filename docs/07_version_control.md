# Módulo 07: Control de Versiones con Git y GitHub Desktop

## 🎯 Objetivo del Módulo
Comprender por qué el **Control de Versiones** es esencial en el Harness Engineering, perder el miedo a Git y dominar el flujo de trabajo mediante la interfaz gráfica de **GitHub Desktop** sin tocar la terminal.

---

## 📦 ¿Por qué un Administrador o Ejecutivo Necesita Control de Versiones?

En la gestión de documentos tradicional, estamos acostumbrados a nombrar archivos así:
- `Reporte_Final.docx`
- `Reporte_Final_v2.docx`
- `Reporte_Final_v2_EDITADO_juan.docx`
- `Reporte_Final_DEFINITIVO_AHORA_SI.docx`

Este caos genera pérdida de información y confusión.

### El Enfoque con Git:
- Existe **un solo archivo** (ej. `reporte.md`).
- Git guarda una "foto" (llamada **Commit**) cada vez que decides guardar un avance significativo.
- Puedes navegar en el tiempo y ver quién cambió qué palabra en cualquier momento.

---

## 🖥️ Flujo de Trabajo en 3 Pasos con GitHub Desktop

**GitHub Desktop** es una aplicación visual para Windows y Mac que elimina por completo la necesidad de usar comandos de consola.

```mermaid
flowchart LR
    A["✏️ 1. Modificar Archivo<br/>(Markdown / Slidev)"] --> B["📸 2. Hacer Commit<br/>(Guardar Foto del Historial)"]
    B --> C["☁️ 3. Push / Sync<br/>(Sincronizar con la Nube)"]
```

### Conceptos Clave para el Usuario No Técnico:
1. **Repositorio (Repository)**: La carpeta del proyecto donde Git supervisa todos los archivos.
2. **Commit**: Guardar un punto de control con un mensaje descriptivo (ej. *"Actualización de tarifas en módulo 1"*).
3. **Push / Sync**: Subir tus cambios guardados a la nube (GitHub.com) para respaldo o trabajo en equipo.

---

## 🔗 Referencias Externas y Recursos
- [Descargar GitHub Desktop Oficial](https://desktop.github.com/)
- [Guía Visual de Inicio Rápido en GitHub Desktop](https://docs.github.com/es/desktop)
