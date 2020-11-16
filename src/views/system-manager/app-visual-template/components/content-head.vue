<template>
  <div class="content-head">
    <el-row :gutter="6">
      <el-col :span="12">
        模板名称：
        <el-input label="模板名称" aria-readonly readonly disabled :value="templateName" placeholder="模板名称不能为空" />
      </el-col>
      <el-col v-if="dataSourceValue" :span="12">
        数据来源：
        <el-select label="数据来源" aria-readonly readonly disabled :value="dataSourceValue" placeholder="未选择任何数据来源">
          <el-option v-for="item in dataSource" :key="item.value" :label="item.label" :value="item.value" />
        </el-select>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: '',
  components: {},
  props: {
    headData: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      templateName: 'xxx模板',
      dataSource: [
        {
          label: '手机银行', value: 'cellphone'
        },
        {
          label: '网络支付清算', value: 'ecpp'
        }
      ],
      dataSourceValue: ''
    }
  },
  computed: {},
  watch: {
    headData() {
      const {
        templateName,
        dataImport,
        checked,
        options
      } = this.headData

      this.templateName = templateName
      if (checked) {
        this.dataSource = options
        this.dataSourceValue = dataImport
      }
    }
  },
  created() {},
  beforeCreate() {},
  mounted() {
    const {
      templateName,
      dataImport,
      checked,
      options
    } = this.headData

    this.templateName = templateName
    if (checked) {
      this.dataSource = options
      this.dataSourceValue = dataImport
    }
  },
  methods: {}
}
</script>

<style lang="scss" scoped>

.content-head {
  width: 100%;
  padding: 20px 30px 0 30px;

// ::v-deep .el-col {
//   text-align: center;
// }

::v-deep .el-select {
    width: calc(100% - 120px);
    .el-input {
      width: 100%;
    }
}

::v-deep .el-input {
    width: calc(100% - 120px);
}

}

</style>
