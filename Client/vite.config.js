import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  base: '/ecommerce-restaurante/', // tu ruta base

  resolve: {
    alias: {
      'api': path.resolve(__dirname, './src/api'),
      'components': path.resolve(__dirname, './src/components'),
      'pages': path.resolve(__dirname, './src/pages'),
      'context': path.resolve(__dirname, './src/Context'),
    },
  },
})
