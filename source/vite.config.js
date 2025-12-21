import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
    root: ".",
    build: {
        assetsInlineLimit: 0,
    },
    esbuild: {
        legalComments: "none",
    },
    plugins: [tailwindcss()],
});
