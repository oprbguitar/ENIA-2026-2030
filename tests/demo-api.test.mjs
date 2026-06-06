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

  it("exports documentary cases as Word-compatible files", async () => {
    process.env.AI_PROVIDER = "mock";
    const demo = await request(app)
      .post("/api/demo")
      .send({ prototypeId: "documental", caseType: "caso documental", demoMode: true })
      .expect(200);

    const exportResponse = await request(app)
      .post("/api/export")
      .send({ prototypeId: "documental", caseType: "caso documental", demoResult: demo.body })
      .expect(200);

    expect(exportResponse.headers["content-type"]).toContain("application/msword");
    expect(exportResponse.headers["content-disposition"]).toContain(".doc");
  });

  it("exports dashboard and risk cases as Excel-compatible files", async () => {
    process.env.AI_PROVIDER = "mock";
    const demo = await request(app)
      .post("/api/demo")
      .send({ prototypeId: "tablero", caseType: "caso de tablero", demoMode: true })
      .expect(200);

    const exportResponse = await request(app)
      .post("/api/export")
      .send({ prototypeId: "tablero", caseType: "caso de tablero", demoResult: demo.body })
      .expect(200);

    expect(exportResponse.headers["content-type"]).toContain("application/vnd.ms-excel");
    expect(exportResponse.headers["content-disposition"]).toContain(".xls");
  });
});
