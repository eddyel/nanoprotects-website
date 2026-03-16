import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],

  build: {
    // Code splitting — réduit le JS inutilisé sur mobile
    rollupOptions: {
      output: {
        manualChunks: {
          // Sépare React du reste
          'vendor-react': ['react', 'react-dom'],
          // Sépare les animations (framer-motion est lourd)
          'vendor-motion': ['framer-motion'],
          // Sépare les icônes
          'vendor-icons': ['lucide-react', 'react-icons'],
          // Sépare wouter (routing)
          'vendor-router': ['wouter'],
        },
      },
    },
    // Compression maximale
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ['console.log', 'console.info'],
      },
    },
    // Avertissement taille chunks
    chunkSizeWarningLimit: 600,
    // CSS code splitting
    cssCodeSplit: true,
    // Source maps désactivés en prod
    sourcemap: false,
  },

  // Optimisation des dépendances
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
