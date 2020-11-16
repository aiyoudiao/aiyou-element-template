<template>
  <div class="add-content">
    <content-head :head-data="headData" />
    <el-divider />
    <left-tabbar>
      <template slot="type" class="type-panel">
        <type-page ref="typePage" />
      </template>
      <template slot="device" class="device-panel">
        <device-page ref="devicePage" />
      </template>
      <template slot="line" class="line-panel">
        <line-page ref="linePage" />
      </template>
    </left-tabbar>
  </div>
</template>

<script>

import ContentHead from '../components/content-head.vue'
import LeftTabbar from '../components/left-tabbar.vue'
import TypePage from '../components/panel-type-page.vue'
import DevicePage from '../components/panel-device-page.vue'
import LinePage from '../components/panel-line-page.vue'

export default {
  name: '',
  components: {
    'content-head': ContentHead,
    'left-tabbar': LeftTabbar,
    'type-page': TypePage,
    'device-page': DevicePage,
    'line-page': LinePage
  },
  props: {
    headData: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {}
  },
  computed: {},
  watch: {},
  created() {},
  beforeCreate() {},
  mounted() {},
  methods: {
    handelSubmit() {
      /**
       * 1. 取出type-page 中复选框的值
       * 2. 取出device-page 中配置的值
       * 3. 取出line-page 中表格的值
       * 4. 组装好数据后，发送请求，回到列表页
       */

    }
  }
}
</script>

<style lang="scss" scoped></style>
