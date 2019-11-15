<template lang="pug">
  DatatablesPage(
    resource="menus"
    :fields="fields"
    :columnList="columnList"
    :filterList="filterList"
    :createList="createList"
    :updateList="updateList"
    :toolbarList="toolbarList"
    :operationList="operationList")
</template>
<script>
const columnList = ['label', 'type', 'url', 'icon', 'enabled', 'remark']
export default {
  name: 'organizations',
  data () {
    return {
      toolbarList: ['create'],
      operationList: ['update', 'delete'],
      columnList,
      filterList: ['label', 'type', 'enabled'],
      createList: columnList,
      updateList: columnList,
      fields: {
        label: {
          label: '菜单名称',
          form: {
            formtype: 'input'
          },
          filter: {
            like: true
          }
        },
        type: {
          label: '菜单类型',
          form: {
            formtype: 'select'
          },
          filter: {
            formtype: 'select'
          }
        },
        url: {
          label: '路径',
          form: {
            formtype: 'input'
          },
          filter: {
            like: true
          }
        },
        icon: {
          label: '图标',
          form: {
            formtype: 'icon'
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
