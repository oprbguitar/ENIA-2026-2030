import express from "express";
import { buildPrototypePrompt, prototypeIds } from "../prompts/prototypePrompts.mjs";
import { generateGeminiDemo } from "../providers/gemini.provider.mjs";
import { generateMockDemo } from "../providers/mock.provider.mjs";

export const demoRouter = express.Router();

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
