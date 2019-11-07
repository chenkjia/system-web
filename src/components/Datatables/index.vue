<template lang="pug">
  el-table(
    v-bind="$attrs"
    v-on="$listeners"
    :data="data"
    border
    size="small"
    style="width: 100%"
    :cell-class-name="cellClassName")
    slot(name="left")
    el-table-column(
      v-for="column in columns"
      v-bind="column"
      :sortable="column.sortable?'custom':false"
      :key="column.name"
      :prop="column.name")
      template(slot-scope="scope")
        DatatablesFiles(
          v-if="column.type==='file'"
          :images="scope|fileFilter")
        span(v-else,slot-scope="scope") {{scope|textFilter}}
    slot(
      name="right")
</template>
<script>
import DatatablesFiles from './DatatablesFiles'
export default {
  name: 'Datatables',
  components: {
    DatatablesFiles
  },
  props: {
    data: {
      type: Array,
      default: () => ([])
    },
    columns: {
      type: Array,
      default: () => ([])
    }
  },
  data () {
    return {
      cellClassName: ({ column }) => {
        return column.label === '操作' ? 'operation-column' : ''
      }
    }
  },
  filters: {
    textFilter: (scope) => scope.row[scope.column.property],
    fileFilter: (scope) => scope.row[scope.column.property].map(({ url }) => 'http://localhost:8080/' + url)
  },
  methods: {
    sortChange (column, prop, order) {
      return false
    }
  }
}
</script>
