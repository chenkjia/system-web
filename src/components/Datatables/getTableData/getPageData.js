import { get } from '@/utils/axios'
import { filter, slice, overEvery, keys, orderBy } from 'lodash'
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
// 页面过滤函数
const filterFormat = (filter, fields) => {
  const filterKeys = keys(filter)
  const filterFuncs = filterKeys.map(key => {
    return fields[key].form.like ? (value) => {
      return value[key].includes(filter[key])
    } : (value) => {
      return value[key] === filter[key]
    }
  })
  return overEvery(filterFuncs)
}
// 通过过滤信息过滤数据
const getFilterResult = ({
  tableAllData,
  filterData,
  filterFieldsObject
}) => {
  const filterFormater = filterFormat(filterData, filterFieldsObject)
  return filter(tableAllData, filterFormater)
}
// 通过排序信息排序数据
const getSortResult = ({
  filterResult,
  sortData
}) => {
  const { prop, order } = sortData
  return order ? orderBy(filterResult, [prop], [order.substring(0, order.length - 6)]) : filterResult
}
// 通过分页信息截取数据
const getPageResult = ({
  pageCurrent,
  pageSize,
  sortResult
}) => {
  const end = pageCurrent * pageSize
  return slice(sortResult, end - pageSize, end)
}
// 通过分页计算页面显示数据
export const getPageRender = (props) => {
  const filterResult = getFilterResult(props)
  const sortResult = getSortResult({ filterResult, ...props })
  const tableData = getPageResult({ sortResult, ...props })
  return {
    recordsFiltered: filterResult.length,
    tableData
  }
}
