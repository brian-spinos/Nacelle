/**
 * Testing configuration
 */

import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    environment: "jsdom", // Use jsdom for React testing
    globals: true, // Global settings for testing
    coverage: {
      provider: "v8",
      reporter: ["text", "html"], // Coverage reports
    },
  },
});
