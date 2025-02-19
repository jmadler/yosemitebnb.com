import { defineConfig } from 'vitest/node';

export default defineConfig({
    test: {
        globals: true,
        environment: 'jsdom',
    },
}); 