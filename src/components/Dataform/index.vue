<template lang="pug">
  el-form(
    v-bind="$attrs"
    :model="formData")
    el-form-item(
      v-for="column in columns"
      :label="column.label")
      el-input(
        v-model="formData[column.name]"
      )
    ButtonGroup.dataform-button(
      :data="formData"
      :buttonList="buttonList")
</template>

<script>
// import { cloneDeep } from 'lodash'

export default {
  name: 'Dataform',
  props: {
    dataInit: {
      type: Object,
      default: () => ({})
    },
    columns: {
      type: Array,
      default: () => ([])
    },
    buttonList: {
      type: Array,
      default: () => ([])
    }
  },
  data () {
    return {
      formData: {}
    }
  },
  watch: {
    dataInit (data) {
      this.formData = data
    }
  }
}
</script>
<style lang="scss" scoped>
.dataform-button {
  text-align: right
}
</style>
