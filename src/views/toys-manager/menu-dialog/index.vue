<template>
  <div class="wrapper">
    <common-dialog>
      <drop-down-list />
    </common-dialog>
  </div>
</template>

<script>
import {
  TOYS_MANAGER_MENU_DIALOG
} from '@/constant/toys-manager'
import DropDownList from './menu-dialog-views/drop-down-list.vue'
import CommonDialog from './menu-dialog-views/common-dialog.vue'

export default {
  name: TOYS_MANAGER_MENU_DIALOG,
  components: {
    DropDownList,
    CommonDialog
  },
  mounted() {
    console.log('hello')
    console.log('DropDownList', DropDownList)
    debugger
  }
}
</script>
<style lang="scss" scoped>
.wrapper {
  width: 800px;
  height: 300px;
  margin: 20px auto;
  // background-color: #f00;
}
</style>
