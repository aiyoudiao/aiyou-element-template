/**
 * @description 将脏数据中提取的有效数据，混入到正常的数据中，从而获取最终的结果数据
 */

/* 引入脏数据 */
import dirtyData from './dirtyData2'
/* 引入正常数据 */
import goodData from './data2'
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

/* filter20201010DirtyData的优化版本 */
export function filter20201113DirtyDataButRefactor() {
  const goodNode = JSON.parse(JSON.stringify(node))
  const goodEdge = JSON.parse(JSON.stringify(edge))
  const goodDataPrototype = JSON.parse(JSON.stringify(goodData))

  const dirtyNodes = dirtyData.cis
  const dirtyEdges = dirtyData.relationships

  /* 第一步 */
  /**
   * 1. 取出每个节点的classId，截取DC:，取出后面的部分作为节点类型。
   * 2. 取出每个节点的instanceId，作为node的id
   * 3. 从goodNode中获取节点，添加到goodDataPrototype中的graphData的nodes中去
   */
  dirtyNodes.forEach(item => {
    const { classId, instanceId } = item
    const type = classId.split('DC:')[1]
    const node = JSON.parse(JSON.stringify(goodNode[type]))
    node.id = instanceId

    goodDataPrototype.graphData.nodes.push(node)
  })

  /* 第二步 */
  /**
   * 1. 取出每条边的destinationInstanceId和sourceInstanceId，作为edge中的target和source
   * 2. 从goodEdge中获取节点，添加到goodDataPrototype中的graphData的edges中去
   */
  dirtyEdges.forEach(item => {
    const { destinationInstanceId, sourceInstanceId, id } = item
    const edge = JSON.parse(JSON.stringify(goodEdge))
    edge.target = destinationInstanceId
    edge.source = sourceInstanceId
    edge.id = id

    goodDataPrototype.graphData.edges.push(edge)
  })

  return goodDataPrototype
}

export default function getData() {
  return filter20201113DirtyDataButRefactor()
}
