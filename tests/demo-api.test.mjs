import request from "supertest";
import { afterEach, describe, expect, it } from "vitest";
import { createApp } from "../server/server.mjs";

const app = createApp();

afterEach(() => {
  delete process.env.GEMINI_API_KEY;
  delete process.env.AI_PROVIDER;
});

describe("POST /api/demo", () => {
  it("returns structured JSON for a valid prototype", async () => {
    process.env.AI_PROVIDER = "mock";

    const response = await request(app)
      .post("/api/demo")
      .send({ prototypeId: "documental", userInput: "Plan de Acción IA", demoMode: true })
      .expect(200);

    expect(response.body.title).toBeTruthy();
    expect(response.body.risk).toBeTruthy();
    expect(response.body.control).toBeTruthy();
    expect(response.body.disclaimer).toBe("Demo asistida por IA. No sustituye validación técnica, legal ni institucional.");
  });

  it("falls back to mock when GEMINI_API_KEY is not configured", async () => {
    process.env.AI_PROVIDER = "gemini";
    delete process.env.GEMINI_API_KEY;

    const response = await request(app)
      .post("/api/demo")
      .send({ prototypeId: "ocr", demoMode: true })
      .expect(200);

    expect(response.body.prototypeId).toBe("ocr");
    expect(response.body.title).toContain("OCR");
    expect(response.body.control).toBeTruthy();
  });

  it("rejects invalid prototypeId", async () => {
    await request(app)
      .post("/api/demo")
      .send({ prototypeId: "invalido", demoMode: true })
      .expect(400);
  });
});
