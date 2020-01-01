import { keys } from 'lodash'
import Sortable, { Swap } from 'sortablejs'

Sortable.mount(new Swap())

export default {
  props: {
    sortable: {
      type: Boolean,
      default: true
    }
  },
  components: {
    Sortable
  },
  mounted () {
    if (this.sortable) {
      this.createSortable()
    }
  },
  computed: {
    canSort () {
      return this.sortable && !keys(this.filterData).length && !this.sortData.order
    }
  },
  methods: {
    createSortable () {
      const table = this.$refs.table.$el.children[2].children[0].children[1]
      Sortable.create(table, {
        // sort: false,
        swap: true, // Enable swap plugin
        swapClass: 'highlight', // The class applied to the hovered swap item
        handle: '.table-handle',
        animation: 150,
        // Element dragging ended
        onStart: function (evt) {
          console.log(evt)
          // var itemEl = evt.item;  // dragged HTMLElement
          // evt.to;    // target list
          // evt.from;  // previous list
          // evt.oldIndex;  // element's old index within old parent
          // evt.newIndex;  // element's new index within new parent
          // evt.oldDraggableIndex; // element's old index within old parent, only counting draggable elements
          // evt.newDraggableIndex; // element's new index within new parent, only counting draggable elements
          // evt.clone // the clone element
          // evt.pullMode;  // when item is in another sortable: `"clone"` if cloning, `true` if moving
        },
        onEnd: function (evt) {
          console.log(evt)
          // var itemEl = evt.item;  // dragged HTMLElement
          // evt.to;    // target list
          // evt.from;  // previous list
          // evt.oldIndex;  // element's old index within old parent
          // evt.newIndex;  // element's new index within new parent
          // evt.oldDraggableIndex; // element's old index within old parent, only counting draggable elements
          // evt.newDraggableIndex; // element's new index within new parent, only counting draggable elements
          // evt.clone // the clone element
          // evt.pullMode;  // when item is in another sortable: `"clone"` if cloning, `true` if moving
        }
        // onEnd: ({ newIndex, oldIndex }) => {
        //   const targetRow = this.resourceList.splice(oldIndex, 1)[0]
        //   this.resourceList.splice(newIndex, 0, targetRow)
        // }
      })
    }
  }
}
