export default {
  /* SSL 服务器节点 */
  SslVsTcpService: {
    id: 'xx',
    // x: -95,
    // y: -50,
    label: 'SLL 服务器节点',
    labelCfg: {
      position: 'bottom'
    },
    type: 'cc-image',
    img: require('@/assets/new-images/SSL.png'),
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
  /* Waf 服务器节点 */
  WafVsTcpService: {
    id: 'xx',
    // x: -95,
    // y: -50,
    label: 'Waf 服务器节点',
    labelCfg: {
      position: 'bottom'
    },
    type: 'cc-image',
    img: require('@/assets/new-images/WAF.png'),
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
  /* Nat 服务器节点 */
  NatTcpService: {
    id: 'xx',
    // x: -95,
    // y: -50,
    label: 'Nat 服务器节点',
    labelCfg: {
      position: 'bottom'
    },
    type: 'cc-image',
    img: require('@/assets/new-images/防火墙.png'),
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
  /* LB 服务器节点 */
  LbVsTcpService: {
    id: 'xx',
    // x: -95,
    // y: -50,
    label: 'LB 服务器节点',
    labelCfg: {
      position: 'bottom'
    },
    type: 'cc-image',
    img: require('@/assets/new-images/负载均衡.png'),
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
  /* 逻辑 服务器节点 */
  LogicalServerTcpService: {
    id: 'xx',
    // x: -95,
    // y: -50,
    label: '逻辑 服务器节点',
    labelCfg: {
      position: 'bottom'
    },
    type: 'cc-image',
    img: require('@/assets/new-images/逻辑服务.png'),
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
  /* 应用系统 节点 */
  ApplicationSystem: {
    id: 'xx',
    // x: -95,
    // y: -50,
    label: '应用系统 节点',
    labelCfg: {
      position: 'bottom'
    },
    type: 'cc-image',
    img: require('@/assets/new-images/应用系统.png'),
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
  /* 域名 节点 */
  DomainName: {
    id: 'xx',
    // x: -95,
    // y: -50,
    label: '域名 节点',
    labelCfg: {
      position: 'bottom'
    },
    type: 'cc-image',
    img: require('@/assets/new-images/域名.png'),
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

}
