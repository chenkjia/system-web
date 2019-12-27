import { uniqBy } from 'lodash'
import { get } from '@/utils/axios'
import { treeFormat } from '@/utils/tree'
import { getFilterResult, getSortResult } from './common'

// 通过树获取页面显示数据
export const getTreeList = ({
  resource,
  serverMode,
  sortData,
  filterData,
  filterFieldsObject,
  treeParentKey,
  parentId
}) => {
  return new Promise((resolve, reject) => {
    get({
      url: resource,
      params: {
        serverMode,
        sort: sortData,
        filter: {
          ...filterData,
          [treeParentKey]: parentId
        },
        fields: filterFieldsObject
      }
    }).then((res) => {
      resolve({
        tableData: res.data.data
      })
    })
  })
}

// 通过寻找父级把树展示出来
const getTreeResult = ({
  waitTreeData,
  treeKey
}) => {
  return uniqBy(waitTreeData.reduce((result, item) => {
    const parents = item.getPath ? item.getPath() : [item]
    if (item.id === 111) {
      console.log(parents)
    }
    return [...result, ...parents]
  }, []), treeKey)
}
// 通过树计算页面显示数据
export const getTreeRender = (props) => {
  const waitTreeData = getFilterResult({ waitFilterData: props.tableAllData, ...props })
  const waitSortData = getTreeResult({ waitTreeData, ...props })
  const tableData = getSortResult({ waitSortData, ...props })
  const result = treeFormat(tableData, props.treeKey, props.treeParentKey, props.treeChildKey)
  return {
    tableData: result
  }
}
