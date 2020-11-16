<template>
  <div class="visual-template-wrapper">
    <add-content
      v-if="state === 'add'"
      :head-data="headData"
      @submit="state='home'"
    />
    <edit-content
      v-if="state === 'edit'"
      :head-data="headData"
      @submit="state='home'"
    />
    <home-content
      v-if="state === 'home'"
      @handleAddClick="handleAddClick"
      @handleEditClick="state='edit'"
      @handleViewClick="state='view'"
      @handleDeleteRowData="handleDeleteRowData"
    />
    <view-content
      v-if="state === 'view'"
      :head-data="headData"
      @submit="state='view'"
    />
  </div>
</template>

<script>
import AddContent from './add'
import EditContent from './edit'
import HomeContent from './home'
import ViewContent from './view'
import Cookies from 'js-cookie'

export default {
  name: 'SystemVisualTemplate',
  components: {
    'add-content': AddContent,
    'edit-content': EditContent,
    'home-content': HomeContent,
    'view-content': ViewContent
  },
  data() {
    return {
      /* state: home、add、edit、view */
      state: 'home',
      headData: {}
    }
  },
  watch: {
    state() {
      console.log('this.state', this.state, this.state === 'home')
      if (this.state !== 'home') {
        this.$store.dispatch('app/closeSideBar', { withoutAnimation: false })
      }
    }
  },
  methods: {
    handleAddClick(formData) {
      this.state = 'add'
      this.headData = formData
      console.log('this.headData', this.headData)
    },
    handleDeleteRowData(row) {
      /* 发送请求删除数据 */
    }
  }
}
</script>

<style lang="scss">
.visual-template-wrapper {
  width: 100%;
  height: 100%;
}
</style>
