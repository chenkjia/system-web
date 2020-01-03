import { index, toggleClass } from './swapUtils'
/**
 * Returns the index of an element within its parent for a selected set of
 * elements
 * @param  {HTMLElement} el
 * @param  {selector} selector
 * @return {number}
 */
let lastSwapEl, lastSwapDirection

function SwapPlugin () {
  function Swap () {
    this.defaults = {
      swapClass: 'sortable-swap-highlight'
    }
  }

  Swap.prototype = {
    dragStart ({ dragEl }) {
      lastSwapEl = dragEl
    },
    dragOverValid (props) {
      const { el, dragRect, target, originalEvent, completed, changed, cancel, onMove } = props
      const { swapThreshold, invertedSwapThreshold, invertSwap, swapClass } = this.options
      if (target && target !== el) {
        let prevSwapEl = lastSwapEl
        if (onMove(target) !== false) {
          const swapDirection = _getSwapDirection({
            evt: originalEvent,
            dragRect,
            targetRect: target.getBoundingClientRect(),
            swapThreshold,
            invertedSwapThreshold,
            invertSwap
          })
          toggleDirectionClass(target, swapDirection, swapClass)
          lastSwapEl = target
          lastSwapDirection = swapDirection
        } else {
          lastSwapEl = null
          lastSwapDirection = null
        }
        if (prevSwapEl && prevSwapEl !== lastSwapEl) {
          toggleDirectionClass(prevSwapEl, '', swapClass, false)
        }
      }
      changed()
      completed(true)
      cancel()
    },
    drop ({ activeSortable, putSortable, dragEl }) {
      // console.log(lastSwapEl)
      // console.log(lastSwapDirection)
      // let toSortable = (putSortable || this.sortable)
      let options = this.options
      lastSwapEl && toggleDirectionClass(lastSwapEl, '', options.swapClass, false)
      // if (lastSwapEl && (options.swap || putSortable && putSortable.options.swap)) {
      //   if (dragEl !== lastSwapEl) {
      //     toSortable.captureAnimationState()
      //     if (toSortable !== activeSortable) activeSortable.captureAnimationState()
      //     swapNodes(dragEl, lastSwapEl)
      //     toSortable.animateAll()
      //     if (toSortable !== activeSortable) activeSortable.animateAll()
      //   }
      // }
    },
    nulling () {
      lastSwapEl = null
      lastSwapDirection = null
    }
  }

  return Object.assign(Swap, {
    pluginName: 'swap',
    eventProperties () {
      return {
        swapItemIndex: index(lastSwapEl),
        swapItem: lastSwapEl,
        swapDirection: lastSwapDirection
      }
    }
  })
}

// dragOver到一个target上的三种方向
const directions = ['in', 'up', 'down']
// dragOver到一个target上，对应三种方向的样式变化
const toggleDirectionClass = (target, direction, swapClass, enable = true) => {
  directions.forEach(item => {
    toggleClass(target, `${swapClass}-${item}`, false)
  })
  if (enable) {
    toggleClass(target, `${swapClass}-${direction}`, true)
  }
}

// function swapNodes (n1, n2) {
//   let p1 = n1.parentNode
//   let p2 = n2.parentNode
//   let i1; let i2

//   if (!p1 || !p2 || p1.isEqualNode(n2) || p2.isEqualNode(n1)) return
//   i1 = index(n1)
//   i2 = index(n2)
//   console.log(n1)
//   console.log(n2)

//   if (p1.isEqualNode(p2) && i1 < i2) {
//     i2++
//   }
//   p1.insertBefore(n2, p1.children[i1])
//   p2.insertBefore(n1, p2.children[i2])
// }

const _getSwapDirection = ({
  evt,
  dragRect,
  targetRect,
  swapThreshold,
  invertedSwapThreshold,
  invertSwap,
  isLastTarget
}) => {
  const mouseOnAxis = evt.clientY
  const targetLength = targetRect.height
  const targetS1 = targetRect.top
  const targetS2 = targetRect.bottom
  if (mouseOnAxis < targetS1 + (targetLength * (1 - swapThreshold) / 2)) {
    return 'up'
  } else if (mouseOnAxis > targetS2 - (targetLength * (1 - swapThreshold) / 2)) {
    return 'down'
  } else {
    return 'in'
  }
  // return mouseOnAxis > targetS1 + (targetLength * (1 - swapThreshold) / 2) &&
  //     mouseOnAxis < targetS2 - (targetLength * (1 - swapThreshold) / 2)
  // if (!invertSwap) {
  //   if (
  //     mouseOnAxis > targetS1 + (targetLength * (1 - swapThreshold) / 2) &&
  //     mouseOnAxis < targetS2 - (targetLength * (1 - swapThreshold) / 2)
  //   ) {
  //     return true
  //   } else {
  //     return false
  //   }
  // }
}

export default SwapPlugin
