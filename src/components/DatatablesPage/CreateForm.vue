<script>
export default {
  data () {
    return {
      createData: {},
      createDialogVisible: false,
      createButtonList: [{
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
    createFormSubmit (data) {
      this.$createSingle({ url: this.resource, data }).then(res => {
        if (res.code === 0) {
          this.createDialogVisible = false
          this.getList()
        }
      })
    }
  }
}
</script>
