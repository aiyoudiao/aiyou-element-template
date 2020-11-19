/**
 * @author: winyuan
 * @data: 2019/07/05
 * @repository: https://github.com/winyuan
 * @description: 图的布局方式/图的初始化
 */

import theme from '../theme'
import G6 from '@antv/g6'
const edgeBundling = new G6.Bundling({
  bundleThreshold: 0.1
})

const grid = new G6.Grid()

console.log('edgeBundling', edgeBundling)

/**
 * 图的布局方式/图的初始化
 * @type {{commonGraph: (function(*, *): G6.Graph)}}
 */
const initGraph = {
  /**
   * 一般布局
   * @param G6
   * @param options
   * @returns {G6.Graph}
   */
  commonGraph: function(G6, options) {
    const graphData = options.graphData
    const themeStyle = theme.defaultStyle // todo...先使用默认主题，后期可能增加其它风格的主体
    console.log('options:', options)
    options.plugins.push(edgeBundling)
    options.plugins.push(grid)
    // 生成G6实例
    const graph = new G6.Graph({
      plugins: options.plugins,
      container: options.container,
      width: 4000, // options.width,
      height: 4000, // options.height,
      /* 这个值如果是true，combo那里就会出问题 */
      // groupByTypes: options.graphMode === 'edit', // TODO...G6 节点与边的层级(临时方案)
      groupByTypes: false, // TODO...G6 节点与边的层级(临时方案)
      // defaultNode: {
      //   type: 'cc-rect',
      //   labelCfg: themeStyle.nodeLabelCfg
      // },
      // defaultEdge: {
      //   type: 'cc-line',
      //   labelCfg: themeStyle.edgeLabelCfg
      // },
      // defaultCombo: {
      //   type: 'circle',
      //   style: themeStyle.comboStyle.default,
      //   labelCfg: themeStyle.comboLabelCfg
      // },
      // nodeStateStyles: themeStyle.nodeStyle,
      // edgeStateStyles: themeStyle.edgeStyle,
      // comboStateStyles: themeStyle.comboStyle,
      modes: options.modes,

      defaultCombo: {
        type: 'circle',
        style: {
          lineWidth: 1
        },
        labelCfg: {
          refY: 15,
          position: 'bottom'
        }
      },
      comboStateStyles: {
        dragenter: {
          lineWidth: 4,
          stroke: '#FE9797'
        }
      },
      animate: true,
      // renderer: 'svg',
      layout: {
        type: 'grid',
        begin: [0, 0], // 可选，
        preventOverlap: true, // 可选，必须配合 nodeSize
        preventOverlapPdding: 20, // 可选
        nodeSize: 30, // 可选
        condense: false, // 可选
        rows: 5, // 可选
        cols: 5, // 可选
        sortBy: 'degree', // 可选
        workerEnabled: true // 可选，开启 web-worker
      }
      // layout: {
      //   // type: 'force',
      //   // linkDistance: 200, /* 节点之间的距离 */
      //   // preventOverlap: true, /* 节点之间不层叠 */
      //   // nodeStrength: -30, /* 节点之间的吸引力强度，负数表示排斥力强度 */
      //   // edgeStrength: 0.05, /* 边之间的吸引力强度，负数表示排斥力强度 */
      //   // nodeSize: 50
      //   type: 'force',
      //   center: [200, 200], // 可选，默认为图的中心
      //   preventOverlap: true,
      //   linkDistance: 50, // 可选，边长
      //   nodeStrength: 30, // 可选
      //   edgeStrength: 0.1 // 可选
      // },
      // layout: {
      //   type: 'comboForce',
      //   nodeSpacing: (d) => 8
      // }
    })
    // debugger
    // 将 read 方法分解成 data() 和 render 方法，便于整个生命周期的管理

    graph.read(graphData)
    graph.render()
    graphData.combos.forEach(combo => {
      console.log('combo', combo)
      graph.collapseCombo(combo.id)
    })

    graph.on('combo:dragend', (e) => {
      graph.getCombos().forEach((combo) => {
        graph.setItemState(combo, 'dragenter', false)
      })
    })
    graph.on('node:dragend', (e) => {
      graph.getCombos().forEach((combo) => {
        graph.setItemState(combo, 'dragenter', false)
      })
    })
    graph.on('combo:dragenter', (e) => {
      graph.setItemState(e.item, 'dragenter', true)
    })
    graph.on('combo:dragleave', (e) => {
      graph.setItemState(e.item, 'dragenter', false)
    })

    graph.on('combo:mouseenter', (evt) => {
      const { item } = evt
      graph.setItemState(item, 'active', true)
    })

    graph.on('combo:mouseleave', (evt) => {
      const { item } = evt
      graph.setItemState(item, 'active', false)
    })

    // 返回G6实例
    return graph
  }
}

export default initGraph
