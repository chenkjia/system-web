<template lang='pug'>
el-input(
  v-bind="$attrs"
  v-on="$listeners"
  v-model.trim="currentValue")
  template(v-if="prepend",slot="prepend") {{prepend}}
  template(v-if="append",slot="append") {{append}}
</template>

<script>
/** */
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
  }
}
</script>

<style lang='sass' scoped>

</style>
