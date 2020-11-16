<template>
  <div class="device-info">
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
    <el-row>
      <el-button type="primary" @click="handleNextStap">下一步</el-button>
    </el-row>

    <!-- 对话框 -->
    <!-- <el-dialog title="收货地址" :visible.sync="dialogVisible" /> -->
    <common-dialog
      v-model="dialogVisible"
      :confirm-func="confirmBtn"
      title="设备类型"
      :width="'820px'"
    >
      <template v-slot:dialog-body>
        <switch-view />
      </template>
    </common-dialog>
  </div>
</template>

<script>

import NavView from './panel-components/nav-view'
import MatchView from './panel-components/match-view'
import AddedView from './panel-components/added-view'
import tableMixins from './panel-components/table-mixins.js'
import SwitchView from './panel-components/switch-view'
import CommonDialog from '@/zph-components/common-components/common-dialog'

export default {
  components: {
    'nav-view': NavView,
    'match-view': MatchView,
    'added-view': AddedView,
    'switch-view': SwitchView,
    'common-dialog': CommonDialog

  },
  mixins: [tableMixins],
  data() {
    return {
      dialogVisible: false,
      selectValue: 'device-name',
      selectList: [
        {
          value: 'device-name',
          label: '设备名称'
        },
        {
          value: 'region-name',
          label: '区域名称'
        },
        {
          value: 'device-manager',
          label: '设备管理人'
        }
      ],
      searchInput: '',

      matchColumnData: [
        '设备CI',
        '设备名称',
        '设备管理IP'
      ],
      addedColumnData: [
        '设备CI',
        '设备名称',
        '设备管理IP'
      ],
      matachTableURL: '',
      matchTableData: Array(10)
        .fill(0)
        .map((value, index) => {
          return {
            id: 10 + 'match - ' + index,
            设备CI: '设备CI' + index,
            设备名称: '设备名称' + index,
            设备管理IP: new Date().toLocaleDateString()
          }
        }),

      addedTableData: Array(10)
        .fill(0)
        .map((value, index) => {
          return {
            id: 10 + 'added - ' + index,
            设备CI: '设备CI' + index,
            设备名称: '设备名称' + index,
            设备管理IP: new Date().toLocaleDateString(),
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
.device-info {
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
