import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],

  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor-react': ['react', 'react-dom'],
          'vendor-motion': ['framer-motion'],
          'vendor-icons': ['lucide-react', 'react-icons'],
          'vendor-router': ['wouter'],
        },
      },
    },
    // Minification par défaut Vite (esbuild) — sans terser
    minify: 'esbuild',
    chunkSizeWarningLimit: 600,
    cssCodeSplit: true,
    sourcemap: false,
  },

  optimizeDeps: {
    include: ['react', 'react-dom', 'framer-motion', 'wouter', 'lucide-react'],
  },

  test: {
    globals: true,
    environment: 'happy-dom',
    setupFiles: './client/src/test/setup.ts',
    include: ['**/*.{test,spec}.{ts,tsx}'],
  },

  resolve: {
    alias: {
      '@': path.resolve(__dirname, './client/src'),
    },
  },
});
