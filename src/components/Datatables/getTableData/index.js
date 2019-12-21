import { getPageList, getPageRender } from './getPageData'
import { getRollList, getRollRender } from './getRollData'
import { getTreeList, getTreeRender } from './getTreeData'
// 所有显示数据获取函数集合
const getTableFuncs = {
  page: {
    true: getPageList,
    false: getPageRender
  },
  roll: {
    true: getRollList,
    false: getRollRender
  },
  tree: {
    true: getTreeList,
    false: getTreeRender
  }
}

const getTableData = (props) => {
  return getTableFuncs[props.mode][props.serverSide](props)
}

export default getTableData
