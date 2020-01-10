import { omit } from 'lodash'

export default {
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
    updateFormSubmit ({ data, form }) {
      form.validate((valid) => {
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
