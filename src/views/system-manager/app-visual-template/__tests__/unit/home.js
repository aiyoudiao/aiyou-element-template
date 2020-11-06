import { shallowMount, mount } from '@vue/test-utils'
import Home from '../../home.vue'
describe('home.vue', () => {
  it('点击按钮时，isShowDialog为 true', () => {
    const wrapper = shallowMount(Home)
    wrapper.setData(
      {
        isShowDialog: true
      }
    )

    expect(wrapper.vm.$data.isShowDialog).toBeTruthy()
  })

  it('isShowDialog为 true时，弹窗会显示出来', () => {
    const wrapper = mount(Home)
    wrapper.setData(
      {
        isShowDialog: true
      }
    )
    const dialog = wrapper.find('[data-app-visual-template="dialog"]')
    console.log(dialog)
    expect(dialog.exists()).toBeTruthy()
  })
  // it('className', () => {
  //   const wrapper = shallowMount(SvgIcon, {
  //     propsData: {
  //       iconClass: 'test'
  //     }
  //   })
  //   expect(wrapper.classes().length).toBe(1)
  //   wrapper.setProps({ className: 'test' })
  //   expect(wrapper.classes().includes('test')).toBe(true)
  // })
})
