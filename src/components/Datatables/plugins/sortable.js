import { keys } from 'lodash'
import Sortable from 'sortablejs'
import Swap from './swap'

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
        swapThreshold: 0.75, // Threshold of the swap zone
        invertSwap: true, // Will always use inverted swap zone if set to true
        invertedSwapThreshold: 1,
        onEnd: (evt) => {
          console.log('this.getIdByEle(evt.dragItem)')
          console.log(this.getIdByEle(evt.item))
          console.log('this.getIdByEle(evt.swapItem)')
          console.log(this.getIdByEle(evt.swapItem))
        }
      })
    },
    getIdByEle (el) {
      return el.childNodes[0].childNodes[0].childNodes[0].dataset.id
    }
  }
}
