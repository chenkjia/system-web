<template lang="pug">
  div
    el-button(
      v-for="button in buttonList"
      v-bind.sync="computeAttrs[button.name]"
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
  },
  computed: {
    computeAttrs () {
      return this.buttonList.reduce((res, btn) => {
        if (!btn.name) {
          console.warn(`请给按钮【${btn.label}】增加主键属性name, 否则无法使用button部分功能`)
          return res
        }
        return { ...res, [btn.name]: btn }
      }, {})
    }
  },
  methods: {
    onClickButton (e, btn) {
      const { name, func, action } = btn
      if (action) {
        this.$set(this.computeAttrs[name], 'loading', true)
      }
      func({
        ...this.data,
        button: this.computeAttrs[name]
      })
    }
  }
}
</script>
