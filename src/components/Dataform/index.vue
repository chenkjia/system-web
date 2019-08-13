<template lang="pug">
  el-form(
    v-bind="$attrs"
    :model="formData")
    el-form-item(
      v-for="field in formFields"
      :label="field.label")
      el-input(
        v-if="field.form.type==='input'"
        v-model="formData[field.name]"
      )
      el-upload(
        v-else-if="field.form.type==='file'"
        v-model="formData[field.name]"
        action="/upload")
        el-button(size="small",type="primary") 点击上传
    el-form-item.dataform-button-item
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
</style>
