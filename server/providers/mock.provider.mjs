const base = {
  disclaimer: "Demo asistida por IA. No sustituye validación técnica, legal ni institucional.",
  author: "Creado por Pierre R.",
  contact: "peru.labs.pe@gmail.com"
};

const responses = {
  documental: {
    title: "Demo: Asistente Documental IA",
    prototypeId: "documental",
    scenario: "Consulta institucional sobre componentes mínimos del Plan de Acción IA.",
    inputSummary: "Normas, informes y anexos internos simulados para ubicar sustento documental.",
    aiProcess: ["Clasificación de documentos", "Búsqueda semántica", "Recuperación de fragmentos", "Respuesta con fuente pendiente de verificación"],
    simulatedOutput: "Hallazgo simulado: el Plan de Acción IA debe organizar diagnóstico, objetivos, indicadores, iniciativas, cronograma, responsables, financiamiento, recursos y anexos, alineado con ENIA y planes institucionales.",
    evidence: ["Fuente posible: Resolución Ministerial N.° 152-2026-PCM", "Fuente posible: Anexo ENIA 2026-2030", "Advertencia: la cita exacta debe verificarse antes de uso formal"],
    risk: "Respuesta incompleta o sin sustento documental verificable.",
    control: "Cita obligatoria, bitácora de consulta y revisión humana antes de usar el resultado.",
    humanReview: "El responsable valida fuente, pertinencia, vigencia y redacción antes de incorporarla en documentos institucionales.",
    kpis: ["100% de respuestas con fuente referencial", "Tiempo de búsqueda documental estimado reducido", "Consultas registradas en bitácora"],
    ...base
  },
  ocr: {
    title: "Demo: OCR + Extracción de Datos",
    prototypeId: "ocr",
    scenario: "Digitalización de un expediente escaneado para convertir campos clave en tabla revisable.",
    inputSummary: "PDF escaneado simulado con datos de trámite, fechas, área responsable y estado.",
    aiProcess: ["OCR del documento", "Limpieza de texto", "Extracción de campos", "Validación por confianza"],
    simulatedOutput: "Tabla simulada: Código: EXP-042 | Área: Oficina de Planeamiento | Fecha: 2026-06-06 | Estado: observado | Confianza promedio: 86%. Campos dudosos: número de folios y fecha de recepción.",
    evidence: ["3 campos requieren revisión manual", "1 alerta por baja nitidez", "Exportación bloqueada hasta validación"],
    risk: "Error de lectura por escaneo deficiente o datos incompletos.",
    control: "Validación por usuario, control de calidad y registro de correcciones.",
    humanReview: "Un operador compara la tabla contra el PDF antes de exportar o usar datos en reportes.",
    kpis: ["86% confianza promedio simulada", "18 campos detectados", "3 campos enviados a revisión"],
    ...base
  },
  riesgos: {
    title: "Demo: Matriz de Riesgos IA",
    prototypeId: "riesgos",
    scenario: "Evaluación preliminar de un caso de clasificación documental asistida por IA.",
    inputSummary: "Ficha simulada con objetivo, usuarios, datos tratados y efecto esperado.",
    aiProcess: ["Identificación de datos personales", "Análisis de sesgo", "Evaluación de opacidad", "Clasificación de riesgo y controles"],
    simulatedOutput: "Nivel de riesgo simulado: medio. Riesgos detectados: tratamiento de datos personales, error de clasificación, opacidad del criterio y dependencia operativa del sistema.",
    evidence: ["Control de acceso requerido", "Trazabilidad de recomendaciones", "Evaluación de impacto sugerida si afecta derechos o priorización de expedientes"],
    risk: "Afectación de derechos, sesgo, uso indebido de datos o decisión automatizada no autorizada.",
    control: "Evaluación de impacto cuando corresponda, supervisión humana, auditoría y documentación de criterios.",
    humanReview: "El Comité o responsable institucional decide si el caso avanza, se rediseña o se descarta.",
    kpis: ["1 matriz de riesgos por caso de uso", "100% de casos con responsable asignado", "Controles mínimos definidos antes del piloto"],
    ...base
  },
  tablero: {
    title: "Demo: Tablero del Plan de Acción IA",
    prototypeId: "tablero",
    scenario: "Seguimiento ejecutivo de iniciativas IA alineadas a ENIA, PEI, POI, PMI y PGD.",
    inputSummary: "Lista simulada de iniciativas, responsables, cronograma, presupuesto e indicadores.",
    aiProcess: ["Consolidación de iniciativas", "Cálculo de avance", "Semáforos de riesgo", "Priorización de alertas"],
    simulatedOutput: "Panel simulado: 12 iniciativas; 4 en verde, 6 en amarillo, 2 en rojo. Avance global: 38%. Alertas: presupuesto pendiente, indicador sin línea base y responsable por confirmar.",
    evidence: ["Semáforo por cronograma y riesgo", "Reporte trimestral sugerido", "Vinculación con objetivos institucionales"],
    risk: "Falta de actualización, indicadores débiles o decisiones sin evidencia.",
    control: "Reporte trimestral del Oficial de IA y validación por la instancia de gobierno digital correspondiente.",
    humanReview: "La alta dirección revisa alertas, reasigna responsables y valida prioridades presupuestales.",
    kpis: ["38% avance global simulado", "12 iniciativas registradas", "3 alertas críticas"],
    ...base
  },
  generador: {
    title: "Demo: Generador de Documentos Institucionales",
    prototypeId: "generador",
    scenario: "Borrador asistido de informe técnico para sustentar un piloto IA de bajo riesgo.",
    inputSummary: "Plantilla institucional, antecedentes, objetivo del piloto y controles requeridos.",
    aiProcess: ["Lectura de plantilla", "Construcción de borrador", "Revisión semántica", "Marcado de observaciones"],
    simulatedOutput: "Borrador breve: Se recomienda iniciar un piloto controlado de IA documental para búsqueda de antecedentes, con repositorio cerrado, registro de consultas, revisión humana obligatoria y evaluación de riesgos previa.",
    evidence: ["Observación: completar responsable institucional", "Observación: validar base legal y datos personales", "Etiqueta: no emitir automáticamente"],
    risk: "Texto impreciso, fuente no verificada o emisión sin revisión.",
    control: "Revisión obligatoria por responsable, control de versión y prohibición de emisión automática.",
    humanReview: "El responsable técnico y legal ajusta el borrador antes de incorporarlo a un expediente real.",
    kpis: ["1 borrador con observaciones", "100% de documentos con revisión humana", "0 emisiones automáticas"],
    ...base
  }
};

export async function generateMockDemo({ prototypeId }) {
  return responses[prototypeId] || responses.documental;
}
