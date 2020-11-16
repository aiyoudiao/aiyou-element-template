/**
 * @description 有效数据
 */

export default {
  graphData: {
    nodes: [
      {
        id: 'client-01',
        // x: -95,
        // y: -50,
        label: '客户端-01',
        labelCfg: {
          position: 'bottom'
        },
        type: 'cc-image',
        img: require('@/assets/images/client.png'),
        size: [55, 55],
        width: 48,
        height: 48,
        anchorPoints: [
          [0.5, 0], // top
          [1, 0.5], // right
          [0.5, 1], // bottom
          [0, 0.5] // left
        ],
        appState: {
          alert: false
        },
        appConfig: {
          ip: '',
          port: '',
          sysName: ''
        }
      },
      {
        id: 'server-01',
        // x: 14,
        // y: 88,
        label: '服务器',
        labelCfg: {
          position: 'bottom'
        },
        type: 'cc-image',
        img: require('@/assets/images/server.png'),
        size: [55, 55],
        width: 48,
        height: 48,
        anchorPoints: [
          [0.5, 0], // top
          [1, 0.5], // right
          [0.5, 1], // bottom
          [0, 0.5] // left
        ],
        appState: {
          alert: false
        },
        appConfig: {
          ip: '',
          port: '',
          sysName: ''
        }
      },

      {
        id: 'firewall-01',
        // x: -95,
        // y: 205,
        label: '防火墙',
        labelCfg: {
          position: 'bottom'
        },
        type: 'cc-image',
        img: require('@/assets/images/firewall.png'),
        size: [55, 55],
        width: 48,
        height: 48,
        anchorPoints: [
          [0.5, 0], // top
          [1, 0.5], // right
          [0.5, 1], // bottom
          [0, 0.5] // left
        ],
        appState: {
          alert: false
        },
        appConfig: {
          ip: '',
          port: '',
          sysName: ''
        }
      }
    ],
    edges: [
      {
        id: 'edge-01',
        source: 'client-01',
        sourceAnchor: 2,
        target: 'firewall-01',
        type: 'cc-cubic',
        style: {
          stroke: '#A3B1BF',
          lineWidth: 2,
          strokeOpacity: 0.92,
          lineAppendWidth: 10,
          startArrow: false,
          endArrow: false
        },
        labelCfg: {
          position: 'center',
          autoRotate: false
        },
        targetAnchor: 0
      },
      {
        id: 'edge-02',
        source: 'firewall-01',
        sourceAnchor: 2,
        target: 'server-01',
        type: 'cc-cubic',
        style: {
          stroke: '#A3B1BF',
          lineWidth: 2,
          strokeOpacity: 0.92,
          lineAppendWidth: 10,
          startArrow: false,
          endArrow: false
        },
        labelCfg: {
          position: 'center',
          autoRotate: false
        },
        targetAnchor: 0
      }
    ]
  },
  nodeTypeList: [
    // { guid: 'blue', label: '服务器',             desc: '客户端', imgSrc: require('@/assets/images/server.png') },
    // { guid: 'green', label: '数据库', imgSrc: require('@/assets/images/database.png') },
    // { guid: 'purple', label: '防火墙', imgSrc: require('@/assets/images/firewall.png') },
    // { guid: 'yellow', label: '客户端', imgSrc: require('@/assets/images/client.png') }

    { guid: 'SslVsTcpService', label: 'SSL', imgSrc: require('@/assets/new-images/SSL.png') },
    { guid: 'SSL-设备', label: 'SSL-设备', imgSrc: require('@/assets/new-images/SSL-设备.png') },
    { guid: 'WafVsTcpService', label: 'WAF', imgSrc: require('@/assets/new-images/WAF.png') },
    { guid: 'WAF-设备', label: 'WAF-设备', imgSrc: require('@/assets/new-images/WAF-设备.png') },
    { guid: 'NatTcpService', label: '防火墙', imgSrc: require('@/assets/new-images/防火墙.png') },
    { guid: '防火墙-设备', label: '防火墙-设备', imgSrc: require('@/assets/new-images/防火墙-设备.png') },
    { guid: 'LbVsTcpService', label: '负载均衡', imgSrc: require('@/assets/new-images/负载均衡.png') },
    { guid: '负载均衡-设备', label: '负载均衡-设备', imgSrc: require('@/assets/new-images/负载均衡-设备.png') },
    { guid: 'LogicalServerTcpService', label: '逻辑服务器', imgSrc: require('@/assets/new-images/逻辑服务.png') },
    { guid: '逻辑服务-设备', label: '逻辑服务-设备', imgSrc: require('@/assets/new-images/逻辑服务-设备.png') },
    { guid: 'ApplicationSystem', label: '应用系统', imgSrc: require('@/assets/new-images/应用系统.png') },
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
