/**
 * @description 将脏数据中提取的有效数据，混入到正常的数据中，从而获取最终的结果数据
 */

/* 引入脏数据 */
import dirtyData from './dirtyData3'
// import dirtyData from './graph-1605669002674.json'
/* 引入正常数据 */
import goodData from './data3'
/* 引入节点 */
import node from './node.js'
/* 引入边 */
import edge from './edge.js'

/* 过滤脏数据为合适数据结构 */

/**
 * 过滤规则
 * 1. 取出classId，根据不同的classId进行label取值
 *    * 20201010
 *      + classId为 `DC:ApplicationSystem`时 取 `chineseShortName`
 *      + classId为 `DC:LogicalServer`时 取 `hostName`
 *      + classId为 `DC:NetworkCard`时 取 `hostName`
 * 2. 节点的属性映射：instanceId -> id
 * 3. 边的属性映射：destinationInstanceId -> target，sourceInstanceId  -> source
 */

/**
 * 过滤规则 20201113
 * 1. 取出classId, 去掉 `NatTcpService`，取出后面的内容作为节点类型，
 * 2. 节点的属性映射：instanceId -> id
 * 3. 边的属性映射：destinationInstanceId -> target，sourceInstanceId  -> source
 */

/* filter20201017DirtyData的优化版本 */
export function filter20201117DirtyDataButRefactor() {
  const goodNode = JSON.parse(JSON.stringify(node))
  const goodEdge = JSON.parse(JSON.stringify(edge))
  const goodDataPrototype = JSON.parse(JSON.stringify(goodData))

  /* 未添加的节点 */
  const noNodeData = []
  const noEdgeData = []

  const dirtyNodes = dirtyData.cis
  const dirtyEdges = dirtyData.relationships

  /* 第一步 */
  /**
   * 1. 取出每个节点的classId，截取DC:，取出后面的部分作为节点类型。
   * 2. 取出每个节点的instanceId，作为node的id
   * 3. 从goodNode中获取节点，添加到goodDataPrototype中的graphData的nodes中去
   */
  const nodeContainer = [
    'SslVsTcpService',
    'SslDevice',
    'WafVsTcpService',
    'WafDevice',
    'FirewallNatTcpService',
    'FirewallDevice',
    'LbVsTcpService',
    'LbDevice',
    'LogicalServerTcpService',
    'LogicalServer',
    'ApplicationSystem',
    'DomainName'

  ]
  const comboContainer = ['']
  let existsNodeIds = []
  dirtyNodes.forEach(item => {
    const { classId, instanceId, applicationCategory, serviceCategory, applicationNodeCategory } = item
    const type = classId.split('DC:')[1]
    const node = JSON.parse(JSON.stringify(goodNode[type]))
    node.id = instanceId
    let comboName = ''

    if (applicationCategory && serviceCategory && applicationNodeCategory) {
      comboName = applicationCategory + serviceCategory + applicationNodeCategory
      node.comboId = comboName
    } else {
      comboName = '未知分组'
      node.comboId = comboName
    }

    // /* 子系统只需要这个 */
    // if (applicationNodeCategory) {
    //   comboName = applicationNodeCategory
    //   node.comboId = comboName
    // }

    /* 是否不存在这个分组，就添加这个分组，id和label都是它 */
    if (!comboContainer.includes(comboName)) {
      goodDataPrototype.graphData.combos.push({
        id: comboName,
        label: comboName,
        size: [50, 80]
      })

      comboContainer.push(comboName)
    }

    if (nodeContainer.includes(type)) {
      existsNodeIds.push(node.id)
      const { domainName, chineseFullName, deviceName } = item
      node.label = domainName || chineseFullName || deviceName || node.label
      goodDataPrototype.graphData.nodes.push(node)
    } else {
      noNodeData.push(node)
    }
  })

  // goodDataPrototype.graphData.nodes = goodDataPrototype.graphData.nodes.slice(0, 100)
  existsNodeIds = existsNodeIds.slice(0, 100)

  // console.log('comboContainer', comboContainer)
  // console.log('existsNodeIds', existsNodeIds)

  /* 第二步 */
  /**
   * 1. 取出每条边的destinationInstanceId和sourceInstanceId，作为edge中的target和source
   * 2. 从goodEdge中获取节点，添加到goodDataPrototype中的graphData的edges中去
   */
  dirtyEdges.forEach(item => {
    const { destinationInstanceId, sourceInstanceId, id } = item
    const edge = JSON.parse(JSON.stringify(goodEdge))
    edge.target = sourceInstanceId
    edge.source = destinationInstanceId
    edge.id = id

    if (existsNodeIds.includes(edge.source) && existsNodeIds.includes(edge.target)) {
      goodDataPrototype.graphData.edges.push(edge)
    } else {
      noEdgeData.push(edge)
    }
  })

  console.log('goodDataPrototype.graphData.edges', goodDataPrototype.graphData.edges.length)
  console.log('goodDataPrototype.graphData.nodes', goodDataPrototype.graphData.nodes.length)
  console.log('goodDataPrototype.graphData.combos', goodDataPrototype.graphData.combos.length)

  window.noEdgeData = noEdgeData
  window.noNodeData = noNodeData
  console.log(goodDataPrototype)
  return goodDataPrototype
}

export default function getData() {
  return filter20201117DirtyDataButRefactor()
  // return filter20201113DirtyDataButRefactor()
}
