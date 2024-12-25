import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import { name as packageName } from './package.json';
import dts from 'vite-plugin-dts';

const __dirname = dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  plugins: [
    tsconfigPaths(),
    dts({
      insertTypesEntry: true,
			exclude: "**/*.test.ts"
    }),
    // Add other plugins here if necessary
  ],
  // Your Vite configuration here
  build: {
		minify: true,
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: packageName,
      formats: ['es'],
			fileName: (format, entryName) => `${entryName}.js`,
    }
  }
});
