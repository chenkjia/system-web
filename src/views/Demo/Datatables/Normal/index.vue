<template lang="pug">
  Datatables(
    :data="data"
    :columns="columns"
    :filterFields="filterFields")
</template>
<script>
import { fieldsFormat, fieldsGetRelation } from '@/utils/fieldsFormat.js'
import { fields, columnList, filterList } from './fields'
export default {
  name: 'menus',
  data () {
    const typeList = ['PAGE', 'MODULE', 'LINK', 'FRAME']
    const iconList = ['fileprotect', 'up', 'down']
    const data = Array.apply(null, { length: 13006 }).map((item, index) => {
      const type = typeList[index % typeList.length]
      return {
        label: `${type}${index}`,
        type: type,
        icon: iconList[index % iconList.length],
        enabled: Boolean(index % 2)
      }
    })
    return {
      data,
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
