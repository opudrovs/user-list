import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

import path, { resolve } from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/user-list-sample/',
  resolve: {
    alias: {
      'assets': path.resolve(__dirname, 'src/assets'),
      'components': path.resolve(__dirname, 'src/components'),
      'constants': path.resolve(__dirname, 'src/constants'),
      'pages': path.resolve(__dirname, 'src/components/pages'),
      'utils': path.resolve(__dirname, 'src/utils'),
    },
  },
})
