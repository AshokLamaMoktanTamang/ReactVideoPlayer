import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from '@svgr/rollup';
import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';
import path from 'path';

export default defineConfig({
  cacheDir: './node_modules/.vite/react-video-player',

  server: {
    port: 3333,
    host: 'localhost',
  },

  preview: {
    port: 4333,
    host: 'localhost',
  },

  plugins: [react(), svgr(), nxViteTsPaths()],

  resolve: {
    alias: {
      src: path.resolve(__dirname, './src/'),
      faetures: path.resolve(__dirname, './src/app/features/'),
      utils: path.resolve(__dirname, './src/utils/'),
      assets: path.resolve(__dirname, './src/assets/'),
      components: path.resolve(__dirname, './src/components/'),
      types: path.resolve(__dirname, './src/types/'),
    },
  },
});
