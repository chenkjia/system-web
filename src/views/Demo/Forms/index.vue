<template lang='pug'>
div.form-containers
  el-divider(content-position="left") 传统表单
  Dataform.form-box(
    ref="defaultForm"
    size="small"
    label-position="right"
    label-width="100px"
    :formFields="formFields"
    :buttonList="buttonList"
    @getChange="onCurChangingForm")
    //- template(slot="select", slot-scope="scope")
    //-   span(style="float: left") {{scope.field.label}} - {{scope.data.input}}
  el-divider(content-position="left") 对比表单
  ComparedForm.form-box(
    ref="comparedForm"
    :formFields="compFields"
    :buttonList="compBtns"
    :dataInit="compDatainit"
    style="width: 70%")
  el-divider(content-position="left") 表格嵌套表单
  el-divider(content-position="left") 键盘高度融合示例
</template>

<script>
/**
 * @name defaultForm 传统表单示例
 */
import { columns, fieldList } from './fields'
export default {
  name: 'DefaultForm',
  data () {
    return {
      formFields: this.$fieldsFormat(columns, fieldList),
      buttonList: [{
        label: '提交',
        type: 'success',
        name: 'submit',
        action: true,
        validate: true,
        func: (funcProps) => {
          console.log('funcProps:', funcProps)
          const { button } = funcProps
          setTimeout(() => {
            button.label = '提交成功,仅限一次'
            button.disabled = true
            button.loading = false
          }, 500)
        }
      }, {
        label: '重置',
        name: 'reset',
        func: () => {}
      }],
      compFields: this.$fieldsFormat(columns, fieldList),
      compBtns: [{
        label: '提交',
        type: 'success',
        name: 'submit',
        validate: true,
        func: ({ data }) => {
          console.log('funcProps:', data)
        }
      }, {
        label: '重置',
        name: 'reset',
        func: ({ data, form }) => {
          form.resetData()
        }
      }],
      compDatainit: {
        originInput: '123',
        originSelect: 1
      }
    }
  },
  methods: {
    onCurChangingForm (value, fieldName) {
      console.log('当前传统表单修改：', value, fieldName)
    }
  },
  mounted () {
  }
}
</script>

<style lang='sass' scoped>
.form-box
  width: 70%
  padding: 20px
  margin-left: 10px
  background: #f0f0f0
</style>
