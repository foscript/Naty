import path from 'path'
import { defineConfig } from 'vite'

import reactPlugin, { reactCompilerPreset } from '@vitejs/plugin-react'
import { tanstackRouter as tanstackRouterPlugin } from '@tanstack/router-plugin/vite'
import babelPlugin from '@rolldown/plugin-babel'
import tailwindcssPlugin from '@tailwindcss/vite'
import mdxPlugin from '@mdx-js/rollup'

export default defineConfig({
  plugins: [
    mdxPlugin({
      providerImportSource: '@mdx-js/react'
    }),
    
    reactPlugin(),
    babelPlugin({ presets: [reactCompilerPreset()] }),
    tailwindcssPlugin(),
    tanstackRouterPlugin()
  ],

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src")
    }
  }
})
