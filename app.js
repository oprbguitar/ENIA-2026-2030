const prototypes = [
  {
    badge: "A",
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

function renderPrototypes() {
  prototypes.forEach((item, index) => {
    grid.appendChild(createPrototypeCard(item, index));
  });
}

function openDemo(index) {
  const item = prototypes[index];
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
  modal.hidden = false;
  closeModal.focus();
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
