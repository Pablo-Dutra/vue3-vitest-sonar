// Importa a função 'mount' do Vue Test Utils para montar o componente Vue.
import { mount } from '@vue/test-utils'; 

// Importa funções e objetos do Vitest para descrever e definir testes, expectativas e mocks.
import { describe, it, expect, vi } from 'vitest'; 

// Importa o componente 'App.vue' que será testado.
import App from '../../src/App.vue'; 

// Define uma suite de testes para o componente 'App.vue'
describe('App.vue', () => {

    // Define um teste específico dentro da suite de testes
  it('renders hello world', () => {

    // Monta o componente 'App' e armazena o wrapper (objeto de montagem)
    const wrapper = mount(App);

    // Verifica se o texto renderizado no componente contém 'Título da Página'
    expect(wrapper.text()).toContain('Título da Página');
  });

  // Define outro teste específico para verificar o comportamento do botão e do campo de entrada
  it('shows alert with input text when button is clicked', async () => {
    
    // Monta o componente 'App' e armazena o wrapper (objeto de montagem)
    const wrapper = mount(App);
    
    // Encontra o elemento de entrada (input) dentro do componente montado
    const input = wrapper.find('input');
    
    // Encontra o elemento botão (button) dentro do componente montado
    const button = wrapper.find('button');

    // Define o valor do campo de entrada para 'Test input'
    await input.setValue('Test input');

    // Cria um mock para a função window.alert
    window.alert = vi.fn();

    // Simula um clique no botão
    await button.trigger('click');

    // Verifica se o alert foi chamado com o texto 'Test input'
    expect(window.alert).toHaveBeenCalledWith('Test input');
  });
});
