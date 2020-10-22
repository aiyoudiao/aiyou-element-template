<template>
  <div class="drop-down-list">
    <el-cascader-panel :options="options" />
  </div>
</template>
<script>
export default {
  name: 'DropDownList',
  data() {
    return {
      options: [{
        value: 'zhinan',
        label: '字体',
        children: [{
          value: 'shejiyuanze',
          label: '字体名称',
          children: [{
            value: 'yizhi',
            label: '微软雅黑'
          },
          {
            value: 'yizhi',
            label: '宋体'
          }
          ]
        }, {
          value: 'daohang',
          label: '文本风格',
          children: [{
            value: 'cexiangdaohang',
            label: '粗体'
          },
          {
            value: 'dingbudaohang',
            label: '斜体'
          },
          {
            value: 'dingbudaohang2',
            label: '下滑体'
          }
          ]
        }]
      }]
    }
  }
}
</script>

<style lang="scss">
.drop-down-list {
  width: 60%;
  margin: 10px auto;
    box-shadow: 0.3rem 0.3rem 0.5rem rgb(237, 23, 31)!important;
  .el-cascader-node.in-active-path, .el-cascader-node.is-active, .el-cascader-node.is-selectable.in-checked-path {
    color: rgb(237, 23, 31)!important;
    box-shadow: 0.3rem 0.3rem 0.5rem rgb(237, 23, 31)!important;
  }

  .el-cascader-menu__list {

  }
}
</style>
