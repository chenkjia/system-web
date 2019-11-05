<template lang="pug">
  el-form(
    v-bind="$attrs"
    :model="formData")
    DataformItem(
      v-for="field in formFields",
      :key="field.name",
      :field="field"
      v-model="formData[field.name]"
    )
    el-form-item.dataform-button-item
      ButtonGroup.dataform-button(
        :data="formData"
        :buttonList="buttonList")
</template>

<script>
import DataformItem from './DataformItem'

export default {
  name: 'Dataform',
  components: {
    DataformItem
  },
  props: {
    dataInit: {
      type: Object,
      default: () => ({})
    },
    formFields: {
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
<style lang="sass" scoped>
.dataform-button-item
  margin-bottom: 0
.dataform-button
  text-align: right
.form-upload
  text-align: left
</style>
