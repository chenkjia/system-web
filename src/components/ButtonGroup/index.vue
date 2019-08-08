<template lang="pug">
  div
    el-button(
      v-for="button in buttonList"
      v-bind="button"
      :size="button.size||'mini'"
      @click="button.func(row)"
    ) {{button.label}}
</template>
<script>

export default {
  name: 'ButtonGroup',
  props: {
    row: {
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
