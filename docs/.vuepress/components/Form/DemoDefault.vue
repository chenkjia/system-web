<template>
<Dataform
  class="form-box"
  ref="defaultForm"
  size="small"
  label-position="right"
  label-width="100px"
  :formFields="formFields"
  :buttonList="buttonList"
  @getChange="onCurChangingForm"
></Dataform>
</template>

<script>
/** */
import { columns, fieldList } from './fields'
import Dataform from '@/components/Dataform'
export default {
  // name: 'form-demo-base',
  components: {
    Dataform
  },
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
      }]
    }
  },
  methods: {
    onCurChangingForm (value, fieldName) {
      console.log('当前传统表单修改：', value, fieldName)
    }
  }
}
</script>

<style lang='sass' scoped>

</style>
