<template>
  <div class="menu-wrapper">
    <custom-sidebar :menu-list="menuList" :open-menu-list="openMenuList" :active-menu-name="activeMenuName" @handleMenuItemClick="handleMenuItemClick" />
  </div>
</template>

<script>
import CustomSidebar from './custom-sidebar'
export default {
  components: {
    CustomSidebar
  },
  props: {
    openMenuList: {
      type: [Array],
      default: () => []
    },
    activeMenuName: {
      type: [String],
      default: () => ''
    },
    menuList: {
      type: [Array],
      default: () => []
    }
  },
  methods: {
    handleMenuItemClick(data) {
      this.$emit('handleMenuItemClick', data)
    }
  }
}
</script>

<style lang="scss">
.menu-wrapper {
  width: 210px;
  overflow-x: hidden;
  .el-scrollbar {
    height: calc(100vh - 50px)!important;
    .scrollbar-wrapper {
        overflow-x: hidden;
    }
  }

}

</style>
