import { getPageList, getPageRender } from './getPageData'
import { getRollList, getRollRender } from './getRollData'
import { getTreeList, getTreeRender } from './getTreeData'
// 所有显示数据获取函数集合
const getTableFuncs = {
  page: {
    init: getPageList,
    server: getPageList,
    web: getPageRender
  },
  roll: {
    init: getPageList,
    server: getRollList,
    web: getRollRender
  },
  tree: {
    init: getTreeList,
    server: getTreeList,
    web: getTreeRender
  }
}

const getTableData = (props) => {
  // console.log(props)
  return getTableFuncs[props.mode][props.serverMode](props)
}
export default getTableData
