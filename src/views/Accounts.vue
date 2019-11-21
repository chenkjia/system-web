<template lang="pug">
  DatatablesPage(
    resource="accounts"
    :fields="fields"
    :columnList="columnList"
    :filterList="filterList"
    :createList="createList"
    :updateList="updateList"
    :toolbarList="toolbarList"
    :operationList="operationList")
</template>
<script>
const columnList = ['jobNumber', 'username', 'fullname', 'photo', 'mobile', 'enabled', 'remark']
export default {
  name: 'accounts',
  data () {
    return {
      toolbarList: ['create'],
      operationList: ['update', 'delete'],
      columnList,
      filterList: ['jobNumber', 'username', 'fullname', 'mobile', 'enabled'],
      createList: columnList,
      updateList: columnList,
      fields: {
        jobNumber: {
          label: '工号',
          form: {
            formtype: 'input'
          },
          filter: {
            like: true
          }
        },
        username: {
          label: '账号',
          form: {
            formtype: 'input'
          },
          filter: {
            like: true
          }
        },
        fullname: {
          label: '姓名',
          form: {
            formtype: 'input'
          },
          filter: {
            like: true
          }
        },
        mobile: {
          label: '联系电话',
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
        photo: {
          label: '照片',
          form: {
            formtype: 'file'
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
