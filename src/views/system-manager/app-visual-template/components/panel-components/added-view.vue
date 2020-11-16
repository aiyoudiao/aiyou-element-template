<template>
  <div class="added-view">
    <h2>已选择</h2>
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
            v-model="allChecked"
            data-scope-id="all"
            :disabled="!allChecked"
            @change="handleCheckAllChange"
          />
        </template>
        <template slot-scope="scope">
          <el-checkbox :data-scope-id="scope.row.id" :value="scope.row.state " @change="handleCheckChange" />
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
          <el-button type="danger" size="small" round @click="handleDeleteClick(scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
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
    }
  },
  data() {
    return {
      allChecked: true
    }
  },
  watch: {
    tableData() {
      if (this.tableData.length === 0) {
        this.allChecked = false
      } else {
        this.allChecked = true
      }
    }
  },
  methods: {
    handleCheckAllChange(value) {
      this.tableData.forEach(row => {
        this.handleDeleteClick(row)
      })
    },
    handleDeleteClick(row) {
      this.$emit('handleDeleteClick', row)
    },
    handleCheckChange(checked, event) {
      const id = event.target.parentNode.parentNode.getAttribute('data-scope-id')

      const row = this.tableData.find(item => (item.id + '') === (id + ''))
      this.handleDeleteClick(row)
    }
  }
}
</script>

<style lang="scss">
.added-view {
  padding: 0 20px;
  display: flex;
  height: 35vh;
  flex-direction: column;

  h2 {
    padding: 0;
    font-size: 14px;
    font-weight: 600;
  }

}
</style>
