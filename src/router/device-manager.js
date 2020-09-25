import {
  DEVICE_MANAGER,
  DEVICE_MANAGER_PATH,
  DEVICE_MANAGER_ZHCN,
  DEVICE_MANAGER_INDEX,
  DEVICE_MANAGER_INDEX_PATH,
  DEVICE_MANAGER_INDEX_ZHCN
} from '@/constant/device-manager'

export default (Layout) => ({
  path: DEVICE_MANAGER_PATH,
  component: Layout,
  redirect: DEVICE_MANAGER_INDEX_PATH,
  name: DEVICE_MANAGER,
  meta: {
    title: DEVICE_MANAGER_ZHCN,
    icon: 'nested'
  },
  children: [
    {
      path: DEVICE_MANAGER_INDEX_PATH,
      name: DEVICE_MANAGER_INDEX,
      meta: {
        title: DEVICE_MANAGER_INDEX_ZHCN,
        icon: ''
      },
      notTop: true, /* 当子节点为1时也不置顶 */
      component: () => import('@/views/device-manager/relationship/index.vue')
    }
  ]
})
