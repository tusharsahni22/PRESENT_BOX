import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import eslint from 'vite-plugin-eslint'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),
    eslint({
      // fix: true,
      include: ['src/**/*.js', 'src/**/*.jsx'],
      exclude: ['node_modules', 'dist'],
    })
  ],
})
