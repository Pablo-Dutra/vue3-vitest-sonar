import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import App from '../../src/App.vue'

describe('App.vue', () => {
  it('renders hello world', () => {
    const wrapper = mount(App)
    expect(wrapper.text()).toContain('Hello World')
  })
})
