<template lang="pug">
  DatatablesPage(
    ref="DatatablesPage"
    :hasPage="false"
    :resource="resource"
    :columns="columns"
    :createFields="createFields"
    :updateFields="updateFields"
    :toolbarList="toolbarList"
    :operationList="operationList")
</template>
<script>
import { fieldsFormat, fieldsGetRelation } from '@/utils/fieldsFormat.js'
import { fields, columnList, createList, updateList } from './optionFields'
export default {
  name: 'DictionaryOption',
  props: {
    dictionaryGroupId: String
  },
  computed: {
    resource () {
      return `system/dictionary/option?dictionaryId=${this.dictionaryGroupId}`
    }
  },
  data () {
    return {
      toolbarList: ['create'],
      operationList: ['update', 'delete'],
      columns: [],
      createFields: [],
      updateFields: []
    }
  },
  async created () {
    this.columns = await fieldsGetRelation(fieldsFormat(fields, columnList))
    this.createFields = await fieldsGetRelation(fieldsFormat(fields, createList, 'create'))
    this.updateFields = await fieldsGetRelation(fieldsFormat(fields, updateList, 'update'))
  }
}
</script>
