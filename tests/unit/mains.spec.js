// Importa funções e objetos do Vitest para auxiliar na escrita e execução de testes
import { describe, it, expect, vi } from 'vitest';

// Importa a função createApp do Vue
import { createApp } from 'vue';

// Importa o componente App do arquivo App.vue
import App from '../../src/App.vue';

// Usa vi.mock para criar um mock (simulação) do módulo 'vue'
vi.mock('vue', async (importOriginal) => {

    // Importa o módulo original do Vue para poder usar seus outros elementos
  const actual = await importOriginal();
  return {
    // Retorna todos os elementos originais do Vue
    ...actual,
    // Substitui a função createApp por uma função simulada que retorna um objeto com a função mount simulada
    createApp: vi.fn(() => ({
      mount: vi.fn(),
    })),
  };
});

// Define uma suíte de testes chamada 'main.js'
describe('main.js', () => {

    // Define um caso de teste que verifica se o Vue app é criado e montado
  it('creates a Vue app and mounts it', async () => {

    // Importa o módulo main.js de forma assíncrona (este módulo deve conter a criação e montagem do app Vue)
    await import('../../src/main.js');

    // Verifica se a função createApp foi chamada com o componente App como argumento
    expect(createApp).toHaveBeenCalledWith(App);
  });
});
