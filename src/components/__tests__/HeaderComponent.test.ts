import { expect, describe, it } from 'vitest'
import { type VueWrapper, mount, flushPromises } from '@vue/test-utils'
import HeaderComponentVue from '../HeaderComponent.vue'
import router from '@/router'

function getHeaderWrapper(): VueWrapper {
  const wrapper = mount(HeaderComponentVue, {
    global: {
      plugins: [router]
    }
  })
  return wrapper
}

describe('Header component', () => {
  it('Default block renders', async () => {
    const wrapper = getHeaderWrapper()

    expect(wrapper).toBeTruthy()

    expect(wrapper.get('header')).toBeTruthy()
    expect(wrapper.get('.child-container')).toBeTruthy()
    expect(wrapper.get('.header-content')).toBeTruthy()
    expect(wrapper.get('.header-content--logo')).toBeTruthy()
    expect(wrapper.get('.header-content__links')).toBeTruthy()
    expect(wrapper.get('.header-content__links--link')).toBeTruthy()
    expect(wrapper.get('.header-content__auth')).toBeTruthy()
    expect(wrapper.get('.header-content__auth--sign-in')).toBeTruthy()
    expect(wrapper.get('.header-content__auth--sign-up')).toBeTruthy()
    expect(wrapper.get('.header-content--menu-icon')).toBeTruthy()
  })

  it('Responsive block renders after click on menu icon', async () => {
    const wrapper = getHeaderWrapper()

    wrapper.get('.header-content--menu-icon').trigger('click')
    await wrapper.vm.$nextTick()

    expect(wrapper.get('.header-content__responsive-block')).toBeTruthy()
    expect(wrapper.get('.header-content__responsive-block--close-icon')).toBeTruthy()
    expect(wrapper.get('.header-content__responsive-block__links')).toBeTruthy()
    expect(wrapper.get('.header-content__responsive-block__links--link')).toBeTruthy()
    expect(wrapper.get('.header-content__responsive-block__auth')).toBeTruthy()
    expect(wrapper.get('.header-content__responsive-block__auth--sign-in')).toBeTruthy()
    expect(wrapper.get('.header-content__responsive-block__auth--sign-up')).toBeTruthy()
  })

  it('Responsive block hides after click on close icon', async () => {
    const wrapper = getHeaderWrapper()

    wrapper.get('.header-content--menu-icon').trigger('click')
    await wrapper.vm.$nextTick()

    wrapper.get('.header-content__responsive-block--close-icon').trigger('click')
    await wrapper.vm.$nextTick()

    expect(() => wrapper.get('.header-content__responsive-block')).toThrowError()
  })

  it('Responsive block hides after click on one of its links', async () => {
    const wrapper = getHeaderWrapper()

    wrapper.get('.header-content--menu-icon').trigger('click')
    await wrapper.vm.$nextTick()

    wrapper.get('#link-1-responsive').trigger('click')
    await wrapper.vm.$nextTick()

    expect(() => wrapper.get('.header-content__responsive-block')).toThrowError()
  })

  it('Responsive block hides after click on auth buttons', async () => {
    const wrapper = getHeaderWrapper()

    wrapper.get('.header-content--menu-icon').trigger('click')
    await wrapper.vm.$nextTick()

    wrapper.get('.header-content__responsive-block__auth--sign-in').trigger('click')
    await wrapper.vm.$nextTick()

    expect(() => wrapper.get('.header-content__responsive-block')).toThrowError()

    wrapper.get('.header-content--menu-icon').trigger('click')
    await wrapper.vm.$nextTick()

    wrapper.get('.header-content__responsive-block__auth--sign-up').trigger('click')
    await wrapper.vm.$nextTick()

    expect(() => wrapper.get('.header-content__responsive-block')).toThrowError()
  })

  it('Active link class is applied to a link after navigating to its page', async () => {
    const wrapper = getHeaderWrapper()

    wrapper.get('#link-1-default').trigger('click')
    await flushPromises()

    expect(wrapper.get('.activeLink')).toBeTruthy()
  })
})
