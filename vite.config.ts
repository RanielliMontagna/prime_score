/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from 'vite'
import { VitePWA, VitePWAOptions } from 'vite-plugin-pwa'

import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'

const pwaOptions: Partial<VitePWAOptions> = {
  registerType: 'autoUpdate',
  manifest: {
    name: 'Prime Score',
    short_name: 'Prime Score',
    theme_color: '#1971C2',
    icons: [
      {
        src: '/pwa-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/pwa-512x512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any maskable',
      },
    ],
  },
}

export default defineConfig({
  plugins: [react(), tsconfigPaths(), VitePWA(pwaOptions)],
  server: {
    watch: {
      usePolling: true,
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: 'src/test/setup.ts',
    css: true,
  },
})
