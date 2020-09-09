<template>
  <div class="cell-phone-detail">
    <navs-view
      @changeRadioValue="handleRadioValue"
      @handleSearchForm="handleSearchForm"
    />
    <table-view @handleCellEvent="handleCellEvent" />
    <detail-view @handleSelectEvent="handleSelectEvent" />
  </div>
</template>

<script>
import NavsView from './detail-view/navs-view.vue'
import TableView from './detail-view/table-view.vue'
import DetailView from './detail-view/detail-view.vue'

export default {
  name: 'CellPhoneDetail',
  components: {
    NavsView,
    TableView,
    DetailView
  },
  methods: {
    /* 处理导航条的单选按钮 */
    handleRadioValue(data) {
      console.log('handleRadioValue', data)
    },
    /* 处理表单的搜索提交 */
    handleSearchForm(data) {
      console.log('handleSearchForm', data)
    },
    /* 处理表中每个可点击的单元格 */
    handleCellEvent(data) {
      console.log('handleCellEvent', data)
    },
    handleSelectEvent(data) {
      console.log('handleSelectEvent', data)
    }
  }
}
</script>

<style lang="scss" scoped>
.cell-phone-detail {
  width:100%;
  height: 100%;
  margin: 0;
  padding: 0 20px 0;
}
</style>
