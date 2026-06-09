# IA Pública Responsable - Demo asistida por IA para ENIA 2026-2030

Demo funcional para presentar prototipos de IA responsable orientados a entidades públicas, alineados al enfoque de la ENIA 2026-2030, Plan de Acción IA, Oficial de IA, trazabilidad, gestión de riesgos y supervisión humana.

La landing principal ahora está optimizada como una sola pantalla tipo dashboard: título claro, fuente normativa, modelo de proyecto visible y dos simulaciones destacadas. En local puede ejecutar demos asistidas por IA mediante backend seguro en Node.js/Express y una sola API externa: Gemini API. La clave nunca se expone en el frontend ni debe subirse a GitHub.

**Creado por Pierre R.**  
Contacto: [peru.labs.pe@gmail.com](mailto:peru.labs.pe@gmail.com)  
Todos los derechos reservados para fines demostrativos, educativos y de evaluación técnica.

## Base conceptual

La página toma como fundamento la documentación normativa ubicada en `docs/`:

- **Resolución Ministerial N.° 152-2026-PCM**, que aprueba la Estrategia Nacional de Inteligencia Artificial 2026-2030.
- **Anexo de la Resolución Ministerial N.° 152-2026-PCM: Estrategia Nacional de Inteligencia Artificial 2026-2030**.
- **Publicación oficial en el Diario Oficial El Peruano: aprobación de la Estrategia Nacional de Inteligencia Artificial 2026-2030**.

La página muestra una guía compacta del modelo de proyecto y mantiene como contacto visible [peru.labs.pe@gmail.com](mailto:peru.labs.pe@gmail.com) para mayor información.

Este repositorio presenta contexto de demo. No constituye asesoría legal ni reemplaza diagnóstico técnico, revisión de protección de datos personales o aprobación institucional.

## Arquitectura

```text
public/
  index.html
  styles.css
  app.js
  assets/

server/
  server.mjs
  routes/demo.routes.mjs
  providers/gemini.provider.mjs
  providers/mock.provider.mjs
  prompts/prototypePrompts.mjs
  data/eniaContext.mjs

tests/
  prompt.test.mjs
  demo-api.test.mjs
  ui.spec.mjs
```

## Prototipos

Cada botón `Iniciar simulación` abre un modal, muestra estado de ejecución y llama a `POST /api/demo` con:

```json
{
  "prototypeId": "documental",
  "userInput": "texto opcional",
  "demoMode": true
}
```

Prototipos disponibles:

- `documental`: Asistente Documental IA.
- `ocr`: OCR + Extracción de Datos.
- `riesgos`: Matriz de Riesgos IA.
- `tablero`: Tablero del Plan de Acción IA.
- `generador`: Generador de Documentos Institucionales.

En la vista pública compacta se muestran dos simulaciones destacadas para evitar scroll: `documental` y `riesgos`.

## Cómo usar la demo si no conoces IA

1. Elige un prototipo y pulsa `Iniciar simulación`.
2. Selecciona el tipo de caso:
   - `Demo rápida`: genera una explicación breve y descargable en Word.
   - `Caso documental`: genera una salida documental más detallada y descargable en Word.
   - `Caso de riesgo`: genera una matriz o lectura de riesgos descargable en Excel.
   - `Caso de tablero`: genera seguimiento, semáforos y KPIs descargables en Excel.
3. Escribe una consulta corta si deseas. Ejemplos:
   - `evaluar piloto de búsqueda documental`
   - `clasificar expedientes escaneados`
   - `revisar riesgos de datos personales`
   - `crear tablero de iniciativas IA`
4. La demo devuelve:
   - escenario simulado;
   - proceso IA;
   - salida generada;
   - evidencias;
   - riesgo;
   - control;
   - revisión humana;
   - KPIs;
   - archivo descargable.

En local, el archivo se genera desde el backend con `/api/export`. En GitHub Pages, si no hay backend, la página genera un archivo equivalente desde el navegador como fallback.

Regla de descarga:

- Word `.doc`: demo rápida y caso documental.
- Excel `.xls`: tablero y riesgo.

La respuesta siempre usa JSON estructurado:

```json
{
  "title": "",
  "prototypeId": "",
  "scenario": "",
  "inputSummary": "",
  "aiProcess": [],
  "simulatedOutput": "",
  "evidence": [],
  "risk": "",
  "control": "",
  "humanReview": "",
  "kpis": [],
  "disclaimer": "Demo asistida por IA. No sustituye validación técnica, legal ni institucional."
}
```

## Instalación

```bash
npm install
```

## Configurar Gemini API

1. Crea una API key en Google AI Studio: [https://aistudio.google.com/app/apikey](https://aistudio.google.com/app/apikey)
2. Copia `.env.example` como `.env`.
3. Completa la variable:

```bash
GEMINI_API_KEY=tu_api_key_real
PORT=3000
AI_PROVIDER=gemini
```

Si `GEMINI_API_KEY` no existe, el backend usa automáticamente `mock.provider.mjs`. Esto permite demostrar el flujo sin exponer claves.

## Ejecutar localmente

```bash
npm run dev
```

Luego abre:

[http://localhost:3000](http://localhost:3000)

## Ejecutar pruebas

Pruebas unitarias/API con Vitest:

```bash
npm test
```

Pruebas E2E con Playwright:

```bash
npm run test:e2e
```

Todo:

```bash
npm run test:all
```

## Seguridad

- Nunca coloques `GEMINI_API_KEY` en `public/app.js`, HTML, CSS o GitHub Pages.
- Nunca subas `.env` al repositorio.
- No uses datos personales reales, expedientes reales ni documentos sensibles en demos públicas.
- El backend limita el tamaño del JSON recibido.
- Si Gemini falla, tarda demasiado o devuelve una respuesta inválida, el sistema usa fallback mock.
- La IA asiste; no decide, no firma y no emite actos administrativos.

## Despliegue

### Frontend estático

El contenido de `public/` puede publicarse como frontend estático, por ejemplo en GitHub Pages. En ese caso, si no hay backend disponible, la UI muestra fallback local sin usar claves.

Página pública actual:

[https://oprbguitar.github.io/ENIA-2026-2030/](https://oprbguitar.github.io/ENIA-2026-2030/)

### Backend

Despliega el backend Node.js en un servicio que soporte variables de entorno, por ejemplo Render, Railway, Fly.io, Cloud Run, Azure App Service o un VPS.

Variables necesarias:

```bash
GEMINI_API_KEY=tu_api_key_real
PORT=3000
AI_PROVIDER=gemini
```

Para producción, configura CORS o proxy según el dominio del frontend. No expongas la clave en el navegador.

## Subir cambios a GitHub

```bash
git add .
git commit -m "mensaje del cambio"
git push origin main
```

Para actualizar una publicación estática en `gh-pages`, publica solo el contenido seguro de `public/`. No publiques `.env`, `node_modules`, reportes de prueba ni claves.

## Criterios cubiertos

- `npm install` instala dependencias.
- `npm run dev` levanta backend y frontend en localhost.
- Los cinco botones `Ver demo` ejecutan demo.
- Con API key usa Gemini.
- Sin API key usa mock.
- Las respuestas se muestran en el modal.
- `npm test` valida prompts y API.
- La clave no se filtra al frontend.
- La demo conserva enfoque ENIA, Plan de Acción IA, OIA, trazabilidad, riesgos y supervisión humana.
