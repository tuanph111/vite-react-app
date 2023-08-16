import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import postcssNested from "postcss-nested";

// https://vitejs.dev/config/
export default defineConfig({
    server: {
        host: "0.0.0.0",
        port: 3000,
    },
    css: {
        postcss: {
            plugins: [postcssNested()],
        },
    },
    plugins: [react()],
    envDir: "./env",
});
