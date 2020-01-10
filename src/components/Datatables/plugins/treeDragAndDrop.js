
import Sortable from 'sortablejs'
import Swap from './swap'

Sortable.mount(new Swap())

// 通过元素获取ID
const getIdByEl = (el) => {
  return el.childNodes[0].childNodes[0].childNodes[0].dataset.id
}

// 通过元素获取等级，数据越低越接近根目录
const getLevelByEl = (el) => {
  const index = el.className.indexOf('el-table__row--level-')
  if (index < 0) {
    return 0
  }
  return Number(el.className[index + 21])
}
// 判断拖拽项不是目标项的祖先
const isParents = (evt) => {
  // 如果目标项在拖拽项的上方，则不是
  if (evt.dropItem.rowIndex - evt.item.rowIndex < 0) {
    return false
  }
  // 如果拖拽项的等级大于或等于目标项的等级，则不是
  const dragItemLevel = getLevelByEl(evt.item)
  const dropItemLevel = getLevelByEl(evt.dropItem)
  if (dragItemLevel >= dropItemLevel) {
    return false
  }
  // 列出拖拽项与目标项之间的其它项
  const betweenLevels = Array.from(evt.item.offsetParent.rows).filter((item, index) => {
    return index < evt.dropItem.rowIndex && index > evt.item.rowIndex
  }).map(getLevelByEl)
  // 如果中间项有和拖拽项一样的等级，则不是
  if (betweenLevels.includes(dragItemLevel)) {
    return false
  }
  return true
}

// 获取目标项的下一项
const getNextItem = (evt) => {
  return Array.from(evt.item.offsetParent.rows).find((item, index) => {
    return index === evt.dropItem.rowIndex + 1
  })
}

// 判断目标项的下一项是否是目标项的子项
const isNextFather = (dropItem, nextItem) => {
  const dropItemLevel = getLevelByEl(dropItem)
  const nextItemLevel = getLevelByEl(nextItem)
  if (dropItemLevel < nextItemLevel) {
    return true
  }
  return false
}

// 绑定拖拽事件
export const createTreeDragAndDrop = (table, dragAndDrop) => {
  Sortable.create(table, {
    swap: true,
    swapClass: 'highlight',
    handle: '.table-handle',
    animation: 150,
    swapThreshold: 0.75,
    invertSwap: true,
    invertedSwapThreshold: 1,
    onEnd: (evt) => {
      // 判断拖拽项不是目标项的祖先
      if (!isParents(evt)) {
        const nextItem = getNextItem(evt)
        if (evt.swapDirection === 'down' && isNextFather(evt.dropItem, nextItem)) {
          dragAndDrop({
            direction: 'up',
            dragId: getIdByEl(evt.item),
            dropId: getIdByEl(nextItem)
          })
        } else {
          dragAndDrop({
            direction: evt.swapDirection,
            dragId: getIdByEl(evt.item),
            dropId: getIdByEl(evt.dropItem)
          })
        }
      }
    }
  })
}
