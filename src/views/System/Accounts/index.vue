<template lang="pug">
  DatatablesPage(
    resource="accounts"
    ref="DatatablesPage"
    :fields="fields"
    :columnList="columnList"
    :filterList="filterList"
    :createList="createList"
    :updateList="updateList"
    :createButtonList="createButtonList"
    :toolbarList="toolbarList"
    :operationList="operationList")
    el-dialog.dataform-dialog(
      title="修改密码"
      :visible.sync="changeDialogVisible"
      :append-to-body="true"
      width="25%")
      Dataform(
        slot="footer"
        ref="changeForm"
        size="small"
        label-position="right"
        label-width="100px"
        :dataInit="changeData"
        :formFields="changeFields"
        :buttonList="changeButtonList")
</template>
<script>
import { cloneDeep } from 'lodash'
import changePassword from './changePassword'
const columnList = ['jobNumber', 'username', 'fullname', 'roles', 'photo', 'mobile', 'enabled', 'remark']
export default {
  name: 'accounts',
  mixins: [changePassword],
  data () {
    return {
      toolbarList: ['create'],
      operationList: ['update', 'delete', {
        name: 'change',
        label: '修改密码',
        func: this.changeFormInit
      }],
      columnList,
      filterList: ['jobNumber', 'username', 'fullname', 'roles', 'mobile', 'enabled'],
      createList: ['jobNumber', 'username', 'password', 'fullname', 'roles', 'photo', 'mobile', 'enabled', 'remark'],
      updateList: columnList,
      createButtonList: [{
        label: '取 消',
        func: () => {
          this.$refs.DatatablesPage.createDialogVisible = false
        }
      }, {
        label: '确 定',
        type: 'primary',
        func: (data) => {
          const result = cloneDeep(data)
          result.password = this.$md5(data.password)
          this.$create({ url: this.$refs.DatatablesPage.resource, data: result }).then(res => {
            if (res.code === 0) {
              this.$refs.DatatablesPage.createDialogVisible = false
              this.$refs.DatatablesPage.getList()
            }
          })
        }
      }],
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
          update: {
            formtype: 'render'
          },
          render: {
            type: 'text'
          },
          filter: {
            like: true
          }
        },
        password: {
          label: '密码',
          form: {
            formtype: 'input',
            'show-password': true
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
        roles: {
          label: '角色',
          relation: 'roles',
          form: {
            formtype: 'select'
          },
          create: {
            multiple: true
          },
          update: {
            multiple: true
          },
          render: {
            type: 'multiselect'
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
        photo: {
          label: '照片',
          form: {
            formtype: 'file'
          },
          render: {
            type: 'file'
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
