import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import tailwindcss from '@tailwindcss/vite';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';

export default defineConfig({
  plugins: [
    react(),
    svgr(),
    tailwindcss(),
    ViteImageOptimizer({
      // Настройки для разных форматов
      png: {
        quality: 80,
        compressionLevel: 9,
      },
      jpg: {
        quality: 80,
      },
      jpeg: {
        quality: 80,
      },
      webp: {
        lossless: false,
        quality: 80,
      },
      svg: {
        multipass: true,
        plugins: [
          {
            name: 'preset-default',
            params: {
              overrides: {
                cleanupNumericValues: false,
                removeViewBox: false,
              },
            },
          },
          'removeDimensions',
          'sortAttrs',
        ],
      },
    }),
  ],
  build: {
    // Оптимизация для лучшего code splitting
    rollupOptions: {
      output: {
        // Разделяем vendor зависимости от приложения
        manualChunks: (id) => {
          if (id.includes('node_modules')) {
            if (id.includes('react') || id.includes('react-dom') || id.includes('react-router-dom')) {
              return 'vendor';
            }
            if (id.includes('aos')) {
              return 'aos';
            }
            return 'vendor';
          }
        },
        assetFileNames: (assetInfo) => {
          let extType = assetInfo.name?.split('.').at(1);
          if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType || '')) {
            extType = 'img';
          }
          return `assets/${extType}/[name]-[hash][extname]`;
        },
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
      },
    },
    // Включаем сжатие (используем terser)
    minify: 'terser',
    // Увеличиваем лимит для chunk splitting warning
    chunkSizeWarningLimit: 1000,
  },
});
