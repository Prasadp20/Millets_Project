import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/Millets_Project/', // ← replace REPO_NAME with your GitHub repo name
  plugins: [react()],
})
