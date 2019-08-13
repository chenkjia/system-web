<script>
import { cloneDeep } from 'lodash'
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
        func: () => {
          this.filterData = {}
        }
      }]
    }
  },
  computed: {
    filterFields () {
      return this.filterList.map(item => {
        const field = cloneDeep(this.fields[item])
        return {
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
    filterFormSubmit () {
      this.getList()
    }
  }
}
</script>
