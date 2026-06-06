import { eniaContext, authorNotice } from "../data/eniaContext.mjs";

export const prototypeIds = ["documental", "ocr", "riesgos", "tablero", "generador"];

export const demoResponseSchema = {
  type: "object",
  properties: {
    title: { type: "string" },
    prototypeId: { type: "string" },
    scenario: { type: "string" },
    inputSummary: { type: "string" },
    aiProcess: { type: "array", items: { type: "string" } },
    simulatedOutput: { type: "string" },
    evidence: { type: "array", items: { type: "string" } },
    risk: { type: "string" },
    control: { type: "string" },
    humanReview: { type: "string" },
    kpis: { type: "array", items: { type: "string" } },
    disclaimer: { type: "string" },
    author: { type: "string" },
    contact: { type: "string" }
  },
  required: ["title", "prototypeId", "scenario", "inputSummary", "aiProcess", "simulatedOutput", "evidence", "risk", "control", "humanReview", "kpis", "disclaimer", "author", "contact"]
};

const commonInstructions = `
Responde estrictamente como JSON válido con esta estructura:
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
  "disclaimer": "Demo asistida por IA. No sustituye validación técnica, legal ni institucional.",
  "author": "Creado por Pierre R.",
  "contact": "peru.labs.pe@gmail.com"
}

Reglas:
- No inventes artículos, numerales ni obligaciones legales específicas.
- Presenta la salida como simulación aplicada a una entidad pública.
- Mantén enfoque ENIA, Plan de Acción IA, Oficial de IA, trazabilidad, riesgos, protección de datos y supervisión humana.
- No sugieras decisiones automáticas ni emisión automática de actos administrativos.
- Si el caso seleccionado es "demo rápida" o "caso documental", redacta la salida para que pueda descargarse como Word: explicación clara, párrafos breves y evidencias en lista.
- Si el caso seleccionado es "caso de riesgo" o "caso de tablero", estructura la salida para que pueda descargarse como Excel: campos concretos, semáforos, porcentajes, controles, responsables o métricas.
- Para los prototipos "riesgos" y "tablero", prioriza información tabular y medible aunque el usuario elija demo rápida.
- Incluye notas de derechos de autor de forma sobria: ${authorNotice}
`;

export const prototypePrompts = {
  documental: `
${eniaContext}
${commonInstructions}
Prototipo: Asistente Documental IA.
Comportamiento esperado:
- Simula revisión de documentos institucionales y una respuesta con sustento.
- Genera resumen de hallazgo.
- Incluye posibles fuentes documentales internas, sin afirmar que fueron verificadas realmente.
- Agrega advertencia de verificación de fuente.
- Incluye control de cita obligatoria, bitácora y supervisión humana.
`,
  ocr: `
${eniaContext}
${commonInstructions}
Prototipo: OCR + Extracción de Datos.
Comportamiento esperado:
- Simula extracción de datos desde un PDF escaneado, formulario o expediente.
- El simulatedOutput debe incluir una tabla textual compacta con campos extraídos.
- Menciona errores posibles de lectura, baja calidad de escaneo y campos dudosos.
- Incluye porcentaje de confianza referencial.
- Incluye control de validación por usuario, bloqueo de exportación y control de calidad.
`,
  riesgos: `
${eniaContext}
${commonInstructions}
Prototipo: Matriz de Riesgos IA.
Comportamiento esperado:
- Simula clasificación de riesgo de un caso de uso de IA.
- Incluye nivel de riesgo.
- Evalúa datos personales, sesgo, opacidad, error, seguridad, trazabilidad e impacto.
- Propón controles proporcionales.
- Recomienda evaluación de impacto cuando corresponda, sin afirmar obligatoriedad universal.
`,
  tablero: `
${eniaContext}
${commonInstructions}
Prototipo: Tablero del Plan de Acción IA.
Comportamiento esperado:
- Simula seguimiento del Plan de Acción IA.
- Incluye iniciativas, responsables, semáforos, avance porcentual y KPIs.
- Vincula el seguimiento con ENIA, PEI, POI, PMI y Plan de Gobierno Digital.
- Recomienda reporte trimestral del Oficial de IA y revisión por comité o instancia competente.
`,
  generador: `
${eniaContext}
${commonInstructions}
Prototipo: Generador de Documentos Institucionales.
Comportamiento esperado:
- Simula generación asistida de oficio, informe o ficha técnica.
- El simulatedOutput debe incluir un borrador breve.
- Incluye observaciones de consistencia y campos pendientes.
- Incluye revisión obligatoria del responsable.
- Prohíbe emisión automática y advierte sobre datos personales, fuentes y validación institucional.
`
};

export function buildPrototypePrompt({ prototypeId, userInput = "", demoMode = true, caseType = "demo rápida" }) {
  const prompt = prototypePrompts[prototypeId];
  if (!prompt) {
    throw new Error(`Prototype prompt not found: ${prototypeId}`);
  }

  return `
${prompt}
Modo de demo: ${demoMode ? "simulado/asistido" : "exploratorio"}.
Tipo de caso seleccionado: ${caseType}.
Entrada opcional del usuario: ${userInput || "Sin entrada adicional; usa un caso institucional simulado de bajo riesgo."}
`;
}
