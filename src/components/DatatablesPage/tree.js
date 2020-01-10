export default {
  props: {
    treeKey: {
      type: String,
      default: '_id'
    },
    treeParentKey: {
      type: String,
      default: 'parentId'

    },
    treeChildKey: {
      type: String,
      default: 'children'
    }
  },
  methods: {
    changeParentId (id, parentId) {
      this.$update({
        url: this.resource,
        params: {
          [this.treeKey]: id
        },
        data: {
          [this.treeParentKey]: parentId
        }
      }).then(res => {
        if (res.code === 0) {
          this.$message({
            message: '改变树状关系成功',
            type: 'success'
          })
        }
      })
    }
  }
}
