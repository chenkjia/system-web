<script>
// import { keyBy } from 'lodash'
export default {
  props: {
    rowKey: {
      type: String,
      default: 'label'
    }
  },
  // data () {
  //   return {
  //     filterData: {},
  //     filterButtonList: [{
  //       label: '搜索',
  //       type: 'primary',
  //       func: this.filterFormSubmit
  //     }, {
  //       label: '重置',
  //       type: 'primary',
  //       func: this.filterFormReset
  //     }]
  //   }
  // },
  computed: {
    lazy () {
      return true
      // return this.mode === 'tree' && this.serverSide
    }
  },
  methods: {
    treeLoad (row, treeNode, resolve) {
      console.log(row)
    }
  }
}
</script>
