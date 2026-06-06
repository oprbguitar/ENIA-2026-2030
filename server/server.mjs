import "dotenv/config";
import express from "express";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { demoRouter } from "./routes/demo.routes.mjs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, "..");
const publicDir = path.join(rootDir, "public");

export function createApp() {
  const app = express();

  app.disable("x-powered-by");
  app.use(express.json({ limit: "128kb" }));
  app.use(express.static(publicDir));
  app.use("/api", demoRouter);

  app.get("/health", (_req, res) => {
    res.json({ ok: true, service: "IA Pública Responsable", author: "Creado por Pierre R." });
  });

  return app;
}

if (process.env.NODE_ENV !== "test") {
  const port = Number(process.env.PORT || 3000);
  createApp().listen(port, () => {
    console.log(`IA Pública Responsable escuchando en http://localhost:${port}`);
  });
}
