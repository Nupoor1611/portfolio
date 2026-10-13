import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Set base to '/<repo-name>/' when deploying to GitHub Pages project sites.
export default defineConfig({
  base: process.env.VITE_BASE || '/',
  plugins: [react()],
  build: {
    target: 'es2019',
    minify: 'esbuild',
    cssMinify: true,
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: { react: ['react', 'react-dom'] },
      },
    },
  },
})
