import { defineConfig } from "vitest/config";

export default defineConfig({
	test: {
		setupFiles: ["./vitest.setup.ts"],
		coverage: {
			reporter: ["text", "json", "html"],
			provider: "v8",
		},
		environment: "jsdom",
	},
});
