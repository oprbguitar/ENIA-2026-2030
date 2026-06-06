import { describe, expect, it } from "vitest";
import { buildPrototypePrompt, prototypeIds, prototypePrompts } from "../server/prompts/prototypePrompts.mjs";

describe("prototype prompts", () => {
  it("defines a prompt for every prototypeId", () => {
    for (const prototypeId of prototypeIds) {
      expect(prototypePrompts[prototypeId]).toBeTypeOf("string");
      expect(prototypePrompts[prototypeId].length).toBeGreaterThan(300);
    }
  });

  it("builds prompts with ENIA context and JSON instructions", () => {
    const prompt = buildPrototypePrompt({
      prototypeId: "riesgos",
      userInput: "piloto para clasificar expedientes",
      caseType: "caso de riesgo"
    });

    expect(prompt).toContain("Resolución Ministerial N.° 152-2026-PCM");
    expect(prompt).toContain("JSON válido");
    expect(prompt).toContain("piloto para clasificar expedientes");
    expect(prompt).toContain("Creado por Pierre R.");
  });
});
