export default {
  methods: {
    changeSort (list) {
      this.$update({
        url: `${this.resource}/changeSort`,
        data: {
          list
        }
      }).then(res => {
        if (res.code === 0) {
          this.$message({
            message: '成功调整数据顺序',
            type: 'success'
          })
        }
      })
    }
  }
}
