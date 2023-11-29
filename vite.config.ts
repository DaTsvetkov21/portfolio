import {defineConfig, loadEnv} from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path';

import Components from 'unplugin-vue-components/vite';
import {viteSingleFile} from "vite-plugin-singlefile";
import { fileURLToPath } from 'url';

const DEFAULT_PORT = 8080;

// @ts-ignore
export default ({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  return defineConfig({
    server: {
      host: env.DEV_DOMAIN,
      port: Number(env.DEV_PORT || DEFAULT_PORT),
    },
    build: {
      sourcemap: true,
    },
    plugins: [

      vue(),
      viteSingleFile(),
      Components({
        dts: true,
        resolvers: [],
      }),
    ],
    resolve: {
      alias: [
        {
          find: /^@\/(.+)/,
          replacement: path.resolve(path.resolve(__dirname), 'src') + '/$1'
        },
      ]
    },
    optimizeDeps: {
      include: [
        'lodash-es',
      ],
    },
  });
};
