import { cloneDeep, keyBy, some } from 'lodash'
// 树里面获取父级节点的方法
export const getPath = (node) => {
  return node.parent ? [...getPath(node.parent), node] : [node]
}
const getPathId = (node, key) => getPath(node).map(item => item[key])
const getParents = (node) => {
  const path = getPath(node)
  return path.splice(-1, path.length - 1)
}
const getParentsId = (node, key) => getPathId(node, key).splice(-1, 1)

const endowNode = (node, parent, key) => {
  node.parent = parent
  node.getPath = () => getPath(node)
  node.getPathId = () => getPathId(node, key)
  node.getParents = () => getParents(node)
  node.getParentsId = () => getParentsId(node, key)
}

// 树的格式化
export function treeFormat (list, key = 'id', parentKey = 'parentId', childKey = 'children', hasPath = true) {
  let nodes = cloneDeep(list)
  let r = []
  const tmpNodes = keyBy(nodes, key)
  nodes.forEach((node) => {
    const parent = tmpNodes[node[parentKey]]
    const tmpNode = tmpNodes[node[key]]
    if (parent && node[key] !== node[parentKey]) {
      if (!parent[childKey]) parent[childKey] = []
      if (!some(parent[childKey], { [key]: node[key] })) {
        parent[childKey].push(node)
      }
      // 为每个节点赋能
      if (hasPath) endowNode(tmpNode, parent, key)
    } else {
      r.push(node)
    }
  })
  return r
}

export function treeFlat (nodes, childKey = 'children') {
  return nodes.reduce((result, node) => {
    return node[childKey] && node[childKey].length ? [...result, ...treeFlat(node[childKey], childKey)] : result
  }, nodes)
}

// 初始化tree数据，为每个节点赋能后重新将数据扁平化
export function treeInit (nodes, key = 'id', parentKey = 'parentId', childKey = 'children', hasPath = true) {
  return treeFlat(treeFormat(nodes, key, parentKey, childKey, hasPath), childKey)
}

export function treeChildren (tree, value, parentKey = 'parentId') {
  const children = tree.filter(item => item[parentKey] === value).map(({ value }) => value)
  if (children.length) {
    return children.reduce((result, child) => {
      return [...result, ...treeChildren(tree, child, parentKey)]
    }, [value])
  }
  // console.log([value])
  return [value]
}

export function treeFirstLeaf (tree) {
  if (tree[0].children) {
    return treeFirstLeaf(tree[0].children)
  }
  return tree[0]
}
