<template>
  <div class="line-info">
    <nav-view
      :input-value="searchInput"
      :value="selectValue"
      :options="selectList"
      @handleSelectChange="handleSelectChange"
      @handleSearchChange="handleSearchChange"
    />
    <match-view
      :column-data="matchColumnData"
      :table-data="matchTableData"
      :page-number="matchPageNumber"
      :page-size="matchPageSize"
      :total="matchTotal"
      @handlePageSizeChange="handleMatchPageSizeChange"
      @handlePageNumberChange="handleMatchPageNumberChange"
      @handleAddClick="handleMatchAddClick"
      @handleDeleteClick="handleAddedDeleteClick"
    />
    <added-view
      :column-data="addedColumnData"
      :table-data="addedTableData"
      @handleDeleteClick="handleAddedDeleteClick"
    />
  </div>
</template>

<script>

import NavView from './panel-components/nav-view'
import MatchView from './panel-components/match-view'
import AddedView from './panel-components/added-view'
import tableMixins from './panel-components/table-mixins.js'

export default {
  components: {
    'nav-view': NavView,
    'match-view': MatchView,
    'added-view': AddedView

  },
  mixins: [tableMixins],
  data() {
    return {
      selectValue: 'line-No',
      selectList: [
        {
          value: 'line-No',
          label: '线路编号'
        },
        {
          value: 'line-name',
          label: '线路名称'
        }
      ],
      searchInput: '',

      matchColumnData: [
        '线路编号',
        '线路名称'
      ],
      addedColumnData: [
        '线路编号',
        '线路名称'
      ],
      matachTableURL: '',
      matchTableData: Array(10)
        .fill(0)
        .map((value, index) => {
          return {
            id: 10 + 'match - ' + index,
            线路编号: '线路编号' + index,
            线路名称: '线路名称' + index
          }
        }),

      addedTableData: Array(10)
        .fill(0)
        .map((value, index) => {
          return {
            id: 10 + 'added - ' + index,
            线路编号: '线路编号' + index,
            线路名称: '线路名称' + index,
            state: true
          }
        })
    }
  },
  methods: {
    /* 对话框的确定按钮 */
    confirmBtn() {
      console.log('提交，回调')
    },
    handleSelectChange(value) {
      this.selectValue = value

      /* TODO 发送请求，拿到数据，填充数据 */
    },
    handleSearchChange(value) {
      this.searchInput = value
      /* TODO 发送请求，拿到数据，填充数据 */
    },

    /**
     * 处理 匹配到的内容表 中的pagesize变更
     */
    handleMatchPageSizeChange(pageSize) {
      this.matchPageSize = pageSize

      /* TODO 发送请求，拿到数据，填充数据 */
    },
    /**
     * 处理 匹配到的内容表 中的pageNumber变更
     */
    handleMatchPageNumberChange(pageNumber) {
      this.matchPageNumber = pageNumber
      const count = 10 * pageNumber
      this.matchTableData = Array(10)
        .fill(0)
        .map((value, index) => {
          return {
            id: count + 'match - ' + index,
            设备CI: '设备CI' + index,
            设备名称: '设备名称' + index,
            设备管理IP: new Date().toLocaleDateString()
          }
        })

      /* TODO 发送请求，拿到数据，填充数据 */
    }
  }
}
</script>

<style lang="scss">
.line-info {
  // height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-content: flex-start;
  .el-row {
    padding: 15px 20px 0px 0px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-end;
  }
}
</style>
