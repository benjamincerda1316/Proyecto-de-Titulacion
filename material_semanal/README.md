# Carpeta de Material Semanal - MXBoard

Aquí puedes colocar los recursos descargables y enunciados oficiales para cada una de las 12 semanas del plan de onboarding de los consultores Junior en Finance & PL.

## Estructura de Carpetas

Cada carpeta por semana (`semana_01/` a `semana_12/`) está lista para recibir archivos como:
* Enunciados de los entregables semanales (ej. `ejercicio_IFRS9.pdf`)
* Guías de estudio o manuales de navegación de Murex (ej. `guia_murex_fixed_income.pdf`)
* Hojas de cálculo de apoyo para los ejercicios (ej. `plan_cuentas_demo.xlsx`)

## Cómo enlazar los archivos en la plataforma

Para que los Juniors puedan descargar estos archivos directamente desde su dashboard en MXBoard, agrega la ruta del archivo en el campo `deliverable.download_url` de la semana correspondiente en `app.js`.

Ejemplo para la Semana 1 en `app.js`:
```javascript
deliverable: {
  type: "pdf",
  description: "Mapa conceptual de módulos MX.3",
  download_url: "material_semanal/semana_01/mapa_modulos_mx3.pdf", // <-- Ruta al archivo
  required: true
}
```
