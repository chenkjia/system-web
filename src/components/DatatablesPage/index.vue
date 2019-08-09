<template lang="pug">
  div
    ButtonGroup.toolbar(
      :buttonList="toolbar")
    Datatables(
      :data="tableData",
      :columns="columns")
      el-table-column.operation-column(
        v-if="operation&&operation.length"
        label="操作"
        slot="right")
        template(slot-scope="scope")
          ButtonGroup(
            :data="scope.row"
            :buttonList="operation")
    el-dialog.dataform-dialog(
      title="添加"
      :visible.sync="createDialogVisible"
      width="25%")
      Dataform(
        slot="footer"
        ref="createForm"
        label-position="right"
        label-width="100px"
        :dataInit="createData"
        :columns="columns"
        :buttonList="createButtonList")
    el-dialog.dataform-dialog(
      title="编辑"
      :visible.sync="updateDialogVisible"
      width="25%")
      Dataform(
        slot="footer"
        ref="updateForm"
        label-position="right"
        label-width="100px"
        :dataInit="updateData"
        :columns="columns"
        :buttonList="updateButtonList")
</template>
<script>
import { pick, isString, defaultsDeep } from 'lodash'

import CreateForm from './CreateForm'
import UpdateForm from './UpdateForm'

const buttonListReset = (buttonList, buttonPreset) => {
  return buttonList.map(item => {
    if (isString(item)) {
      item = { name: item }
    }
    return defaultsDeep(item, buttonPreset[item.name])
  })
}
export default {
  name: 'DatatablesPage',
  mixins: [CreateForm, UpdateForm],
  props: {
    resource: String,
    data: {
      type: Array,
      default: () => ([])
    },
    columns: {
      type: Array,
      default: () => ([])
    },
    toolbarList: {
      type: Array,
      default: () => ([])
    },
    operationList: {
      type: Array,
      default: () => ([])
    }
  },
  data () {
    return {
      tableData: [],
      toolbarPreset: {
        create: {
          label: '添加',
          type: 'primary',
          func: this.createFormInit
        }
      },
      operationPreset: {
        update: {
          label: '编辑',
          func: this.updateFormInit
        },
        delete: {
          label: '删除',
          func: (row) => {
            this.$confirm('删除该信息, 是否继续?', '提示', {
              confirmButtonText: '删除',
              cancelButtonText: '取消',
              type: 'warning'
            }).then(() => {
              const params = pick(row, ['_id'])
              this.$deleteSingle({ url: this.resource, params }).then(res => {
                if (res.code === 0) {
                  this.getList()
                }
              })
            })
          }
        }
      }
    }
  },
  computed: {
    operation () {
      return buttonListReset(this.operationList, this.operationPreset)
    },
    toolbar () {
      return buttonListReset(this.toolbarList, this.toolbarPreset)
    }
  },
  mounted () {
    this.getList()
  },
  methods: {
    getList () {
      this.$getList({ url: this.resource }).then((res) => {
        this.tableData = res.data
      })
    },
    editFormSubmit () {
      console.log(this.$refs.editForm.formData)
    }
  }
}
</script>
<style lang="scss" scoped>
.toolbar {
  margin-bottom: 1em
}
.operation-column {
  padding: 5px 0 4px
}
.dataform-dialog /deep/ .el-dialog__body {
  padding: 0
}
</style>
