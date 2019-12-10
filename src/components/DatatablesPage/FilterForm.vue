<script>
export default {
  props: {
    filterList: {
      type: Array,
      default: () => ([])
    }
  },
  data () {
    return {
      filterData: {},
      filterButtonList: [{
        label: '搜索',
        type: 'primary',
        func: this.filterFormSubmit
      }, {
        label: '重置',
        type: 'primary',
        func: this.filterFormReset
      }]
    }
  },
  computed: {
    filterFields () {
      return this.filterList.map(item => {
        const field = this.resultFields[item]
        return {
          name: item,
          ...field,
          form: {
            ...field.form,
            ...field.filter
          }
        }
      })
    }
  },
  methods: {
    filterFormSubmit (data) {
      this.filterData = data
      this.getList()
    },
    filterFormReset () {
      this.filterData = {}
      this.getList()
    }
  }
}
</script>
