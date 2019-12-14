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
const columnList = ['label', 'menus', 'enabled', 'remark']

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
          create: {
            rules: [{ required: true, message: '请输入角色名称', trigger: 'blur' }]
          },
          update: {
            rules: [{ required: true, message: '请输入角色名称', trigger: 'blur' }]
          },
          filter: {
            like: true
          }
        },
        menus: {
          label: '菜单权限',
          relation: 'menus',
          form: {
            formtype: 'select',
            multiple: true
          },
          create: {
            rules: [{ required: true, message: '请输入菜单权限', trigger: 'blur' }]
          },
          update: {
            rules: [{ required: true, message: '请输入菜单权限', trigger: 'blur' }]
          },
          filter: {
            like: true
          },
          render: {
            type: 'multiselect'
          }
        },
        enabled: {
          label: '是否启用',
          relation: 'enableOrDisable',
          form: {
            formtype: 'switch'
          },
          filter: {
            formtype: 'select'
          },
          render: {
            type: 'select'
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
