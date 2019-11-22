import moment from 'moment'

export default {
  // 值类型
  text: (value) => value,
  // 金钱类型
  money: (value) => `￥${value.toFixed(2)}`,
  // 单值匹配
  select: (value, field) => {
    const option = field.options ? field.options.find(option => option.value === value) : null
    return option ? option.label : value
  },
  // 多值匹配
  multiselect: (value, field) => {
    return value.map(data => {
      const item = field.options ? field.options.find(option => option.value === data) : null
      return item ? item.label : ''
    }).join(',')
  },

  /**
   * 时间类型
   */
  time: (value, field) => {
    return value ? moment(value).format(field.render.timeType) : '-'
  }
  /* 字符拼接 *
  * @padRender 字符串拼接在字符串前{start}或后{end}
  * @length    拼接长度
  * @charWith  使用拼接的字符串或数字
  *  */
  // padString: ({ data, column }) => {
  //   const { padRender = 'start', length = 0, charWith = '' } = column.render
  //   const padFunc = {
  //     'start': padStart,
  //     'end': padEnd
  //   }
  //   return padFunc[padRender](data, length, charWith)
  // }
  /**
   * 金钱符号拼接
   */
}
