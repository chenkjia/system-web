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
            :row="scope.row"
            :buttonList="operation")
    el-dialog(
      title="添加"
      :visible.sync="createDialogVisible"
      width="30%")
      Dataform(:columns="columns")
      span(slot="footer")
        el-button(@click="createDialogVisible=false") 取 消
        el-button(type="primary",@click="createDialogVisible=false") 确 定
</template>
<script>
import { pick, isString, defaultsDeep } from 'lodash'

import { getList, deleteSingle } from '@/api/common'

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
      createDialogVisible: false,
      toolbarPreset: {
        create: {
          label: '添加',
          type: 'primary',
          func: () => {
            this.createDialogVisible = true
          }
        }
      },
      operationPreset: {
        update: {
          label: '编辑',
          func: (row) => {
            const params = pick(row, ['_id'])
            deleteSingle('setcategories', params).then((res) => {
              if (res.code === 0) {
                this.getList()
              }
            })
          }
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
              deleteSingle('setcategories', params).then((res) => {
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
      getList('setcategories').then((res) => {
        this.tableData = res.data
      })
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
</style>
