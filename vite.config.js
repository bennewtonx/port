import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      // Make sure to add 'react-icons' to external to prevent Vite from bundling it
      external: ['react-icons'],
    },
  },
})
