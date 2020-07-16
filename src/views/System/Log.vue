<template lang="pug">
  DatatablesPage(
    resource="system/menus"
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
  name: 'log',
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
            tag: 'input'
          },
          filter: {
            like: true
          }
        },
        type: {
          label: '菜单类型',
          form: {
            tag: 'select'
          },
          filter: {
            tag: 'select'
          }
        },
        url: {
          label: '路径',
          form: {
            tag: 'input'
          },
          filter: {
            like: true
          }
        },
        icon: {
          label: '图标',
          form: {
            tag: 'icon'
          },
          filter: {
            like: true
          }
        },
        enabled: {
          label: '是否启用',
          form: {
            tag: 'switch'
          },
          filter: {
            tag: 'select'
          }
        },
        remark: {
          label: '备注',
          form: {
            tag: 'input',
            type: 'textarea',
            resize: 'none',
            autosize: true
          },
          filter: {
            tag: 'input'
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
