<template>
  <div class="form-wrapper">
    <el-form
      ref="ruleForm"
      :rules="rules"
      :model="ruleForm"
      label-width="100px"
    >
      <el-form-item label="模板名称:" prop="templateName">
        <el-input
          v-model="ruleForm.templateName"
          placeholder="请输入模板名称"
          clearable
          :inline-message="true"
          :status-icon="true"
          size="small"
        />
      </el-form-item>
      <el-form-item label="数据导入:" prop="dataImport">
        <el-select
          v-model="ruleForm.dataImport"
          clearable
          placeholder="请选择要导入的数据"
          size="small"
          :disabled="!ruleForm.checked"
        >
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </el-form-item>
      <el-form-item class="my-checkbox">
        <el-checkbox
          v-model="ruleForm.checked"
          @change="handleCheckboxChange"
        >从已有自检选择数据</el-checkbox>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'SearchForm',
  data() {
    return {
      ruleForm: {
        templateName: '',
        dataImport: '',
        checked: false
      },

      /* 3点统一，el-form-item的prop，ruleForm的属性，rules的属性*/
      rules: {
        templateName: [
          { required: true, message: '请输入模板名称', trigger: 'blur' }
          // { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ]
      },
      options: [
        {
          value: '选项1',
          label: '手机运维'
        },
        {
          value: '选项2',
          label: '网络支付'
        }
      ]
    }
  },
  methods: {
    // 初始化数据
    initData() {
      this.ruleFrom = []
    },
    submitForm() {
      let result = false
      this.$refs['ruleForm'].validate(valid => {
        if (valid) {
          result = true
          return true
        } else {
          console.log('error submit!!')
          return false
        }
      })
      /* 表单先验证 */
      if (!result) return

      let selected = true
      /* 选择数据后验证 */
      if (this.ruleForm.checked && this.ruleForm.dataImport === '') {
        this.$confirm('您已勾选"从已有自检中选择数据"，但未选择任何一项数据。是否继续提交本次操作。', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        })
          .then(() => {
            this.ruleForm.checked = false
          })
          .catch(() => {
            this.ruleForm.checked = true
          })

        /* 未选中任何一项 */
        selected = false
      }

      if (result && selected) {
        this.ruleForm = {
          options: this.options,
          ...this.ruleForm
        }
        this.$emit('createTemplate', this.ruleForm)
      }
    },
    resetForm() {
      this.$refs['ruleForm'].resetFields()
    },
    handleCheckboxChange() {
      this.ruleForm.dataImport = ''
      console.log(this.ruleForm.checked)
    }
  }
}
</script>

<style lang="scss" scoped>
.el-form-item {
  width: 100%;
  display: block;
  margin-bottom: 20px;
  // width: 33.33%;
  // display: inline-block;
  // margin-bottom: 0;

  &.my-checkbox {
    height: 0px;
    margin-top: -30px;
  }
}
.el-select {
  width: 100%;
}

.el-input {
  width: 100%;
}
</style>
