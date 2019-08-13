<template lang="pug">
  DatatablesPage(
    resource="setcategories"
    :fields="fields"
    :columnList="columnList"
    :filterList="filterList"
    :createList="createList"
    :updateList="updateList"
    :toolbarList="toolbarList"
    :operationList="operationList")
</template>
<script>
const columnList = ['label', 'name']
export default {
  name: 'home',
  data () {
    return {
      toolbarList: ['create'],
      operationList: ['update', 'delete'],
      columnList,
      filterList: columnList,
      createList: columnList,
      updateList: columnList,
      fields: {
        label: {
          name: 'label',
          label: '系列名',
          form: {
            type: 'input'
          }
        },
        name: {
          name: 'name',
          label: '英文名',
          form: {
            type: 'input'
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
