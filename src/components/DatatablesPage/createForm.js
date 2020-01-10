export default {
  props: {
    createFields: {
      type: Array,
      default: () => ([])
    },
    createButtonList: {
      type: Array
    }
  },
  data () {
    return {
      createData: {},
      createDialogVisible: false,
      createButtons: this.createButtonList || [{
        label: '取 消',
        func: () => {
          this.createDialogVisible = false
        }
      }, {
        label: '确 定',
        type: 'primary',
        func: this.createFormSubmit
      }]
    }
  },
  methods: {
    createFormInit () {
      this.createData = {}
      this.createDialogVisible = true
    },
    createFormSubmit ({ data, form }) {
      form.validate((valid) => {
        if (valid) {
          this.$create({ url: this.resource, data }).then(res => {
            if (res.code === 0) {
              this.createDialogVisible = false
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
