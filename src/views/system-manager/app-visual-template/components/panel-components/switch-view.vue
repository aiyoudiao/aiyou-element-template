<template>
  <div class="switch-view">
    <div class="catelog">
      <el-cascader-panel :options="options" />
    </div>
    <div class="select-item">
      <el-transfer v-model="value" :data="data" :titles="titles" />
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  components: {},
  props: {},
  data() {
    const generateData = _ => {
      const data = []
      for (let i = 1; i <= 15; i++) {
        data.push({
          key: i,
          label: `备选项 ${i}`,
          disabled: i % 4 === 0
        })
      }
      return data
    }

    return {
      titles: ['可选择设备', '已选择设备'],
      data: generateData(),
      value: [1, 4],
      options: [
        {
          value: 'outer-firewall',
          label: '外层防火墙'
        },
        {
          value: 'first-loadbalance',
          label: '第一层负载均衡'
        },
        {
          value: 'ssl',
          label: 'SSL加解密'
        },
        {
          value: 'second-loadbalance',
          label: '第二层负载均衡'
        },
        {
          value: 'proxy-server',
          label: '代理服务器'
        },
        {
          value: 'inner-firewall',
          label: '内层防火墙'
        },
        {
          value: 'lan-loadbalance',
          label: '局域网负载均衡'
        }
      ]
    }
  },
  computed: {},
  watch: {},
  created() {},
  beforeCreate() {},
  mounted() {},
  methods: {}
}
</script>

<style lang="scss" scoped>
.switch-view {
  display: flex;
  flex-direction: row;
  .catelog {
    flex: 2;
    padding-right: 20px;
    padding-left: 9px;
    ::v-deep .el-cascader-panel.is-bordered {
      height: 100%;
    }

    ::v-deep .el-cascader-menu:last-child {
      width: 100%;
      height: 100%;

    }

    ::v-deep .el-cascader-menu__wrap.el-scrollbar__wrap {
      margin-bottom: 0;
      margin-right: 0;
      height: 100%;
      overflow-x: hidden;
    }
  }
  .select-item {
    flex: 7;
  }
}
</style>
