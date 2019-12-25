import { uniqBy } from 'lodash'
import { treeFormat } from '@/utils/tree'
import { getFilterResult, getSortResult } from './common'

// 通过树获取页面显示数据
export const getTreeList = (props) => {
  return {
    tableData: treeFormat(props.tableAllData)
  }
}
// 通过寻找父级把树展示出来
const getTreeResult = ({
  waitTreeData
}) => {
  return uniqBy(waitTreeData.reduce((result, item) => {
    const parents = item.getPath ? item.getPath() : [item]
    if (item.id === 111) {
      console.log(parents)
    }
    return [...result, ...parents]
  }, []), 'id')
}
// 通过树计算页面显示数据
export const getTreeRender = (props) => {
  const waitTreeData = getFilterResult({ waitFilterData: props.tableAllData, ...props })
  const waitSortData = getTreeResult({ waitTreeData, ...props })
  const tableData = getSortResult({ waitSortData, ...props })
  // const tableData = treeFormat(sortResult)
  return {
    tableData: treeFormat(tableData)
  }
}
