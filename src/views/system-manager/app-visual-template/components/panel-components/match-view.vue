<template>
  <div class="match-view">
    <h2>搜索结果</h2>
    <el-table
      border
      :data="tableData"
      style="width='inherit'"
      height="100%"
    >
      <!-- <el-table-column
        type="index"
        label="序号"
        width="50"
        fixed="left"
        align="center"
      /> -->
      <el-table-column
        width="55"
        fixed="left"
        align="center"
        prop="state"
      >
        <template slot="header" slot-scope="scope">
          <el-checkbox
            :value="allChecked && isAllChecked"
            :disabled="allChecked && isAllChecked"
            data-scope-id="all"
            @change="handleCheckAllChange"
          />
        </template>
        <template slot-scope="scope">
          <el-checkbox :data-scope-id="scope.row.id" :value="scope.row.state" :disabled="scope.row.state" @change="handleCheckChange" />
        </template>
      </el-table-column>
      <el-table-column
        v-for="(items, index) in columnData"
        :key="items"
        fixed
        :label="items"
        :prop="items"
        align="center"
        :resizable="false"
      />
      <el-table-column
        fixed="right"
        label="操作"
        width="140"
        align="center"
      >
        <template slot-scope="scope">
          <template v-if="scope.row.state">
            <el-button type="success" size="small" :disabled="scope.row.state" round @click="handleAddClick(scope.row)">已添加</el-button>
          </template>
          <template v-else>
            <el-button type="primary" size="small" round :disabled="scope.row.state" @click="handleAddClick(scope.row)">添加</el-button>
          </template>
        </template>
      </el-table-column>
    </el-table>

    <!-- 分页条 -->
    <el-pagination
      layout="total, sizes, prev, pager, next, jumper"
      background
      :hide-on-single-page="true"
      :current-page="pageNumber"
      :page-sizes="[10, 20, 30, 40]"
      :page-size="pageSize"
      :total="total"
      @size-change="handlePageSizeChange"
      @current-change="handlePageNumberChange"
    />
  </div>
</template>

<script>
export default {
  props: {
    columnData: {
      type: [Array],
      default: () => []
    },
    tableData: {
      type: [Array],
      default: () => []
    },
    pageNumber: {
      type: [Number],
      default: () => 1
    },
    pageSize: {
      type: [Number],
      default: () => 10
    },
    total: {
      type: [Number],
      default: () => 0
    }
  },
  data() {
    return {
      // multipleSelection: [],
      allChecked: false
    }
  },
  computed: {
    isAllChecked() {
      let all = true

      for (let i = 0; i < this.tableData.length; i++) {
        if (!this.tableData[i].state) {
          all = false
        }
      }

      return all
    }
  },
  watch: {
    tableData() {
      this.handleTableDataChange()
    }
  },
  methods: {
    /* 处理每一项数据变化时，是否勾选全选或者反选 */
    handleTableDataChange() {
      this.allChecked = true
      if (this.tableData.length === 0) {
        this.allChecked = false
      }
      this.tableData.forEach(row => {
        if (!row.state) {
          this.allChecked = false
        }
      })
    },
    /* 处理全选/反选 */
    handleCheckAllChange(value) {
      this.allChecked = value

      if (value) {
        this.tableData.forEach(row => {
          this.handleAddClick(row)
        })
      } else {
        this.tableData.forEach(row => {
          this.handleDeleteClick(row)
        })
      }
    },

    handleCheckChange(checked, event) {
      const id = event.target.parentNode.parentNode.getAttribute('data-scope-id')

      const row = this.tableData.find(item => (item.id + '') === (id + ''))
      if (checked) {
        this.handleAddClick(row)
      }

      this.$nextTick(() => {
        this.handleTableDataChange()
      })
    },

    handlePageSizeChange(value) {
      this.$emit('handlePageSizeChange', value)
    },
    handlePageNumberChange(value) {
      this.$emit('handlePageNumberChange', value)
    },
    handleAddClick(row) {
      this.$emit('handleAddClick', row)
    },
    handleDeleteClick(row) {
      this.$emit('handleDeleteClick', row)
    }
    // handleSelectionChange(val) {
    //   /* 如果全部取消，那么就直接把当前整页数据清空 */
    //   if (val.length === 0) {
    //     this.tableData.forEach(row => {
    //       this.handleDeleteClick(row)
    //     })
    //   } else {
    //     /* 让上一次选择的内容，与本次选择的内容进行对比，少了啥，就取消啥 */
    //     const beforeData = new Set() /* set 中貌似不支持存储数字，所以得转换成字符串 */
    //     this.multipleSelection.forEach(item => {
    //       console.log('item', item, item.id)
    //       beforeData.add(item.id + '')
    //     })
    //     /* 删除当前选项中有的内容，获得的就是少了啥 */
    //     val.forEach(row => {
    //       beforeData.delete(row.id + '')
    //     })

    //     beforeData.forEach(id => {
    //       /* 这里的sId 也得转换成字符串才能对比 */
    //       const row = this.multipleSelection.find(item => { return (item.id + '') === id })

    //       this.handleDeleteClick(row)
    //     })

    //     val.forEach(row => {
    //       this.handleAddClick(row)
    //     })
    //   }

    //   this.multipleSelection = val
    // },

  }
}
</script>

<style lang="scss" scoped>
.match-view {
  padding: 0 20px;
  display: flex;
  height: 35vh;
  flex-direction: column;

  h2 {
    padding: 0;
    font-size: 14px;
    font-weight: 600;
  }

  .el-pagination {
    text-align: center;
    margin-top: 10px;
  }

}
</style>
