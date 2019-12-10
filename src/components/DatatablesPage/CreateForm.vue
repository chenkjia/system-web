<script>

export default {
  props: {
    createList: {
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
  computed: {
    createFields () {
      return this.createList.map(item => {
        const field = this.resultFields[item]
        return {
          name: item,
          ...field,
          form: {
            ...field.form,
            ...field.create
          }
        }
      })
    }
  },
  methods: {
    createFormInit () {
      this.createData = {}
      this.createDialogVisible = true
    },
    createFormSubmit (data) {
      this.$create({ url: this.resource, data }).then(res => {
        if (res.code === 0) {
          this.createDialogVisible = false
          this.getList()
        }
      })
    }
  }
}
</script>
