<template lang="pug">
  .datatablespage
    slot.datatablespage-prev(name="prev")
    slot.datatablespage-main(name="datatable")
      Datatables.datatablespage-main(
        v-bind="$attrs"
        v-on="$listeners"
        ref="Datatables"
        :resource="resource"
        :columns="columns")
        el-table-column.operation-column(
          v-if="operation&&operation.length&&columns.length"
          fixed="right"
          label="操作"
          :width="operationWidth")
          template(slot-scope="scope")
            ButtonGroup(
              :data="scope.row"
              :buttonList="operation")
        slot(name="header",slot="header")
        ButtonGroup.datatablespage-toolbar(
          :buttonList="toolbar",slot="toolbar")
        slot(name="filter",slot="filter")
        slot(name="footer",slot="footer")
        slot(name="info",slot="info")
        slot(name="pagination",slot="pagination")
    slot
    slot.datatablespage-next(name="next")
    el-dialog.dataform-dialog(
      title="添加"
      v-if="createDialogVisible"
      :visible.sync="createDialogVisible"
      :append-to-body="true"
      width="25%")
      Dataform(
        slot="footer"
        ref="createForm"
        size="small"
        label-position="right"
        label-width="100px"
        :dataInit="createData"
        :formFields="createFields"
        :buttonList="createButtons")
    el-dialog.dataform-dialog(
      title="编辑"
      v-if="updateDialogVisible"
      :visible.sync="updateDialogVisible"
      :append-to-body="true"
      width="25%")
      Dataform(
        slot="footer"
        ref="updateForm"
        size="small"
        label-position="right"
        label-width="100px"
        :dataInit="updateData"
        :formFields="updateFields"
        :buttonList="updateButtons")
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
  mixins: [ CreateForm, UpdateForm ],
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
    fields: {
      type: Object,
      default: () => ({})
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
              this.$remove({ url: this.resource, params }).then(res => {
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
    operationWidth () {
      const fontSize = 12
      const buttonSize = 32
      const gridSize = 10
      return this.operation.reduce((result, item) => {
        // 文字的长度+按钮的长度+间距
        return result + item.label.length * fontSize + buttonSize + gridSize
      }, 22 - gridSize)
    },
    toolbar () {
      return buttonListReset(this.toolbarList, this.toolbarPreset)
    }
  },
  methods: {
    getList () {
      this.$refs.Datatables.getList()
    }
  }
}
</script>
<style lang="sass" scoped>
.datatablespage
  display: flex
  flex-direction: column
  flex: 1
  padding: 20px
  overflow: hidden
.datatablespage-main
  flex: 1
  flex-direction: column
.operation-column
  padding: 5px 0 4px
.dataform-dialog /deep/ .el-dialog__body
  padding: 0
</style>
