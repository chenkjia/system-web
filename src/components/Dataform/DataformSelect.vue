<template lang="pug">
  el-select(
    v-bind="$attrs"
    v-on="$listeners")
    el-option(
      v-for="option in field.options"
      :key="option.value"
      v-bind="option")
</template>

<script>
export default {
  name: 'DataformSelect',
  props: {
    field: {
      type: Object
    }
  }
}
</script>
