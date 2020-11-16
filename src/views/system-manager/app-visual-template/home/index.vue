<template>
  <div class="home-template-wrapper">
    <nav-view @handleSearchEvent="handleSearchEvent" @handleAddClick="handleAddClick" />

    <content-view
      @handlePageSizeChange="handlePageSizeChange"
      @handlePageNumberChange="handlePageNumberChange"
      @redirectViewPage="redirectViewPage"
      @handleDeleteRowData="handleDeleteRowData"
    />

    <common-dialog
      v-if="isShowDialog"
      v-model="isShowDialog"
      data-app-visual-template="dialog"
      :confirm-func="confirmBtn"
      title="创建模板"
      width="500px"
    >
      <template v-slot:dialog-body>
        <data-form ref="dataForm" @createTemplate="handleTemplateData" />
      </template>
    </common-dialog>
  </div>
</template>

<script>
import NavView from './nav-view.vue'
import ContentView from './content-view.vue'
import CommonDialog from '@/zph-components/common-components/common-dialog'
import DataForm from './data-form.vue'

export default {
  name: 'SystemVisualTemplateHome',
  components: {
    'nav-view': NavView,
    'content-view': ContentView,
    CommonDialog,
    'data-form': DataForm
  },
  data() {
    return {
      searchValue: '',
      selectValue: 'icon',
      pageSize: 50,
      pageNumber: 1,
      isShowDialog: false
    }
  },
  methods: {
    redirectViewPage(pageName) {
      if (pageName === 'edit') this.$emit('handleEditClick')
      if (pageName === 'view') this.$emit('handleViewClick')
    },
    handleDeleteRowData(row) {
      this.$emit('handleDeleteRowData', row)
    },
    handleSearchEvent(value) {
      this.searchValue = value
      this.resetPagination()
    },
    handlePageSizeChange(value) {
      this.pageSize = value
    },
    handlePageNumberChange(value) {
      this.pageNumber = value
    },
    handleAddClick() {
      this.isShowDialog = true
    },
    handleTemplateData(templateData) {
      this.$emit('handleAddClick', templateData)
    },
    resetPagination() {
      this.pageSize = 50
      this.pageNumber = 1
    },
    confirmBtn() {
      this.$refs.dataForm.submitForm()
    }
  }
}
</script>

<style lang="scss">

</style>
