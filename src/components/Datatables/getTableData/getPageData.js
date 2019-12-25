import { get } from '@/utils/axios'
import { slice } from 'lodash'
import { getFilterResult, getSortResult } from './common'
// 通过分页获取页面显示数据
export const getPageList = ({
  resource,
  pageSize,
  pageCurrent,
  sortData,
  filterData,
  filterFieldsObject
}) => {
  return new Promise((resolve, reject) => {
    get({
      url: resource,
      params: {
        limit: pageSize,
        skip: (pageCurrent - 1) * pageSize,
        sort: sortData,
        filter: filterData,
        fields: filterFieldsObject
      }
    }).then((res) => {
      resolve({
        recordsFiltered: res.data.recordsFiltered,
        tableData: res.data.data
      })
    })
  })
}
// 通过分页信息截取数据
const getPageResult = ({
  pageCurrent,
  pageSize,
  waitPageData
}) => {
  const end = pageCurrent * pageSize
  return slice(waitPageData, end - pageSize, end)
}
// 通过分页计算页面显示数据
export const getPageRender = (props) => {
  const waitSortData = getFilterResult({ waitFilterData: props.tableAllData, ...props })
  const waitPageData = getSortResult({ waitSortData, ...props })
  const tableData = getPageResult({ waitPageData, ...props })
  return {
    recordsFiltered: waitSortData.length,
    tableData
  }
}
