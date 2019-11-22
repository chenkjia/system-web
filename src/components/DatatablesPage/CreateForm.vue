<script>
import { cloneDeep } from 'lodash'

export default {
  props: {
    createList: {
      type: Array,
      default: () => ([])
    },
    createButtonList: {
      type: Array,
      default: () => ([{
        label: '取 消',
        func: () => {
          this.createDialogVisible = false
        }
      }, {
        label: '确 定',
        type: 'primary',
        func: this.createFormSubmit
      }])
    }
  },
  data () {
    return {
      createData: {},
      createDialogVisible: false
    }
  },
  computed: {
    createFields () {
      return this.createList.map(item => {
        const field = cloneDeep(this.fields[item])
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
