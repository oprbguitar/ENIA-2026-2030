import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "./tests",
  testMatch: "**/*.spec.mjs",
  webServer: {
    command: "npm run dev",
    url: "http://127.0.0.1:3000",
    reuseExistingServer: !process.env.CI,
    env: {
      AI_PROVIDER: "mock",
      PORT: "3000"
    }
  },
  use: {
    baseURL: "http://127.0.0.1:3000",
    trace: "on-first-retry"
  }
});
