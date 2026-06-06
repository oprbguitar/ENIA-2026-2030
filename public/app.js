const prototypes = [
  {
    badge: "A",
    id: "documental",
    name: "Asistente Documental IA",
    image: "assets/asistente-documental.png",
    problem: "Demora para encontrar sustento normativo o antecedentes en archivos dispersos.",
    input: "PDF, Word, Excel, normas, informes, oficios.",
    processing: "OCR, segmentación, búsqueda semántica, recuperación documental, respuesta con fuente.",
    output: "Respuesta sustentada en documentos.",
    risk: "Respuesta incorrecta o sin sustento.",
    control: "Cita obligatoria, revisión humana y registro de consulta.",
    demo: "Consulta simulada: '¿Qué debe contener el Plan de Acción IA?'. Resultado: lista de componentes con fuente documental, enlace interno al documento base, nivel de confianza, advertencia de revisión y estado 'pendiente de validación por responsable'.",
    steps: [
      "El usuario carga normas, informes, oficios y anexos en un repositorio documental controlado.",
      "El sistema segmenta los documentos, extrae metadatos y crea un índice semántico.",
      "La consulta recupera fragmentos relevantes y arma una respuesta con citas obligatorias.",
      "El responsable valida el sustento antes de usar el resultado en un documento institucional."
    ],
    evidence: [
      "Respuesta con fuente, fecha, archivo y página referencial.",
      "Bitácora de consulta: usuario, hora, documentos usados y versión del índice.",
      "Alerta visual cuando una respuesta no tiene evidencia suficiente."
    ],
    norms: ["R.M. 152-2026-PCM", "Ley 31814", "D.S. 115-2025-PCM", "Ley 27806", "Ley 29733", "NTP-ISO/IEC 42001"]
  },
  {
    badge: "B",
    id: "ocr",
    name: "OCR + Extracción de Datos",
    image: "assets/ocr-extraccion.png",
    problem: "Expedientes escaneados difíciles de convertir en datos útiles para seguimiento.",
    input: "PDF escaneado, formularios, expedientes.",
    processing: "OCR, limpieza, extracción de campos, validación.",
    output: "Tabla exportable.",
    risk: "Error de lectura.",
    control: "Validación por usuario y control de calidad.",
    demo: "Archivo simulado: 'Expediente_042.pdf'. Resultado: 18 campos detectados, 3 observaciones por baja confianza, exportación bloqueada hasta validación del operador y control de calidad.",
    steps: [
      "Se carga un PDF escaneado o formulario con baja estructura.",
      "El OCR detecta texto, tablas, sellos y campos frecuentes.",
      "La extracción propone una tabla con confianza por campo.",
      "El usuario corrige valores dudosos antes de exportar."
    ],
    evidence: [
      "Tabla exportable con campo, valor, confianza y observación.",
      "Vista comparativa entre imagen original y dato extraído.",
      "Registro de correcciones para auditoría y mejora."
    ],
    norms: ["R.M. 152-2026-PCM", "D. Leg. 1412", "D.S. 029-2021-PCM", "Ley 29733", "D.U. 007-2020"]
  },
  {
    badge: "C",
    id: "riesgos",
    name: "Matriz de Riesgos IA",
    image: "assets/matriz-riesgos.png",
    problem: "Casos de uso sin evaluación previa de impacto, derechos, datos personales o sesgos.",
    input: "Ficha de caso de uso.",
    processing: "Evaluación de riesgo, datos personales, sesgo, impacto, trazabilidad.",
    output: "Clasificación de riesgo y controles.",
    risk: "Afectación de derechos o decisiones automatizadas.",
    control: "Evaluación de impacto, supervisión humana y auditoría.",
    demo: "Caso simulado: 'clasificación de expedientes'. Resultado: riesgo medio, controles obligatorios, bitácora, evaluación de impacto y prohibición expresa de decisión automática sin responsable.",
    steps: [
      "El área usuaria registra objetivo, datos tratados, usuarios y efecto esperado.",
      "La matriz evalúa datos personales, sesgo, explicabilidad, seguridad y afectación de derechos.",
      "El sistema clasifica riesgo y recomienda controles mínimos.",
      "El Comité o responsable valida si el caso avanza, se ajusta o se descarta."
    ],
    evidence: [
      "Ficha de caso de uso con clasificación de riesgo.",
      "Controles por dimensión: datos, seguridad, transparencia y supervisión.",
      "Historial de cambios y responsables de aprobación."
    ],
    norms: ["Ley 31814", "D.S. 115-2025-PCM", "Ley 29733", "D.S. 016-2024-JUS", "NTP-ISO/IEC 42001"]
  },
  {
    badge: "D",
    id: "tablero",
    name: "Tablero del Plan de Acción IA",
    image: "assets/tablero-plan-accion.png",
    problem: "Iniciativas de IA sin seguimiento ejecutivo, semáforos ni responsables visibles.",
    input: "Iniciativas, responsables, cronograma, presupuesto, indicadores.",
    processing: "Consolidación, semáforos, avance porcentual.",
    output: "Tablero ejecutivo de seguimiento.",
    risk: "Falta de actualización.",
    control: "Reporte trimestral del OIA y validación del Comité de Gobierno y Transformación Digital.",
    demo: "Panel simulado: 12 iniciativas, 4 en verde, 6 en amarillo, 2 en rojo; alerta por presupuesto pendiente, indicador sin línea base y responsable no asignado.",
    steps: [
      "Se registran iniciativas, responsables, presupuesto, indicadores, hitos y dependencias.",
      "El tablero calcula avance, alertas, retrasos y semáforos.",
      "El Oficial de IA consolida reporte periódico para seguimiento institucional.",
      "La alta dirección revisa prioridades, riesgos y necesidades presupuestales."
    ],
    evidence: [
      "Avance porcentual por iniciativa, área y objetivo ENIA.",
      "Semáforo por cronograma, presupuesto, riesgo y datos.",
      "Reporte ejecutivo exportable para seguimiento trimestral."
    ],
    norms: ["R.M. 152-2026-PCM", "PEI / POI / PMI / PGD", "D.S. 085-2023-PCM", "D. Leg. 1412", "D.S. 029-2021-PCM"]
  },
  {
    badge: "E",
    id: "generador",
    name: "Generador de Documentos Institucionales",
    image: "assets/generador-documentos.png",
    problem: "Borradores administrativos lentos, inconsistentes o sin control de versión.",
    input: "Plantilla, antecedentes, datos del caso, normativa.",
    processing: "Generación asistida, revisión semántica, control de consistencia.",
    output: "Borrador de oficio, informe, ficha técnica o memorando.",
    risk: "Texto impreciso o no validado.",
    control: "Revisión obligatoria por responsable y prohibición de emisión automática.",
    demo: "Plantilla simulada: 'Informe técnico'. Resultado: borrador con secciones completas, inconsistencias marcadas, referencias normativas sugeridas y sello visual 'No emitir sin revisión'.",
    steps: [
      "El usuario selecciona plantilla, antecedentes, datos del caso y normativa aplicable.",
      "La IA propone un borrador con estructura administrativa y alertas de consistencia.",
      "El sistema marca vacíos, contradicciones, datos sensibles y citas pendientes.",
      "El responsable revisa, corrige y aprueba fuera del sistema antes de emitir."
    ],
    evidence: [
      "Borrador con control de versión y trazabilidad de cambios.",
      "Lista de observaciones: datos faltantes, citas pendientes e inconsistencias.",
      "Bloqueo de emisión automática y recordatorio de validación humana."
    ],
    norms: ["R.M. 152-2026-PCM", "Ley 31814", "D.S. 115-2025-PCM", "Ley 27444", "Ley 29733", "Ley 27806"]
  }
];

