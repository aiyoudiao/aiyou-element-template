<template>
  <div class="left-tabbar">
    <!--   类型、设备、端口、专线、应用系统、VS、区域、域名、应用节点 -->
    <el-tabs :tab-position="tabPosition" :value="switchValue">
      <el-tab-pane
        v-for="panel in panels"
        :key="panel.label"
        :label="panel.label"
        :disabled="panel.disabled"
        :name="panel.name"
        :height="panelHeight"
      >
        <slot :name="panel.slot" />
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  name: '',
  components: {},
  props: {},
  data() {
    return {
      switchValue: 'type',
      panelHeight: '200',
      /* "left|right|top|bottom" */
      tabPosition: 'left',
      panels: [
        {
          label: '类型',
          name: 'type',
          slot: 'type',
          disabled: false
        },
        {
          label: '设备',
          name: 'device',
          slot: 'device',
          disabled: false
        },
        {
          label: '端口',
          name: 'port',
          slot: 'port',
          disabled: true
        },
        {
          label: '专线',
          name: 'line',
          slot: 'line',
          disabled: false
        },
        {
          label: '应用系统',
          name: 'app-system',
          slot: 'app-system',
          disabled: true
        },
        {
          label: 'VS',
          name: 'vs',
          slot: 'vs',
          disabled: true
        },
        {
          label: '区域',
          name: 'region',
          slot: 'region',
          disabled: true
        },
        {
          label: '域名',
          name: 'domain',
          slot: 'domain',
          disabled: true
        },
        {
          label: '应用节点',
          name: 'app-node',
          slot: 'app-node',
          disabled: true
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
.left-tabbar {
  padding-left: 10px;
  height: calc(82vh);
  ::v-deep .el-tabs {
    height: 100%;
  }
  ::v-deep .el-tabs__nav {
    height: 100%;
  }
  ::v-deep .el-tabs__item {
    font-size: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 12%;
    text-align: center !important;
  }

  ::v-deep .el-tabs__item.is-active {
    color: #409eff;
  }
  ::v-deep .el-tabs__active-bar {
    height: 12% !important;
  }
  ::v-deep .el-tabs--left,
  .el-tabs--right {
    overflow: inherit;
  }
}
</style>
