<template lang="pug">
  el-form(
    v-bind="formConfig"
    :model="formData")
    el-form-item(
      v-for="column in columns"
      :label="column.label")
      el-input(
        v-model="formData[column.name]"
      )
</template>

<script>
// import { cloneDeep } from 'lodash'

export default {
  name: 'Dataform',
  props: {
    formConfig: {
      type: Object,
      default: () => ({})
    },
    columns: {
      type: Array,
      default: () => ([])
    }
  },
  data () {
    return {
      formData: {}
    }
  }
}
</script>
<style scoped lang="sass">
</style>
