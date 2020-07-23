// 存在修改项,高亮勾选,并允许单项取消勾选,恢复原值
export default {
  methods: {
    getChange (value, scope) {
      const { row } = scope
      // 高亮多选框,标识已修改
      const hasChange = this.checkItemChange(row[this.originkey], value)
      this.$nextTick(() => {
        this.$refs.table.toggleRowSelection(row, hasChange)
        this.$set(row, '__allowSelect__', hasChange)
      })
    },
    checkItemChange (origin, change) {
      return origin !== change
    },
    getSelectable (row, index) {
      return row.__allowSelect__
    },
    selectChange (selection, row) {
      const isCurChange = selection.length > 0 && selection.indexOf(row) > -1
      // 已修改项允许取消勾选
      this.$set(row, '__allowSelect__', isCurChange)
      if (!isCurChange) {
        // 取消单项修改恢复原值
        this.$set(row, this.changekey, row[this.originkey])
      }
    }
  }
}
