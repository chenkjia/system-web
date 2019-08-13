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
const columnList = ['label', 'name', 'logo', 'picture']
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
          label: '系列名',
          sortable: true,
          form: {
            type: 'input'
          },
          filter: {
            like: true
          }
        },
        name: {
          label: '英文名',
          sortable: true,
          form: {
            type: 'input'
          },
          filter: {
            like: true
          }
        },
        logo: {
          label: 'Logo',
          sortable: true,
          form: {
            type: 'file'
          },
          filter: {
            like: true
          }
        },
        picture: {
          label: '图片',
          sortable: true,
          form: {
            type: 'file'
          },
          filter: {
            like: true
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
