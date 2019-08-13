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
    slot(
      name="right")
</template>
<script>

export default {
  name: 'Datatables',
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
  methods: {
    sortChange (column, prop, order) {
      console.log(column, prop, order)
      return false
    }
  }
}
</script>
<style lang="scss">
.el-table--small .operation-column {
  padding: 5px 0 4px
}
</style>
