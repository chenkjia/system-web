<script>
/**
 * @name DataFormInput
 * @description 基于el-input做二次开发，不支持使用：自定义模板，远程搜索（由其他方式实现）
 * @author linmn <linmn@ansosz.cn>
 */

// const slotsEvent = {
//   prepend: <template slot="prepend">{this.prepend}</template>,
//   append: <template slot="append">{this.append}</template>
// }
// function renderPrependSlot (h) {
//   return <template slot="prepend">{this.prepend}</template>
// }
// function renderAppendSlot (h, append) {
//   return <template slot="append">{this.append}</template>
// }
// function getSlotList () {
//   const prepend = this.prepend ? { prepend: this.prepend } : {}
//   const append = this.append ? { append: this.append } : {}
//   return Object.assign(prepend, append)
// }
function renderEvent (h) {
  // const prepend = this.prepend ? { prepend: this.prepend } : {}
  // const append = this.append ? { append: this.append } : {}
  // const slotList = Object.assign(prepend, append)
  // const slotObjs = Object.keys(slotList).map(key => h(slotsEvent[key].call(this)))
  // console.log('slotObjs:', slotList)
  return (
    <el-input
      {...{ attrs: this.$attrs }}
      vModel_trim={this.currentValue}>
    </el-input>
  )
}

export default {
  name: 'DataformInput',
  props: {
    value: [String, Number],
    name: String,
    prepend: String,
    append: String
  },
  computed: {
    currentValue: {
      get () {
        return this.value
      },
      set (val) {
        this.$emit('input', val)
      }
    }
  },
  render (h) {
    return renderEvent.call(this, h)
  }
}
</script>
