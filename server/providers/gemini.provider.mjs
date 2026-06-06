import { demoResponseSchema } from "../prompts/prototypePrompts.mjs";
import { generateMockDemo } from "./mock.provider.mjs";

const GEMINI_ENDPOINT = "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent";
const TIMEOUT_MS = 14000;

function parseGeminiJson(payload) {
  const text = payload?.candidates?.[0]?.content?.parts?.map((part) => part.text || "").join("") || "";
  if (!text.trim()) {
    throw new Error("Gemini returned an empty response");
  }
  return JSON.parse(text);
}

function validateDemoShape(data) {
  const required = demoResponseSchema.required;
  const missing = required.filter((key) => data[key] === undefined || data[key] === null);
  if (missing.length) {
    throw new Error(`Gemini JSON missing required fields: ${missing.join(", ")}`);
  }
  return data;
}

export async function generateGeminiDemo({ prompt, prototypeId }) {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return generateMockDemo({ prototypeId });
  }

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), TIMEOUT_MS);

  try {
    const response = await fetch(GEMINI_ENDPOINT, {
      method: "POST",
      signal: controller.signal,
      headers: {
        "Content-Type": "application/json",
        "x-goog-api-key": apiKey
      },
      body: JSON.stringify({
        contents: [{ parts: [{ text: prompt }] }],
        generationConfig: {
          temperature: 0.35,
          responseMimeType: "application/json",
          responseJsonSchema: demoResponseSchema
        }
      })
    });

    if (!response.ok) {
      throw new Error(`Gemini API error: ${response.status}`);
    }

    const payload = await response.json();
    return validateDemoShape(parseGeminiJson(payload));
  } catch (error) {
    console.warn(`[gemini.provider] Fallback mock: ${error.message}`);
    return generateMockDemo({ prototypeId });
  } finally {
    clearTimeout(timeout);
  }
}
