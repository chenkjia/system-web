
export default {
/**
  * @module DatatablesPage-createForm
  * @props 属性
  * @prop {Array} createFields -
  * @prop {Array} createButtonList 表单新增操作按钮组，以多个按钮配置为对象，如[{label: '按钮1', func: () => {}}]
*/
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
      /**
       * @inner createButtons
       * @default [{取消按钮},{确定按钮}]
       *  */
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
