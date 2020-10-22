<template>
  <el-dialog title="通用对话框" :visible.sync="isShow">
    <slot />
  </el-dialog>
</template>
<script>
export default {
  name: 'DropDownList',
  data() {
    return {
      isShow: true
    }
  }
}
</script>

<style lang="scss">
</style>