const grid = document.querySelector("[data-prototype-grid]");
const modal = document.querySelector("[data-modal]");
const closeModal = document.querySelector("[data-close-modal]");
const menuToggle = document.querySelector("[data-menu-toggle]");
const nav = document.querySelector("[data-nav]");
const demoForm = document.querySelector("[data-demo-form]");
const caseTypeSelect = document.querySelector("[data-case-type]");
const userInput = document.querySelector("[data-user-input]");
const demoStatus = document.querySelector("[data-demo-status]");
const downloadButton = document.querySelector("[data-download-demo]");
const downloadHint = document.querySelector("[data-download-hint]");
let activePrototype = null;
let latestDemoResult = null;

function createPrototypeCard(item, index) {
  const card = document.createElement("article");
  card.className = "prototype-card reveal";
  card.innerHTML = `
    <img class="prototype-thumb" src="${item.image}" alt="Visual del prototipo ${item.name}">
    <span class="prototype-badge">Prototipo ${item.badge}</span>
    <h3>${item.name}</h3>
    <dl>
      <div><dt>Problema</dt><dd>${item.problem}</dd></div>
      <div><dt>Entrada</dt><dd>${item.input}</dd></div>
      <div><dt>Procesamiento IA</dt><dd>${item.processing}</dd></div>
      <div><dt>Resultado</dt><dd>${item.output}</dd></div>
      <div><dt>Riesgo</dt><dd>${item.risk}</dd></div>
      <div><dt>Control</dt><dd>${item.control}</dd></div>
    </dl>
    <button class="demo-button" type="button" data-demo-index="${index}">Ver demo</button>
  `;
  return card;
}

