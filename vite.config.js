/*import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { babel } from "@rollup/plugin-babel";
export default defineConfig({
    plugins: [react()],
    server: {
        port: 8000
    },
    build: {
        rollupOptions: {
            plugins: [
                babel({
                    babelHelpers: "bundled", // Ensures Babel is bundled with the project
                    exclude: "node_modules/**" // Avoid transpiling all of node_modules
                })
            ]
        }
    }
});*/


import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { babel } from '@rollup/plugin-babel';

export default defineConfig({
  plugins: [
    react(),
    babel({
      babelHelpers: 'runtime', // Ensure runtime helpers are used
      extensions: ['.js', '.jsx', '.ts', '.tsx'], // Add file extensions to process
      exclude: 'node_modules/**',
    }),
  ],
  build: {
    outDir: 'dist',
    target: 'esnext', // Use modern JS output for Vercel compatibility
  },
});