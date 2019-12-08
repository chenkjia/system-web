<template lang="pug">
  DatatablesPage(
    ref="DatatablesPage"
    :hasPage="false"
    :resource="resource"
    :fields="fields"
    :columnList="columnList"
    :createList="createList"
    :updateList="updateList"
    :toolbarList="toolbarList"
    :operationList="operationList")
</template>
<script>
const columnList = ['value', 'label']
export default {
  name: 'DictionaryOptions',
  props: {
    dictionaryGroupId: String
  },
  computed: {
    resource () {
      return `dictionaries/options?dictionaryId=${this.dictionaryGroupId}`
    }
  },
  data () {
    return {
      toolbarList: ['create'],
      operationList: ['update', 'delete'],
      columnList,
      createList: columnList,
      updateList: columnList,
      fields: {
        value: {
          label: '字典项值',
          form: {
            formtype: 'input'
          },
          filter: {
            like: true
          }
        },
        label: {
          label: '字典项名称',
          form: {
            formtype: 'input'
          },
          filter: {
            like: true
          }
        },
        remark: {
          label: '备注',
          form: {
            formtype: 'input',
            type: 'textarea',
            resize: 'none',
            autosize: true
          },
          filter: {
            formtype: 'input'
          }
        }
      }
    }
  },
  methods: {
    handleRemove (file, fileList) {
      console.log(file, fileList)
    },
    handlePreview (file) {
      console.log(file)
    }
  }
}
</script>
