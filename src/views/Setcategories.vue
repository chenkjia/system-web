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
      filterList: ['label', 'name'],
      createList: columnList,
      updateList: columnList,
      fields: {
        label: {
          label: '系列名',
          sortable: true,
          form: {
            formtype: 'input'
          },
          filter: {
            like: true
          }
        },
        name: {
          label: '英文名',
          sortable: true,
          form: {
            formtype: 'input'
          },
          filter: {
            like: true
          }
        },
        logo: {
          label: 'Logo',
          type: 'file',
          form: {
            formtype: 'file'
          }
        },
        picture: {
          label: '图片',
          type: 'file',
          form: {
            formtype: 'file'
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
