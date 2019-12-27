import getTableData from '../getTableData'
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
  computed: {
    lazy () {
      return this.mode === 'tree' && this.serverSide
    }
  },
  methods: {
    async treeLoad (row, treeNode, resolve) {
      const { tableData } = await getTableData({
        serverMode: this.serverMode,
        mode: this.mode,
        resource: this.resource,
        tableAllData: this.tableAllData,
        filterData: this.filterData,
        filterFieldsObject: this.filterFieldsObject,
        sortData: this.sortData,
        treeKey: this.treeKey,
        treeParentKey: this.treeParentKey,
        treeChildKey: this.treeChildKey,
        parentId: row[this.treeKey]
      })
      resolve(tableData)
    }
  }
}