function renderList(selector, items, tagName) {
  const container = document.querySelector(selector);
  container.innerHTML = "";
  items.forEach((item) => {
    const element = document.createElement(tagName);
    element.textContent = item;
    container.appendChild(element);
  });
}

function renderNorms(items) {
  const container = document.querySelector("[data-modal-norms]");
  container.innerHTML = "";
  items.forEach((item) => {
    const chip = document.createElement("span");
    chip.className = "norm-chip";
    chip.textContent = item;
    container.appendChild(chip);
  });
}

function getExportFormat() {
  const selectedCase = caseTypeSelect.value.toLowerCase();
  if (!activePrototype) return "word";
  if (activePrototype.id === "riesgos" || activePrototype.id === "tablero" || selectedCase.includes("riesgo") || selectedCase.includes("tablero")) {
    return "excel";
  }
  return "word";
}

function updateDownloadHint() {
  const format = getExportFormat();
  const label = format === "excel" ? "Excel (.xls)" : "Word (.doc)";
  downloadHint.textContent = `La salida se descargará como ${label}. Demo rápida y caso documental usan Word; tablero y riesgo usan Excel.`;
}

function escapeHtml(value = "") {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function listHtml(items = []) {
  return `<ul>${items.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>`;
}

function safeFilename(value = "demo") {
  return String(value)
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-zA-Z0-9_-]+/g, "-")
    .replace(/^-|-$/g, "")
    .toLowerCase()
    .slice(0, 80) || "demo";
}

function buildWordFallback(data) {
  return `<!doctype html><html><head><meta charset="utf-8"><title>${escapeHtml(data.title)}</title></head><body>
    <h1>${escapeHtml(data.title)}</h1>
    <p><strong>Tipo de caso:</strong> ${escapeHtml(caseTypeSelect.value)}</p>
    <p><strong>Prototipo:</strong> ${escapeHtml(data.prototypeId)}</p>
    <h2>Escenario</h2><p>${escapeHtml(data.scenario)}</p>
    <h2>Entrada</h2><p>${escapeHtml(data.inputSummary)}</p>
    <h2>Proceso IA</h2>${listHtml(data.aiProcess)}
    <h2>Salida simulada</h2><p>${escapeHtml(data.simulatedOutput)}</p>
    <h2>Evidencia</h2>${listHtml(data.evidence)}
    <h2>Riesgo y control</h2><p><strong>Riesgo:</strong> ${escapeHtml(data.risk)}</p><p><strong>Control:</strong> ${escapeHtml(data.control)}</p>
    <p><strong>Revisión humana:</strong> ${escapeHtml(data.humanReview)}</p>
    <h2>KPIs</h2>${listHtml(data.kpis)}
    <p>${escapeHtml(data.disclaimer)}</p>
    <p><strong>Creado por Pierre R.</strong> | Contacto: peru.labs.pe@gmail.com</p>
  </body></html>`;
}

function buildExcelFallback(data) {
  const rows = [
    ["Campo", "Valor"],
    ["Título", data.title],
    ["Tipo de caso", caseTypeSelect.value],
    ["Prototipo", data.prototypeId],
    ["Escenario", data.scenario],
    ["Entrada", data.inputSummary],
    ["Proceso IA", (data.aiProcess || []).join(" | ")],
    ["Salida simulada", data.simulatedOutput],
    ["Evidencia", (data.evidence || []).join(" | ")],
    ["Riesgo", data.risk],
    ["Control", data.control],
    ["Revisión humana", data.humanReview],
    ["KPIs", (data.kpis || []).join(" | ")],
    ["Disclaimer", data.disclaimer],
    ["Autor", "Creado por Pierre R."],
    ["Contacto", "peru.labs.pe@gmail.com"]
  ];
  return `<!doctype html><html><head><meta charset="utf-8"><title>${escapeHtml(data.title)}</title></head><body><table border="1">
    ${rows.map((row, index) => `<tr>${row.map((cell) => index === 0 ? `<th>${escapeHtml(cell)}</th>` : `<td>${escapeHtml(cell)}</td>`).join("")}</tr>`).join("")}
  </table></body></html>`;
}

