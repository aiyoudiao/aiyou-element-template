<template>

  <div class="type-info">
    <el-radio-group v-model="type" size="medium" @change="handleModeChange">
      <el-radio border label="互联网模板" />
      <el-radio border label="外联网模板" />
    </el-radio-group>
  </div>
</template>

<script>
export default {
  data() {
    return {
      type: '互联网模板'
    }
  },
  methods: {
    handleModeChange() {
      console.log('type', this.type)
    }
  }
}
</script>

<style lang="scss" scoped>

.type-info {
  padding: 40px;
}

</style>
