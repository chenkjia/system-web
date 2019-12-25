<template lang="pug">
  DatatablesPage(
    resource="demo/datatables/nestedField"
    :serverSide="true"
    :columns="columns"
    :filterFields="filterFields")
</template>
<script>
import { fieldsFormat, fieldsGetRelation } from '@/utils/fieldsFormat.js'
import { fields, columnList, filterList } from './fields'
export default {
  name: 'menus',
  data () {
    return {
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
