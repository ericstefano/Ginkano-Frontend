/// <reference types="vitest" />
import { resolve } from 'path';
import UnoCSS from '@unocss/vite';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react(), UnoCSS()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/test/setup.ts',
    coverage: {
      provider: 'c8',
      lines: 60,
      functions: 60,
      branches: 60,
      statements: 60,
    },
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
      '~mocks': resolve(__dirname, './mocks'),
    },
  },
});