function triggerDownload(blob, filename) {
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

function downloadFallbackFile() {
  const format = getExportFormat();
  const filename = `${safeFilename(activePrototype.id)}-${safeFilename(caseTypeSelect.value)}.${format === "excel" ? "xls" : "doc"}`;
  const html = format === "excel" ? buildExcelFallback(latestDemoResult) : buildWordFallback(latestDemoResult);
  const type = format === "excel" ? "application/vnd.ms-excel;charset=utf-8" : "application/msword;charset=utf-8";
  triggerDownload(new Blob([html], { type }), filename);
}

async function downloadDemoResult() {
  if (!latestDemoResult || !activePrototype) return;

  try {
    const response = await fetch("/api/export", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        prototypeId: activePrototype.id,
        caseType: caseTypeSelect.value,
        demoResult: latestDemoResult
      })
    });

    if (!response.ok) throw new Error(`Export error ${response.status}`);
    const blob = await response.blob();
    const disposition = response.headers.get("Content-Disposition") || "";
    const filename = disposition.match(/filename="([^"]+)"/)?.[1] || `${safeFilename(activePrototype.id)}.${getExportFormat() === "excel" ? "xls" : "doc"}`;
    triggerDownload(blob, filename);
  } catch (error) {
    console.warn(`[frontend] Fallback download: ${error.message}`);
    downloadFallbackFile();
  }
}

function renderPrototypes() {
  prototypes.forEach((item, index) => {
    grid.appendChild(createPrototypeCard(item, index));
  });
}

function setLoadingState(message = "Ejecutando demo asistida por IA...") {
  latestDemoResult = null;
  downloadButton.disabled = true;
  updateDownloadHint();
  demoStatus.textContent = message;
  demoStatus.classList.add("is-loading");
  document.querySelector("[data-modal-result]").textContent = "La demo está consultando el backend seguro. La clave de IA nunca viaja al navegador.";
  renderList("[data-modal-steps]", ["Preparando caso simulado", "Consultando endpoint /api/demo", "Estructurando respuesta JSON"], "li");
  renderList("[data-modal-evidence]", ["Pendiente de respuesta"], "li");
  document.querySelector("[data-modal-risk]").textContent = "En evaluación";
  document.querySelector("[data-modal-control]").textContent = "En evaluación";
  document.querySelector("[data-modal-human-review]").textContent = "Pendiente de respuesta";
  document.querySelector("[data-modal-kpis]").textContent = "Pendiente de respuesta";
  document.querySelector("[data-modal-disclaimer]").textContent = "";
}

function renderDemoResponse(data) {
  latestDemoResult = {
    ...data,
    prototypeId: activePrototype.id,
    aiProcess: Array.isArray(data.aiProcess) ? data.aiProcess : [],
    evidence: Array.isArray(data.evidence) ? data.evidence : [],
    kpis: Array.isArray(data.kpis) ? data.kpis : [],
    disclaimer: data.disclaimer || "Demo asistida por IA. No sustituye validación técnica, legal ni institucional."
  };
  demoStatus.textContent = "Demo IA ejecutada correctamente.";
  demoStatus.classList.remove("is-loading");
  document.querySelector("[data-modal-title]").textContent = latestDemoResult.title || activePrototype.name;
  document.querySelector("[data-modal-input]").textContent = latestDemoResult.inputSummary || activePrototype.input;
  document.querySelector("[data-modal-processing]").textContent = latestDemoResult.scenario || activePrototype.processing;
  document.querySelector("[data-modal-output]").textContent = latestDemoResult.prototypeId || activePrototype.output;
  document.querySelector("[data-modal-result]").textContent = latestDemoResult.simulatedOutput || activePrototype.demo;
  renderList("[data-modal-steps]", latestDemoResult.aiProcess.length ? latestDemoResult.aiProcess : activePrototype.steps, "li");
  renderList("[data-modal-evidence]", latestDemoResult.evidence.length ? latestDemoResult.evidence : activePrototype.evidence, "li");
  renderNorms(activePrototype.norms);
  document.querySelector("[data-modal-risk]").textContent = latestDemoResult.risk || activePrototype.risk;
  document.querySelector("[data-modal-control]").textContent = latestDemoResult.control || activePrototype.control;
  document.querySelector("[data-modal-human-review]").textContent = latestDemoResult.humanReview || "Revisión obligatoria por responsable institucional.";
  document.querySelector("[data-modal-kpis]").textContent = latestDemoResult.kpis.length ? latestDemoResult.kpis.join(" | ") : "KPIs no disponibles";
  document.querySelector("[data-modal-disclaimer]").textContent = latestDemoResult.disclaimer;
  downloadButton.disabled = false;
  updateDownloadHint();
}

