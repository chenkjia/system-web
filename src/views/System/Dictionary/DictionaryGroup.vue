<template lang="pug">
  DatatablesPage(
    resource="system/dictionary"
    :serverSide="true"
    :columns="columns"
    :filterFields="filterFields"
    :createFields="createFields"
    :updateFields="updateFields"
    :toolbarList="toolbarList"
    :operationList="operationList")
</template>
<script>
import { fieldsFormat, fieldsGetRelation } from '@/utils/fieldsFormat.js'
import { fields, columnList, filterList, createList, updateList } from './groupFields'
export default {
  name: 'DictionaryGroup',
  data () {
    return {
      toolbarList: ['create'],
      operationList: ['update', 'delete', {
        name: 'options',
        label: '编辑字典项',
        func: (data) => {
          this.$emit('selectDictionaryGroup', data)
        }
      }],
      columns: [],
      filterFields: [],
      createFields: [],
      updateFields: []
    }
  },
  async created () {
    this.columns = await fieldsGetRelation(fieldsFormat(fields, columnList))
    this.filterFields = await fieldsGetRelation(fieldsFormat(fields, filterList, 'filter'))
    this.createFields = await fieldsGetRelation(fieldsFormat(fields, createList, 'create'))
    this.updateFields = await fieldsGetRelation(fieldsFormat(fields, updateList, 'update'))
  }
}
</script>
