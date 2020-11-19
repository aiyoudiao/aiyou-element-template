/**
 * @author: winyuan
 * @data: 2019/07/05
 * @repository: https://github.com/winyuan
 * @description: edit mode: 通过先后点击两个节点来添加连线（容易和节点点击动作交叉，已弃用）
 */

import G6 from '@antv/g6'

export default {
  name: 'dbclick-add-children',
  options: {
    getEvents() {
      return {
        'node:dblclick': 'onNodeDBClick'
      }
    },
    onNodeDBClick(event) {
      debugger
      const graph = this.graph
      const node = event.item
      const point = { x: event.x, y: event.y }
      const model = node.getModel()

      if (model.opend) {
        return
      }

      /**
       * 需求：
       * 1. 双击这个节点，出现这个节点的下一级关系的子节点
       * 2. 判断是否已经存在这个子节点，如果存在就不做任何处理
       * 3. 出现子节点后，将当前节点与子节点进行关联。
       *
       * 思路：
       * 1. 获取当前双击的这个节点数据，根据这个节点的ID找到与之对应的边、以及边对应的节点
       * 2. 找到节点和边之后，全部渲染出来。
       */

      const currenNodeId = model.id
      const { noEdgeData, noNodeData } = window

      const edgeIndexs = []
      const nodeIndexs = []
      let nodeIndex
      noEdgeData.forEach((edge, edgeIndex) => {
        if (edge.source === currenNodeId) {
          const targetNode = noNodeData.find((node, index) => {
            nodeIndex = index
            return node.id === edge.target
          })

          targetNode.opend = false

          if (!targetNode) return
          targetNode.x = event.x + 500 - Math.random() * 500
          targetNode.y = event.y + 500 - Math.random() * 500
          graph.addItem('node', targetNode)
          graph.addItem('edge', edge)
          console.log('edge', edge)
          edgeIndexs.push(edgeIndex)
          nodeIndexs.push(nodeIndex)
        }
      })

      node.opend = true
    }
  }
}
