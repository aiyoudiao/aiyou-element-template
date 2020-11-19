/**
 * @description 有效数据
 */

export default {
  graphData: {
    nodes: [

    ],
    edges: [

    ],
    combos: []
  },
  nodeTypeList: [

    /* SSL-服务器-TCP服务 */
    { guid: 'SslVsTcpService', label: 'SSL-TCP服务', imgSrc: require('@/assets/new-images/SSL-TCP服务.png') },
    /* SSL-设备 */
    { guid: 'SslDevice', label: 'SSL-设备', imgSrc: require('@/assets/new-images/SSL-设备.png') },
    /* Waf-服务器-TCP服务 */
    { guid: 'WafVsTcpService', label: 'Waf-TCP服务', imgSrc: require('@/assets/new-images/Waf-TCP服务.png') },
    /* Waf-设备 */
    { guid: 'WafDevice', label: 'WAF-设备', imgSrc: require('@/assets/new-images/WAF-设备.png') },
    /* 防火墙-服务器-TCP服务 */
    { guid: 'FirewallNatTcpService', label: '防火墙-TCP服务', imgSrc: require('@/assets/new-images/防火墙-TCP服务.png') },
    /* 防火墙-设备 */
    { guid: 'FirewallDevice', label: '防火墙-设备', imgSrc: require('@/assets/new-images/防火墙-设备.png') },
    /* 负载均衡-服务器-TCP服务 */
    { guid: 'LbVsTcpService', label: '负载均衡-TCP服务', imgSrc: require('@/assets/new-images/负载均衡-TCP服务.png') },
    /* 负载均衡-设备 */
    { guid: 'LbDevice', label: '负载均衡-设备', imgSrc: require('@/assets/new-images/负载均衡-设备.png') },
    /* 逻辑服务器-TCP服务 */
    { guid: 'LogicalServerTcpService', label: '逻辑服务器-TCP服务', imgSrc: require('@/assets/new-images/逻辑服务器-TCP服务.png') },
    /* 逻辑服务器-设备 */
    { guid: 'LogicalServer', label: '逻辑服务器-设备', imgSrc: require('@/assets/new-images/逻辑服务器-设备.png') },
    /* 应用系统 */
    { guid: 'ApplicationSystem', label: '应用系统', imgSrc: require('@/assets/new-images/应用系统.png') },
    /* 域名 */
    { guid: 'DomainName', label: '域名', imgSrc: require('@/assets/new-images/域名.png') }
  ],
  // 节点配置
  nodeAppConfig: {
    ip: '节点IP',
    port: '节点端口',
    sysName: '设备名称'
  },
  autoRefresh: {
    enable: false,
    interval: 5
  },
  autoRefreshTimer: null,
  dataUpdateTime: '暂无关联数据',
  graphMode: 'preview'
}
