<template lang="pug">
  el-select(
    v-bind="$attrs"
    v-on="$listeners")
    el-option-group(
      v-for="group in optionGroup"
      :key="group.label"
      :label="group.label")
      el-option(
        v-for="(option, index) in group.options"
        v-bind="option"
        :key="option.value")
        span.text-left {{option.label}}
        span.text-right {{transSubtext(option, field.form.subtext, index)}}
</template>

<script>
import { groupBy } from 'lodash'
export default {
  name: 'DataformSelect',
  props: {
    field: {
      type: Object
    }
  },
  computed: {
    optionGroup () {
      const { length, groups } = this.groupByOption(this.field.options)
      if (length === 1) {
        return [{
          label: '',
          options: groups[0].options
        }]
      }
      return groups
    }
  },
  methods: {
    groupByOption (options) {
      const groupObj = groupBy(this.field.options, 'group')
      const groups = Object.entries(groupObj).map(([label, options]) => {
        return {
          label: label === '' || label === 'undefined' ? '其他' : label,
          options
        }
      })
      return {
        length: groups.length,
        groups
      }
    },
    transSubtext (option, customSubtext, index) {
      return typeof customSubtext === 'function'
        ? customSubtext(option, index) : option.subtext
          ? option.subtext : null
    }
  }
}
</script>
<style lang="sass" scoped>
.text-left
  float: left
.text-right
  float: right
  color: #C0C4CC
</style>
