import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

const rootDir = path.dirname(fileURLToPath(import.meta.url))

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Load unprefixed vars too, so the dev proxy can follow the API's port.
  const env = loadEnv(mode, rootDir, '')

  // The API's own .env is the source of truth for its port, so changing PORT
  // there is enough — nothing has to be mirrored here. Only PORT is read; no
  // value from this file is exposed to the client bundle.
  const serverEnv = loadEnv(mode, path.resolve(rootDir, 'server'), '')

  // In dev the app calls /api on its own origin and Vite forwards it here, which
  // keeps VITE_API_URL unset and makes local and hosted behaviour identical.
  const apiProxyTarget =
    env.DEV_API_PROXY || `http://localhost:${serverEnv.PORT || env.API_PORT || 5000}`

  return {
    plugins: [react()],
    server: {
      proxy: {
        '/api': {
          target: apiProxyTarget,
          changeOrigin: true,
        },
      },
    },
  }
})
