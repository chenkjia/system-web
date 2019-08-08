<template lang="pug">
  el-table(
    :data="data"
    border
    size="small"
    style="width: 100%"
    :cell-class-name="cellClassName")
    slot(name="left")
    el-table-column(
      v-for="column in columns"
      :key="column.name"
      :prop="column.name"
      :label="column.label")
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
  }
}
</script>
<style lang="scss">
.el-table--small .operation-column {
  padding: 5px 0 4px
}
</style>
