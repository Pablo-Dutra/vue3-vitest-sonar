import { describe, it, expect, vi } from 'vitest';
import { createApp } from 'vue';
import App from '../../src/App.vue';

vi.mock('vue', async (importOriginal) => {
  const actual = await importOriginal();
  return {
    ...actual,
    createApp: vi.fn(() => ({
      mount: vi.fn(),
    })),
  };
});

describe('main.js', () => {
  it('creates a Vue app and mounts it', async () => {
    await import('../../src/main.js');
    expect(createApp).toHaveBeenCalledWith(App);
  });
});
