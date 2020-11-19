export default {
  /* SSL-服务器-TCP服务 */
  SslVsTcpService: {
    id: 'xx',
    style: {
      fill: '#ebebad'
      // stroke: '#000',
      // lineWidth: 2
    },
    // x: 200,
    // y: 200,
    label: 'SSL-TCP服务',
    labelCfg: {
      position: 'bottom'
    },
    // fill: '',
    type: 'circle',

    size: [20, 20],
    width: 20,
    height: 20
    // anchorPoints: [
    //   [0.5, 0], // top
    //   [1, 0.5], // right
    //   [0.5, 1], // bottom
    //   [0, 0.5] // left
    // ],
    // appState: {
    //   alert: false
    // },
    // appConfig: {
    //   ip: '',
    //   port: '',
    //   sysName: ''
    // }
  },
  /* SSL-设备 */
  SslDevice: {
    id: 'xx',
    style: {
      fill: '#ebebad'
      // stroke: '#000',
      // lineWidth: 2
    },
    // x: 200,
    // y: 200,
    label: 'SSL-设备',
    labelCfg: {
      position: 'bottom'
    },
    type: 'triangle',
    size: [20, 20],
    width: 20,
    height: 20
    // anchorPoints: [
    //   [0.5, 0], // top
    //   [1, 0.5], // right
    //   [0.5, 1], // bottom
    //   [0, 0.5] // left
    // ],
    // appState: {
    //   alert: false
    // },
    // appConfig: {
    //   ip: '',
    //   port: '',
    //   sysName: ''
    // }
  },
  /* Waf-服务器-TCP服务 */
  WafVsTcpService: {
    id: 'xx',
    style: {
      fill: '#a3ebc7'
      // stroke: '#000',
      // lineWidth: 2
    },
    // x: 200,
    // y: 200,
    label: 'Waf-TCP服务',
    labelCfg: {
      position: 'bottom'
    },
    type: 'circle',
    size: [20, 20],
    width: 20,
    height: 20
    // anchorPoints: [
    //   [0.5, 0], // top
    //   [1, 0.5], // right
    //   [0.5, 1], // bottom
    //   [0, 0.5] // left
    // ],
    // appState: {
    //   alert: false
    // },
    // appConfig: {
    //   ip: '',
    //   port: '',
    //   sysName: ''
    // }
  },
  /* WAF-设备 */
  WafDevice: {
    id: 'xx',
    style: {
      fill: '#a3ebc7'
      // stroke: '#000',
      // lineWidth: 2
    },
    // x: 200,
    // y: 200,
    label: 'WAF-设备',
    labelCfg: {
      position: 'bottom'
    },
    type: 'triangle',
    size: [20, 20],
    width: 20,
    height: 20
    // anchorPoints: [
    //   [0.5, 0], // top
    //   [1, 0.5], // right
    //   [0.5, 1], // bottom
    //   [0, 0.5] // left
    // ],
    // appState: {
    //   alert: false
    // },
    // appConfig: {
    //   ip: '',
    //   port: '',
    //   sysName: ''
    // }
  },
  /* 防火墙-服务器-TCP服务 */
  FirewallNatTcpService: {
    id: 'xx',
    style: {
      fill: '#ebbaad'
      // stroke: '#000',
      // lineWidth: 2
    },
    // x: 200,
    // y: 200,
    label: '防火墙-TCP服务',
    labelCfg: {
      position: 'bottom'
    },
    type: 'circle',
    size: [20, 20],
    width: 20,
    height: 20
    // anchorPoints: [
    //   [0.5, 0], // top
    //   [1, 0.5], // right
    //   [0.5, 1], // bottom
    //   [0, 0.5] // left
    // ],
    // appState: {
    //   alert: false
    // },
    // appConfig: {
    //   ip: '',
    //   port: '',
    //   sysName: ''
    // }
  },
  /* 防火墙-设备 */
  FirewallDevice: {
    id: 'xx',
    style: {
      fill: '#ebbaad'
      // stroke: '#000',
      // lineWidth: 2
    },
    // x: 200,
    // y: 200,
    label: '防火墙-设备',
    labelCfg: {
      position: 'bottom'
    },
    type: 'triangle',

    size: [20, 20],
    width: 20,
    height: 20
    // anchorPoints: [
    //   [0.5, 0], // top
    //   [1, 0.5], // right
    //   [0.5, 1], // bottom
    //   [0, 0.5] // left
    // ],
    // appState: {
    //   alert: false
    // },
    // appConfig: {
    //   ip: '',
    //   port: '',
    //   sysName: ''
    // }
  },
  /* 负载均衡-服务器-TCP服务 */
  LbVsTcpService: {
    id: 'xx',
    style: {
      fill: '#adddeb'
      // stroke: '#000',
      // lineWidth: 2
    },
    // x: 200,
    // y: 200,
    label: '负载均衡-TCP服务',
    labelCfg: {
      position: 'bottom'
    },
    type: 'circle',

    size: [20, 20],
    width: 20,
    height: 20
    // anchorPoints: [
    //   [0.5, 0], // top
    //   [1, 0.5], // right
    //   [0.5, 1], // bottom
    //   [0, 0.5] // left
    // ],
    // appState: {
    //   alert: false
    // },
    // appConfig: {
    //   ip: '',
    //   port: '',
    //   sysName: ''
    // }
  },
  /* 负载均衡-设备 */
  LbDevice: {
    id: 'xx',
    style: {
      fill: '#adddeb'
      // stroke: '#000',
      // lineWidth: 2
    },
    // x: 200,
    // y: 200,
    label: '负载均衡-设备',
    labelCfg: {
      position: 'bottom'
    },
    type: 'triangle',

    size: [20, 20],
    width: 20,
    height: 20
    // anchorPoints: [
    //   [0.5, 0], // top
    //   [1, 0.5], // right
    //   [0.5, 1], // bottom
    //   [0, 0.5] // left
    // ],
    // appState: {
    //   alert: false
    // },
    // appConfig: {
    //   ip: '',
    //   port: '',
    //   sysName: ''
    // }
  },
  /* 逻辑服务器-TCP服务 */
  LogicalServerTcpService: {
    id: 'xx',
    style: {
      fill: '#698b8f'
      // stroke: '#000',
      // lineWidth: 2
    },
    // x: 200,
    // y: 200,
    label: '逻辑服务器-TCP服务',
    labelCfg: {
      position: 'bottom'
    },
    type: 'circle',

    size: [20, 20],
    width: 20,
    height: 20
    // anchorPoints: [
    //   [0.5, 0], // top
    //   [1, 0.5], // right
    //   [0.5, 1], // bottom
    //   [0, 0.5] // left
    // ],
    // appState: {
    //   alert: false
    // },
    // appConfig: {
    //   ip: '',
    //   port: '',
    //   sysName: ''
    // }
  },
  /* 逻辑服务器-设备 */
  LogicalServer: {
    id: 'xx',
    style: {
      fill: '#698b8f'
      // stroke: '#000',
      // lineWidth: 2
    },
    // x: 200,
    // y: 200,
    label: '逻辑服务器-设备',
    labelCfg: {
      position: 'bottom'
    },
    type: 'triangle',

    size: [20, 20],
    width: 20,
    height: 20
    // anchorPoints: [
    //   [0.5, 0], // top
    //   [1, 0.5], // right
    //   [0.5, 1], // bottom
    //   [0, 0.5] // left
    // ],
    // appState: {
    //   alert: false
    // },
    // appConfig: {
    //   ip: '',
    //   port: '',
    //   sysName: ''
    // }
  },
  /* 应用系统 */
  ApplicationSystem: {
    id: 'xx',
    style: {
      fill: '#eb3e55'
      // stroke: '#000',
      // lineWidth: 2
    },
    // x: 200,
    // y: 200,
    label: '应用系统',
    labelCfg: {
      position: 'bottom'
    },
    type: 'circle',

    size: [20, 20],
    width: 20,
    height: 20
    // anchorPoints: [
    //   [0.5, 0], // top
    //   [1, 0.5], // right
    //   [0.5, 1], // bottom
    //   [0, 0.5] // left
    // ],
    // appState: {
    //   alert: false
    // },
    // appConfig: {
    //   ip: '',
    //   port: '',
    //   sysName: ''
    // }
  },
  /* 域名 */
  DomainName: {
    id: 'xx',
    style: {
      fill: '#e76a23'
      // stroke: '#000',
      // lineWidth: 2
    },
    // x: 200,
    // y: 200,
    label: '域名',
    labelCfg: {
      position: 'bottom'
    },
    type: 'circle',

    size: [20, 20],
    width: 20,
    height: 20
    // anchorPoints: [
    //   [0.5, 0], // top
    //   [1, 0.5], // right
    //   [0.5, 1], // bottom
    //   [0, 0.5] // left
    // ],
    // appState: {
    //   alert: false
    // },
    // appConfig: {
    //   ip: '',
    //   port: '',
    //   sysName: ''
    // }
  }

}
