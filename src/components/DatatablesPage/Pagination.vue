<script>
export default {
  data () {
    return {
      recordsFiltered: 100,
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
