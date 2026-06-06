import express from "express";
import { buildPrototypePrompt, prototypeIds } from "../prompts/prototypePrompts.mjs";
import { generateGeminiDemo } from "../providers/gemini.provider.mjs";
import { generateMockDemo } from "../providers/mock.provider.mjs";

export const demoRouter = express.Router();

function exportFormat({ prototypeId, caseType = "" }) {
  const normalizedCase = caseType.toLowerCase();
  if (prototypeId === "riesgos" || prototypeId === "tablero" || normalizedCase.includes("riesgo") || normalizedCase.includes("tablero")) {
    return "excel";
  }
  return "word";
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

function buildWordDocument(data, caseType) {
  return `<!doctype html>
<html>
<head>
  <meta charset="utf-8">
  <title>${escapeHtml(data.title)}</title>
  <style>
    body { font-family: Arial, sans-serif; color: #172033; line-height: 1.45; }
    h1 { color: #9e1b32; }
    h2 { color: #255c99; border-bottom: 1px solid #dde5ef; padding-bottom: 4px; }
    .note { background: #fff4f2; padding: 10px; border-left: 4px solid #d62839; }
  </style>
</head>
<body>
  <h1>${escapeHtml(data.title)}</h1>
  <p><strong>Tipo de caso:</strong> ${escapeHtml(caseType)}</p>
  <p><strong>Prototipo:</strong> ${escapeHtml(data.prototypeId)}</p>
  <h2>Escenario</h2>
  <p>${escapeHtml(data.scenario)}</p>
  <h2>Entrada resumida</h2>
  <p>${escapeHtml(data.inputSummary)}</p>
  <h2>Proceso IA</h2>
  ${listHtml(data.aiProcess)}
  <h2>Salida simulada</h2>
  <p>${escapeHtml(data.simulatedOutput)}</p>
  <h2>Evidencia</h2>
  ${listHtml(data.evidence)}
  <h2>Riesgo y control</h2>
  <p><strong>Riesgo:</strong> ${escapeHtml(data.risk)}</p>
  <p><strong>Control:</strong> ${escapeHtml(data.control)}</p>
  <p><strong>Revisión humana:</strong> ${escapeHtml(data.humanReview)}</p>
  <h2>KPIs</h2>
  ${listHtml(data.kpis)}
  <p class="note">${escapeHtml(data.disclaimer)}</p>
  <p><strong>Creado por Pierre R.</strong> | Contacto: peru.labs.pe@gmail.com</p>
</body>
</html>`;
}

function buildExcelDocument(data, caseType) {
  const rows = [
    ["Campo", "Valor"],
    ["Título", data.title],
    ["Tipo de caso", caseType],
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

  return `<!doctype html>
<html>
<head>
  <meta charset="utf-8">
  <title>${escapeHtml(data.title)}</title>
  <style>
    table { border-collapse: collapse; font-family: Arial, sans-serif; width: 100%; }
    th { background: #172033; color: white; }
    td, th { border: 1px solid #dde5ef; padding: 8px; vertical-align: top; }
  </style>
</head>
<body>
  <table>
    ${rows.map((row, index) => `<tr>${row.map((cell) => index === 0 ? `<th>${escapeHtml(cell)}</th>` : `<td>${escapeHtml(cell)}</td>`).join("")}</tr>`).join("")}
  </table>
</body>
</html>`;
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

demoRouter.post("/demo", async (req, res) => {
  const { prototypeId, userInput = "", demoMode = true, caseType = "demo rápida" } = req.body || {};

  if (!prototypeIds.includes(prototypeId)) {
    return res.status(400).json({
      error: "prototypeId inválido",
      allowed: prototypeIds
    });
  }

  try {
    const prompt = buildPrototypePrompt({ prototypeId, userInput, demoMode, caseType });
    const provider = process.env.AI_PROVIDER || "gemini";
    const data = provider === "mock"
      ? await generateMockDemo({ prototypeId })
      : await generateGeminiDemo({ prompt, prototypeId });

    return res.json(data);
  } catch (error) {
    console.error(`[demo.routes] ${error.message}`);
    return res.status(500).json({
      error: "No se pudo ejecutar la demo",
      detail: "Se produjo un error controlado en el backend."
    });
  }
});

demoRouter.post("/export", (req, res) => {
  const { demoResult, prototypeId, caseType = "demo rápida" } = req.body || {};
  const id = prototypeId || demoResult?.prototypeId;

  if (!demoResult || !prototypeIds.includes(id)) {
    return res.status(400).json({ error: "Datos de exportación inválidos" });
  }

  const format = exportFormat({ prototypeId: id, caseType });
  const filenameBase = `${safeFilename(id)}-${safeFilename(caseType)}`;

  if (format === "excel") {
    const content = buildExcelDocument({ ...demoResult, prototypeId: id }, caseType);
    res.setHeader("Content-Type", "application/vnd.ms-excel; charset=utf-8");
    res.setHeader("Content-Disposition", `attachment; filename="${filenameBase}.xls"`);
    return res.send(content);
  }

  const content = buildWordDocument({ ...demoResult, prototypeId: id }, caseType);
  res.setHeader("Content-Type", "application/msword; charset=utf-8");
  res.setHeader("Content-Disposition", `attachment; filename="${filenameBase}.doc"`);
  return res.send(content);
});
