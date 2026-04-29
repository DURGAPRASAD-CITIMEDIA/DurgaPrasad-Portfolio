import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import os from 'node:os'
import path from 'node:path'

// https://vite.dev/config/
export default defineConfig({
  // Avoid Windows EPERM issues when deleting files inside this workspace
  // by keeping Vite's cache outside the project directory.
  cacheDir: path.join(os.tmpdir(), 'dp-portfolio-vite-cache'),
  plugins: [react()],
})
