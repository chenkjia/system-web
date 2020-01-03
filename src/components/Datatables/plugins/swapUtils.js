import Sortable from 'sortablejs'

const R_SPACE = /\s+/g

function toggleClass (el, name, state) {
  if (el && name) {
    if (el.classList) {
      el.classList[state ? 'add' : 'remove'](name)
    } else {
      let className = (' ' + el.className + ' ').replace(R_SPACE, ' ').replace(' ' + name + ' ', ' ')
      el.className = (className + (state ? ' ' + name : '')).replace(R_SPACE, ' ')
    }
  }
}

/**
 * Returns the index of an element within its parent for a selected set of
 * elements
 * @param  {HTMLElement} el
 * @return {number}
 */
function index (el) {
  let index = 0

  if (!el || !el.parentNode) {
    return -1
  }

  /* jshint boss:true */
  while (el === el.previousElementSibling) {
    if ((el.nodeName.toUpperCase() !== 'TEMPLATE') && el !== Sortable.clone) {
      index++
    }
  }

  return index
}

export {
  toggleClass,
  index
}
