<template lang="pug">
  DatatablesPage(
    resource="demo/datatables/page"
    :draggable="true"
    :columns="columns"
    :filterFields="filterFields"
    :operationList="operationList")
</template>
<script>
import { fieldsFormat, fieldsGetRelation } from '@/utils/fieldsFormat.js'
import { fields, columnList, filterList } from './fields'
export default {
  name: 'menus',
  data () {
    return {
      operationList: ['delete'],
      columns: [],
      filterFields: []
    }
  },
  async created () {
    this.columns = await fieldsGetRelation(fieldsFormat(fields, columnList))
    this.filterFields = await fieldsGetRelation(fieldsFormat(fields, filterList, 'filter'))
  }
}
</script>
