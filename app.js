const prototypes = [
  {
    badge: "A",
    name: "Asistente Documental IA",
    problem: "Demora para encontrar sustento normativo o antecedentes en archivos dispersos.",
    input: "PDF, Word, Excel, normas, informes, oficios.",
    processing: "OCR, segmentación, búsqueda semántica, recuperación documental, respuesta con fuente.",
    output: "Respuesta sustentada en documentos.",
    risk: "Respuesta incorrecta o sin sustento.",
    control: "Cita obligatoria, revisión humana y registro de consulta.",
    demo: "Consulta: '¿Qué debe contener el Plan de Acción IA?'. Resultado: lista de componentes con fuente documental, enlace interno al documento base y estado 'pendiente de validación por responsable'."
  },
  {
    badge: "B",
    name: "OCR + Extracción de Datos",
    problem: "Expedientes escaneados difíciles de convertir en datos útiles para seguimiento.",
    input: "PDF escaneado, formularios, expedientes.",
    processing: "OCR, limpieza, extracción de campos, validación.",
    output: "Tabla exportable.",
    risk: "Error de lectura.",
    control: "Validación por usuario y control de calidad.",
    demo: "Archivo: 'Expediente_042.pdf'. Resultado simulado: 18 campos detectados, 3 requieren revisión manual, exportación CSV bloqueada hasta validación."
  },
  {
    badge: "C",
    name: "Matriz de Riesgos IA",
    problem: "Casos de uso sin evaluación previa de impacto, derechos, datos personales o sesgos.",
    input: "Ficha de caso de uso.",
    processing: "Evaluación de riesgo, datos personales, sesgo, impacto, trazabilidad.",
    output: "Clasificación de riesgo y controles.",
    risk: "Afectación de derechos o decisiones automatizadas.",
    control: "Evaluación de impacto, supervisión humana y auditoría.",
    demo: "Caso: 'clasificación de expedientes'. Resultado: riesgo medio, controles mínimos, bitácora obligatoria y prohibición de decisión automática."
  },
  {
    badge: "D",
    name: "Tablero del Plan de Acción IA",
    problem: "Iniciativas de IA sin seguimiento ejecutivo, semáforos ni responsables visibles.",
    input: "Iniciativas, responsables, cronograma, presupuesto, indicadores.",
    processing: "Consolidación, semáforos, avance porcentual.",
    output: "Tablero ejecutivo de seguimiento.",
    risk: "Falta de actualización.",
    control: "Reporte trimestral del OIA y validación del Comité de Gobierno y Transformación Digital.",
    demo: "Panel simulado: 12 iniciativas, 4 en verde, 6 en amarillo, 2 en rojo; alerta por presupuesto pendiente y responsable no asignado."
  },
  {
    badge: "E",
    name: "Generador de Documentos Institucionales",
    problem: "Borradores administrativos lentos, inconsistentes o sin control de versión.",
    input: "Plantilla, antecedentes, datos del caso, normativa.",
    processing: "Generación asistida, revisión semántica, control de consistencia.",
    output: "Borrador de oficio, informe, ficha técnica o memorando.",
    risk: "Texto impreciso o no validado.",
    control: "Revisión obligatoria por responsable y prohibición de emisión automática.",
    demo: "Plantilla: 'Informe técnico'. Resultado: borrador con secciones completas, inconsistencias marcadas y sello visual 'No emitir sin revisión'."
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

function renderPrototypes() {
  prototypes.forEach((item, index) => {
    grid.appendChild(createPrototypeCard(item, index));
  });
}

function openDemo(index) {
  const item = prototypes[index];
  document.querySelector("[data-modal-title]").textContent = item.name;
  document.querySelector("[data-modal-input]").textContent = item.input;
  document.querySelector("[data-modal-processing]").textContent = item.processing;
  document.querySelector("[data-modal-output]").textContent = item.output;
  document.querySelector("[data-modal-result]").textContent = item.demo;
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
  const sections = ["propuesta", "prototipos", "arquitectura", "ruta", "entregables"]
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
