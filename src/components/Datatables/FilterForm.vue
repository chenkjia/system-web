<script>
import { keyBy } from 'lodash'
export default {
  props: {
    filterFields: {
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
    filterFieldsObject () {
      return keyBy(this.filterFields, 'name')
    }
  },
  methods: {
    filterFormSubmit ({ data }) {
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
