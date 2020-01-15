<template lang="pug">
  div
    el-button(
      v-for="button in buttonList"
      v-bind="button"
      :key="button.name"
      :size="button.size||'mini'"
      @click="button.func(data)"
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
   * @props props参数
   * @prop {Object} data 传入按钮作为参数的数据
   * @prop {Array} buttonList 按钮组，以多个按钮配置为对象
   * @example [{label: '按钮1', func: () => {}}]
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
  }
}
</script>
