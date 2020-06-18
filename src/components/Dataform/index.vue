<template lang="pug">
  el-form(
    v-bind="$attrs"
    ref="dataform"
    :model="formData"
    :rules="rules")
    el-form-item(
      v-for="field in formFields",
      :key="field.name",
      :label="field.label"
      :prop="field.name")
      component(
        :is="dataFormItem[field.form.formtype]"
        :field="field"
        v-bind="field.form"
        v-model="formData[field.name]")
    el-form-item.dataform-button-item
      ButtonGroup.dataform-button(
        :data="{data:formData,form:this.$refs['dataform']}"
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
      formData: this.dataInit
    }
  },
  computed: {
    rules () {
      const rules = this.formFields.reduce((result, current) => {
        return !current.form.rules ? result : {
          ...result,
          [current.name]: current.form.rules
        }
      }, {})
      return rules
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
