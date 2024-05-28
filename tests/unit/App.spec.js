// import { mount } from '@vue/test-utils'
// import { describe, it, expect } from 'vitest'
// import App from '../../src/App.vue'

// describe('App.vue', () => {
//   it('renders hello world', () => {
//     const wrapper = mount(App)
//     expect(wrapper.text()).toContain('Hello World')
//   })
// })

import { mount } from '@vue/test-utils';
import { describe, it, expect, vi } from 'vitest';
import App from '../../src/App.vue';

describe('App.vue', () => {
  it('renders hello world', () => {
    const wrapper = mount(App);
    expect(wrapper.text()).toContain('Título da Página');
  });

  it('shows alert with input text when button is clicked', async () => {
    const wrapper = mount(App);
    const input = wrapper.find('input');
    const button = wrapper.find('button');

    // Simulate user input
    await input.setValue('Test input');

    // Mock window.alert
    window.alert = vi.fn();

    // Simulate button click
    await button.trigger('click');

    // Assert the alert has been called with the correct value
    expect(window.alert).toHaveBeenCalledWith('Test input');
  });
});
