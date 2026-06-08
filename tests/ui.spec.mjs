import { expect, test } from "@playwright/test";

const prototypeNames = [
  "Evaluación de madurez IA",
  "Gestión de riesgos IA"
];

test.describe("IA Pública Responsable UI", () => {
  test("opens every prototype modal and renders assisted demo fields", async ({ page }) => {
    await page.goto("/");

    for (const name of prototypeNames) {
      const card = page.locator(".prototype-card", { hasText: name });
      await card.getByRole("button", { name: "Iniciar simulación →" }).click();

      await expect(page.locator("[data-modal]")).toBeVisible();
      await expect(page.locator("[data-demo-status]")).toContainText("Demo IA ejecutada", { timeout: 15000 });
      await expect(page.locator("[data-modal-title]")).toContainText(/Demo|Asistente|OCR|Matriz|Tablero|Generador/);
      await expect(page.locator("[data-modal-result]")).not.toBeEmpty();
      await expect(page.locator("[data-modal-risk]")).not.toBeEmpty();
      await expect(page.locator("[data-modal-control]")).not.toBeEmpty();
      await expect(page.locator("[data-download-hint]")).toContainText(/Word|Excel/);
      await expect(page.locator("[data-download-demo]")).toBeEnabled();

      await page.getByLabel("Cerrar demo").click();
      await expect(page.locator("[data-modal]")).toBeHidden();
    }
  });
});