function renderClientFallback() {
  renderDemoResponse({
    title: `Demo local: ${activePrototype.name}`,
    prototypeId: activePrototype.id,
    scenario: "Fallback visual de navegador cuando el backend no responde.",
    inputSummary: userInput.value || activePrototype.input,
    aiProcess: activePrototype.steps,
    simulatedOutput: activePrototype.demo,
    evidence: activePrototype.evidence,
    risk: activePrototype.risk,
    control: activePrototype.control,
    humanReview: "El responsable institucional debe validar la salida antes de cualquier uso real.",
    kpis: ["Respuesta local de contingencia", "Sin uso de API externa", "Sin exposición de claves"],
    disclaimer: "Demo asistida por IA. No sustituye validación técnica, legal ni institucional."
  });
  demoStatus.textContent = "Backend no disponible. Se mostró fallback local sin clave expuesta.";
}

async function executeAiDemo() {
  if (!activePrototype) return;
  setLoadingState();

  try {
    const response = await fetch("/api/demo", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        prototypeId: activePrototype.id,
        userInput: userInput.value.trim(),
        demoMode: true,
        caseType: caseTypeSelect.value
      })
    });

    if (!response.ok) {
      throw new Error(`API error ${response.status}`);
    }

    const data = await response.json();
    renderDemoResponse(data);
  } catch (error) {
    console.warn(`[frontend] Fallback local: ${error.message}`);
    renderClientFallback();
  }
}

function openDemo(index) {
  const item = prototypes[index];
  activePrototype = item;
  const image = document.querySelector("[data-modal-image]");
  document.querySelector("[data-modal-title]").textContent = item.name;
  image.src = item.image;
  image.alt = `Imagen de demo para ${item.name}`;
  document.querySelector("[data-modal-input]").textContent = item.input;
  document.querySelector("[data-modal-processing]").textContent = item.processing;
  document.querySelector("[data-modal-output]").textContent = item.output;
  document.querySelector("[data-modal-result]").textContent = item.demo;
  renderList("[data-modal-steps]", item.steps, "li");
  renderList("[data-modal-evidence]", item.evidence, "li");
  renderNorms(item.norms);
  document.querySelector("[data-modal-risk]").textContent = item.risk;
  document.querySelector("[data-modal-control]").textContent = item.control;
  document.querySelector("[data-modal-human-review]").textContent = "El responsable institucional valida el resultado antes de usarlo.";
  document.querySelector("[data-modal-kpis]").textContent = "Pendiente de ejecutar demo IA.";
  document.querySelector("[data-modal-disclaimer]").textContent = "Demo asistida por IA. No sustituye validación técnica, legal ni institucional.";
  demoStatus.textContent = "Ejecutando demo asistida por IA...";
  demoStatus.classList.add("is-loading");
  latestDemoResult = null;
  downloadButton.disabled = true;
  userInput.value = "";
  caseTypeSelect.value = "demo rápida";
  updateDownloadHint();
  modal.hidden = false;
  closeModal.focus();
  executeAiDemo();
}

function hideDemo() {
  modal.hidden = true;
}

function setupInteractions() {
  grid.addEventListener("click", (event) => {
    const button = event.target.closest("[data-demo-index]");
    if (!button) return;
    openDemo(Number(button.dataset.demoIndex));
  });

  closeModal.addEventListener("click", hideDemo);

  demoForm.addEventListener("submit", (event) => {
    event.preventDefault();
    executeAiDemo();
  });

  caseTypeSelect.addEventListener("change", updateDownloadHint);

  downloadButton.addEventListener("click", downloadDemoResult);

  modal.addEventListener("click", (event) => {
    if (event.target === modal) hideDemo();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !modal.hidden) hideDemo();
  });

  menuToggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });

  nav.addEventListener("click", () => {
    nav.classList.remove("is-open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
}

function setupRevealAnimation() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.14 });

  document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
}

function setupActiveNavigation() {
  const sections = ["propuesta", "normas", "prototipos", "arquitectura", "ruta", "entregables"]
    .map((id) => document.getElementById(id));
  const links = [...document.querySelectorAll(".main-nav a")];

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      links.forEach((link) => {
        link.classList.toggle("is-active", link.getAttribute("href") === `#${entry.target.id}`);
      });
    });
  }, { rootMargin: "-42% 0px -52% 0px" });

  sections.forEach((section) => observer.observe(section));
}

renderPrototypes();
setupInteractions();
setupRevealAnimation();
setupActiveNavigation();
