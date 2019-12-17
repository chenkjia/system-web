<script>
export default {
  props: {
    hasPage: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      recordsFiltered: 0,
      pageCurrent: 1,
      pageSize: 10
    }
  },
  methods: {
    pageCurrentChange (val) {
      this.pageCurrent = val
      this.getList()
    },
    pageSizeChange (val) {
      this.pageSize = val
      this.getList()
    }
  }
}
</script>
