<template>
  <ComparedForm
    ref="comparedForm"
    :formFields="compFields"
    :buttonList="compBtns"
    :dataInit="compDatainit"
  ></ComparedForm>
</template>

<script>
/** */
import { columns, fieldList } from './fields'
export default {
  // name: '',
  data () {
    return {
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
  }
}
</script>

<style lang='sass' scoped>

</style>
