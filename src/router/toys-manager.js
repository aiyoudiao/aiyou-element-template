import {
  TOYS_MANAGER,
  TOYS_MANAGER_PATH,
  TOYS_MANAGER_ZHCN,
  TOYS_MANAGER_INDEX,
  TOYS_MANAGER_INDEX_PATH,
  TOYS_MANAGER_INDEX_ZHCN
} from '@/constant/toys-manager'

export default (Layout) => ({
  path: TOYS_MANAGER_PATH,
  component: Layout,
  redirect: TOYS_MANAGER_INDEX_PATH,
  name: TOYS_MANAGER,
  meta: {
    title: TOYS_MANAGER_ZHCN,
    icon: 'nested'
  },
  children: [
    {
      path: TOYS_MANAGER_INDEX_PATH,
      name: TOYS_MANAGER_INDEX,
      meta: {
        title: TOYS_MANAGER_INDEX_ZHCN,
        icon: ''
      },
      notTop: true, /* 当子节点为1时也不置顶 */
      component: () => import('@/views/toys-manager/calculator/index.vue')
    }
  ]
})
