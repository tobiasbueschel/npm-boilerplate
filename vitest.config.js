import { defineConfig } from 'vitest/config';
import viteConfig from './vite.config.js';

export default defineConfig({
  ...viteConfig,
  test: {
    globals: true,
    environment: 'node',
    // Add other Vitest-specific configurations here
  },
});
