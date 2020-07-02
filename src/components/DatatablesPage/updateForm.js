import { omit } from 'lodash'
export default {
/**
  * @module DatatablesPage-updateForm
  * @props 属性
  * @prop {Array} updateFields -
  * @prop {Array} updateButtonList  -表单编辑操作按钮组，以多个按钮配置为对象，如[{label: '按钮1', func: () => {}}]
*/
  props: {
    updateFields: {
      type: Array,
      default: () => ([])
    },
    updateButtonList: {
      type: Array
    }
  },
  data () {
    return {
      updateFormId: null,
      updateData: {},
      updateDialogVisible: false,
      /**
     * @inner createButtons
     * @default [{取消按钮},{确定按钮}]
     *  */
      updateButtons: this.updateButtonList || [{
        label: '取 消',
        func: () => {
          this.updateDialogVisible = false
        }
      }, {
        label: '确 定',
        type: 'primary',
        func: this.updateFormSubmit
      }]
    }
  },
  methods: {
    updateFormInit (data) {
      this.updateFormId = data._id
      this.updateData = omit(data, ['_id'])
      this.updateDialogVisible = true
    },
    updateFormSubmit ({ data, refs }) {
      refs.dataform.validate((valid) => {
        if (valid) {
          this.$update({
            url: this.resource,
            params: {
              _id: this.updateFormId
            },
            data
          }).then(res => {
            if (res.code === 0) {
              this.updateDialogVisible = false
              this.getList()
            }
          })
        } else {
          return false
        }
      })
    }
  }
}
