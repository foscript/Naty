import path from 'path'
import { defineConfig } from 'vite'

// Plugins
import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import { tanstackRouter } from '@tanstack/router-plugin/vite'
import babel from '@rolldown/plugin-babel'
import tailwindcss from '@tailwindcss/vite'
import mdx from '@mdx-js/rollup'

export default defineConfig({
  plugins: [
    mdx({
      providerImportSource: '@mdx-js/react'
    }),
    
    react(),
    babel({ presets: [reactCompilerPreset()] }),
    tailwindcss(),
    tanstackRouter()
  ],

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src")
    }
  }
})
