<template lang="pug">
  div
    el-button(
      v-for="button in buttonList"
      v-bind="button"
      :ref="button.name"
      :key="button.name"
      :size="button.size||'mini'"
      @click="onClickButton($event, button)"
    ) {{button.label}}
</template>
<script>
/**
 * @module ButtonGroup 按钮组
 * @author chenkj
 *   */
export default {
  name: 'ButtonGroup',
  /**
   * 按钮组，Array，包含多个button单元对象
   * @example
   * [{...el-button, label: '', func: () => {}}]
   * @props props参数
   * @prop {Object} data 传入按钮作为参数的数据
   * @prop {Array} buttonList 按钮组，以多个按钮配置为对象
   **/
  props: {
    data: {
      type: Object,
      default: () => ({})
    },
    buttonList: {
      type: Array,
      default: () => ([])
    }
  // },
  // filters: {
  //   funcProps (btn, datas) {
  //     return {
  //       ...datas,
  //       button:
  //     }
  //   }
  },
  methods: {
    onClickButton (e, btn) {
      if (!btn.name) {
        console.warn('请给按钮增加主键名称name, 否则无法使用func参数button')
      }
      return btn.func({
        ...this.data,
        button: this.$refs[btn.name] ? this.$refs[btn.name][0] : {}
      })
    }
  }
}
</script>
