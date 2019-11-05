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

export default {
  name: 'ButtonGroup',
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
