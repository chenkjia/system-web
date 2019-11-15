<template lang="pug">
  DatatablesPage(
    resource="roles"
    :fields="fields"
    :columnList="columnList"
    :filterList="filterList"
    :createList="createList"
    :updateList="updateList"
    :toolbarList="toolbarList"
    :operationList="operationList")
</template>
<script>
const columnList = ['label', 'enabled', 'remark']

export default {
  name: 'roles',
  data () {
    return {
      toolbarList: ['create'],
      operationList: ['update', 'delete'],
      columnList,
      filterList: ['label', 'enabled'],
      createList: columnList,
      updateList: columnList,
      fields: {
        label: {
          label: '角色名称',
          form: {
            formtype: 'input'
          },
          filter: {
            like: true
          }
        },
        enabled: {
          label: '是否启用',
          form: {
            formtype: 'switch'
          },
          filter: {
            formtype: 'select'
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
