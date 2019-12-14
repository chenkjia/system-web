<script>
import { omit } from 'lodash'

export default {
  props: {
    updateList: {
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
  computed: {
    updateFields () {
      return this.updateList.map(item => {
        const field = this.resultFields[item]
        return {
          name: item,
          ...field,
          form: {
            ...field.form,
            ...field.update
          }
        }
      })
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
</script>
