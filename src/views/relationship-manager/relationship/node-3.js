export default {
  /* SSL-服务器-TCP服务 */
  SslVsTcpService: {
    id: 'xx',
    // x: -95,
    // y: -50,
    label: 'SSL-TCP服务',
    labelCfg: {
      position: 'bottom'
    },
    type: 'cc-image',
    img: require('@/assets/new-images/SSL-TCP服务.png'),
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
  /* SSL-设备 */
  SslDevice: {
    id: 'xx',
    // x: -95,
    // y: -50,
    label: 'SSL-设备',
    labelCfg: {
      position: 'bottom'
    },
    type: 'cc-image',
    img: require('@/assets/new-images/SSL-设备.png'),
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
  /* Waf-服务器-TCP服务 */
  WafVsTcpService: {
    id: 'xx',
    // x: -95,
    // y: -50,
    label: 'Waf-TCP服务',
    labelCfg: {
      position: 'bottom'
    },
    type: 'cc-image',
    img: require('@/assets/new-images/Waf-TCP服务.png'),
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
  /* WAF-设备 */
  WafDevice: {
    id: 'xx',
    // x: -95,
    // y: -50,
    label: 'WAF-设备',
    labelCfg: {
      position: 'bottom'
    },
    type: 'cc-image',
    img: require('@/assets/new-images/WAF-设备.png'),
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
  /* 防火墙-服务器-TCP服务 */
  FirewallNatTcpService: {
    id: 'xx',
    // x: -95,
    // y: -50,
    label: '防火墙-TCP服务',
    labelCfg: {
      position: 'bottom'
    },
    type: 'cc-image',
    img: require('@/assets/new-images/防火墙-TCP服务.png'),
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
  /* 防火墙-设备 */
  FirewallDevice: {
    id: 'xx',
    // x: -95,
    // y: -50,
    label: '防火墙-设备',
    labelCfg: {
      position: 'bottom'
    },
    type: 'cc-image',
    img: require('@/assets/new-images/防火墙-设备.png'),
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
  /* 负载均衡-服务器-TCP服务 */
  LbVsTcpService: {
    id: 'xx',
    // x: -95,
    // y: -50,
    label: '负载均衡-TCP服务',
    labelCfg: {
      position: 'bottom'
    },
    type: 'cc-image',
    img: require('@/assets/new-images/负载均衡-TCP服务.png'),
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
  /* 负载均衡-设备 */
  LbDevice: {
    id: 'xx',
    // x: -95,
    // y: -50,
    label: '负载均衡-设备',
    labelCfg: {
      position: 'bottom'
    },
    type: 'cc-image',
    img: require('@/assets/new-images/负载均衡-设备.png'),
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
  /* 逻辑服务器-TCP服务 */
  LogicalServerTcpService: {
    id: 'xx',
    // x: -95,
    // y: -50,
    label: '逻辑服务器-TCP服务',
    labelCfg: {
      position: 'bottom'
    },
    type: 'cc-image',
    img: require('@/assets/new-images/逻辑服务器-TCP服务.png'),
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
  /* 逻辑服务器-设备 */
  LogicalServer: {
    id: 'xx',
    // x: -95,
    // y: -50,
    label: '逻辑服务器-设备',
    labelCfg: {
      position: 'bottom'
    },
    type: 'cc-image',
    img: require('@/assets/new-images/逻辑服务器-设备.png'),
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
  /* 应用系统 */
  ApplicationSystem: {
    id: 'xx',
    // x: -95,
    // y: -50,
    label: '应用系统',
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
  /* 域名 */
  DomainName: {
    id: 'xx',
    // x: -95,
    // y: -50,
    label: '域名',
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
