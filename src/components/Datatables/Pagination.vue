<script>
export default {
  data () {
    return {
      recordsFiltered: this.data.length,
      pageCurrent: 1,
      pageSize: 10
    }
  },
  methods: {
    pageCurrentChange (val) {
      this.pageCurrent = val
      this.getTableData()
    },
    pageSizeChange (val) {
      this.pageSize = val
      this.getTableData()
    }
  }
}
</script>
