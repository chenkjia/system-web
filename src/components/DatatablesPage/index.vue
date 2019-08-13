<template lang="pug">
  div.datatablespage
    slot(name="prev")
    slot(name="header")
      .datatablespage-header
        ButtonGroup.datatablespage-toolbar(
          :buttonList="toolbar")
        Dataform.datatablespage-filter(
          slot="footer"
          ref="filterForm"
          size="mini"
          :inline="true"
          :dataInit="filterData"
          :formFields="filterFields"
          :buttonList="filterButtonList")
    slot(name="table")
      Datatables(
        height="1"
        :data="tableData",
        :columns="columns"
        @sort-change="sortChange")
        el-table-column.operation-column(
          v-if="operation&&operation.length"
          label="操作"
          slot="right")
          template(slot-scope="scope")
            ButtonGroup(
              :data="scope.row"
              :buttonList="operation")
    slot(name="footer")
      .datatablespage-info
        el-pagination.datatablespage-pagination(
          @size-change="pageSizeChange"
          @current-change="pageCurrentChange"
          :current-page="pageCurrent"
          :page-sizes="[10, 50, 100, 400]"
          :page-size="pageSize"
          layout="total, sizes, prev, pager, next, jumper"
          :total="recordsFiltered")
    el-dialog.dataform-dialog(
      title="添加"
      :visible.sync="createDialogVisible"
      :append-to-body="true"
      width="25%")
      Dataform(
        slot="footer"
        ref="createForm"
        label-position="right"
        label-width="100px"
        :dataInit="createData"
        :formFields="createFields"
        :buttonList="createButtonList")
    el-dialog.dataform-dialog(
      title="编辑"
      :visible.sync="updateDialogVisible"
      :append-to-body="true"
      width="25%")
      Dataform(
        slot="footer"
        ref="updateForm"
        label-position="right"
        label-width="100px"
        :dataInit="updateData"
        :formFields="updateFields"
        :buttonList="updateButtonList")
</template>
<script>
import { pick, isString, defaultsDeep } from 'lodash'

import Pagination from './Pagination'
import CreateForm from './CreateForm'
import UpdateForm from './UpdateForm'
import FilterForm from './FilterForm'

const buttonListReset = (buttonList, buttonPreset) => {
  return buttonList.map(item => {
    if (isString(item)) {
      item = { name: item }
    }
    return defaultsDeep(item, buttonPreset[item.name])
  })
}

const orders = {
  ascending: 1,
  descending: -1
}

export default {
  name: 'DatatablesPage',
  mixins: [Pagination, CreateForm, UpdateForm, FilterForm],
  props: {
    resource: String,
    data: {
      type: Array,
      default: () => ([])
    },
    columnList: {
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
      sortData: {},
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
              this.$deleteOne({ url: this.resource, params }).then(res => {
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
    columns () {
      return this.columnList.map((item) => ({
        ...this.fields[item],
        name: item
      }))
    },
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
      this.$getList({
        url: this.resource,
        params: {
          limit: this.pageSize,
          skip: (this.pageCurrent - 1) * this.pageSize,
          sort: this.sortData,
          filter: this.filterData,
          fields: this.fields
        }
      }).then((res) => {
        this.recordsTotal = res.data.recordsTotal
        this.recordsFiltered = res.data.recordsFiltered
        this.tableData = res.data.data
      })
    },
    sortChange ({ order, prop }) {
      this.sortData = { [prop]: orders[order] }
      this.getList()
    }
  }
}
</script>
<style lang="sass" scoped>
.datatablespage
  height: 100%
  display: flex
  flex-direction: column
  flex: 1
.datatablespage-header
  margin-bottom: 1em
  display: flex;
  justify-content: space-between
  .datatablespage-filter
    margin-bottom: -18px
.datatablespage-info
  margin-top: 1em
.datatablespage-pagination
  text-align: right
.operation-column
  padding: 5px 0 4px
.dataform-dialog /deep/ .el-dialog__body
  padding: 0
</style>
