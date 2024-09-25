import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        api: "modern"
      }
    }
  },
  test: {
    environment: 'jsdom',
    setupFiles: ['./tests/testSetup.ts'],
    // include: ['./tests/**/*.test.tsx'],
    globals: true
  }
})
