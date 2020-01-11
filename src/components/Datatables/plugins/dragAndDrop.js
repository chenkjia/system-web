import { keys, sortBy, findIndex, remove, pick } from 'lodash'
import { createTreeDragAndDrop } from './treeDragAndDrop'
export default {
  props: {
    draggable: {
      type: Boolean,
      default: true
    },
    sortKey: {
      type: String,
      default: 'sort'
    }
  },
  mounted () {
    if (this.draggable) {
      this.createDragAndDrop()
    }
  },
  computed: {
    canDrag () {
      return this.draggable && !keys(this.filterData).length && !this.sortData.order
    },
    defaultSortData () {
      return {
        prop: this.sortKey,
        order: 'ascending'
      }
    },
    resultSortData () {
      return this.sortData.order ? this.sortData : this.defaultSortData
    }
  },
  methods: {
    createDragAndDrop () {
      const table = this.$refs.table.$el.children[2].children[0].children[1]
      if (this.mode === 'tree') {
        createTreeDragAndDrop(table, this.dropItem)
      }
    },
    dropItem ({ direction, dragId, dropId }) {
      // 找到拖拽项
      const dragItem = this.tableAllData.find(item => item[this.treeKey] === dragId)
      // 找到目标项
      const dropItem = this.tableAllData.find(item => item[this.treeKey] === dropId)
      const dropParentId = dropItem[this.treeParentKey]
      // 找到目标项的兄弟项，并对它们进行排序
      let dropParentChildren = sortBy(this.tableAllData.filter(item => item[this.treeParentKey] === dropParentId), this.sortKey)
      if (direction === 'in') {
        // 把拖拽项的父级ID设置为目标项的ID
        dragItem[this.treeParentKey] = dropId
        this.changeParentId(dragId, dropId)
        dragItem[this.sortKey] = dropParentChildren.length + 1
        this.changeSort([dragItem])
      } else {
        // 如果有更改到父子关系，则更改父级ID，并重新排序
        if (dragItem[this.treeParentKey] !== dropParentId) {
          dragItem[this.treeParentKey] = dropParentId
          this.changeParentId(dragId, dropParentId)
        } else {
          // 如果没有更改到父子关系，先把拖拽项的原始项清出兄弟数组
          remove(dropParentChildren, item => item[this.treeKey] === dragId)
        }
        const dropIndex = findIndex(dropParentChildren, [this.treeKey, dropId])
        // 把拖拽项插入到它们中
        dropParentChildren.splice(direction === 'up' ? dropIndex : dropIndex + 1, 0, dragItem)
        // 把重新排序前的序号进行记录，供过滤
        const sortObject = dropParentChildren.reduce((result, current) => {
          result[current[this.treeKey]] = current[this.sortKey]
          return result
        }, {})
        // 重新进行排序
        dropParentChildren.forEach((item, index) => {
          item[this.sortKey] = index
        })
        // 把序号有变更的项过滤出来，实现数据变更操作
        const sortList = dropParentChildren.filter(item => {
          return item[this.sortKey] !== sortObject[item[this.treeKey]]
        })
        this.changeSort(sortList)
      }
      this.getTableData()
    },
    changeParentId (id, parentId) {
      this.$emit('changeParentId', id, parentId)
    },
    changeSort (list) {
      this.$emit('changeSort', list.map(item => pick(item, [this.treeKey, this.sortKey])))
    }
  }
}
