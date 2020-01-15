import { keys, sortBy, findIndex, remove, pick } from 'lodash'
import { createTreeDragAndDrop } from './treeDragAndDrop'
import { createPageDragAndDrop } from './pageDragAndDrop'

export default {
  props: {
    draggable: {
      type: Boolean,
      default: false
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
      if (this.mode === 'page') {
        createPageDragAndDrop(table, this.dropToSort)
      }
    },
    dropToSort ({ newIndex, oldIndex }) {
      // 把拖拽项从列表中抽出来
      const currRow = this.tableData.splice(oldIndex, 1)[0]
      // 把拖拽项插入到列表中新位置中去
      this.tableData.splice(newIndex, 0, currRow)
      // 计算出拖拽项向下位移多少位，向上位移则为负
      const length = newIndex - oldIndex
      const direction = length > 0
      const directionLength = direction ? 1 : -1
      const max = direction ? newIndex - 1 : oldIndex
      const min = direction ? oldIndex : newIndex + 1
      // 循环拖拽项和目标位置中间的每项，修改他们的sort
      const sortList = this.tableData.filter((item, index) => {
        return index >= min && index <= max
      }).map(item => {
        return {
          [this.treeKey]: item[this.treeKey],
          [this.sortKey]: item[this.sortKey] - directionLength
        }
      })
      // 修改拖拽项的sort
      currRow[this.sortKey] = currRow.sort + length
      this.changeSort([...sortList, currRow])
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
