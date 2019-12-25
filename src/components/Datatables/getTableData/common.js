import { filter, overEvery, keys, orderBy } from 'lodash'
// 页面过滤函数
export const filterFormat = (filter, fields) => {
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
export const getFilterResult = ({
  waitFilterData,
  filterData,
  filterFieldsObject
}) => {
  const filterFormater = filterFormat(filterData, filterFieldsObject)
  return filter(waitFilterData, filterFormater)
}
// 通过排序信息排序数据
export const getSortResult = ({
  waitSortData,
  sortData
}) => {
  const { prop, order } = sortData
  return order ? orderBy(waitSortData, [prop], [order.substring(0, order.length - 6)]) : waitSortData
}
