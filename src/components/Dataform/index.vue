<template lang="pug">
  el-form(
    v-bind="$attrs"
    :model="formData")
    el-form-item(
      v-for="field in formFields",
      :key="field.name",
      :label="field.label")
      component(
        :is="dataFormItem[field.form.formtype]"
        :field="field"
        v-bind="field.form"
        v-model="formData[field.name]")
    el-form-item.dataform-button-item
      ButtonGroup.dataform-button(
        :data="formData"
        :buttonList="buttonList")
</template>

<script>
import DataFormItemReg from './DataFormItemReg'
export default {
  name: 'Dataform',
  mixins: [DataFormItemReg],
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
