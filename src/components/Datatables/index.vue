<template lang="pug">
  .datatables-main
    slot(name="header")
      .datatablespage-header
        slot(name="toolbar")
          .datatablespage-toolbar
        slot(name="filter")
          .datatablespage-filter-wrapper(v-if="filterFields.length")
            Dataform.datatablespage-filter(
              slot="footer"
              ref="filterForm"
              size="mini"
              :inline="true"
              :dataInit="filterData"
              :formFields="filterFields"
              :buttonList="filterButtonList")
    .datatables-table-wrapper
      el-table.datatables-table(
        v-bind="$attrs"
        v-on="$listeners"
        v-loading="loading"
        :data="tableData"
        border
        size="small"
        height="1"
        element-loading-text="拼命加载中"
        element-loading-spinner="el-icon-loading"
        element-loading-background="rgba(0, 0, 0, 0.2)"
        :empty-text="loading?' ':'暂无数据'"
        :cell-class-name="cellClassName"
        :row-key="rowKey"
        lazy
        :load="treeLoad"
        @sort-change="sortChange")
        slot(name="left")
        el-table-column(
          v-for="column in columns"
          v-bind="column"
          :sortable="column.sortable?'custom':false"
          :key="column.name"
          :prop="column.name")
          template(slot-scope="scope")
            InfoRender(
              :field="column"
              :value="scope.row[scope.column.property]"
            )
        slot
        slot(name="right")
    slot(name="footer")
      .datatablespage-footer
        slot(name="info")
          .datatablespage-info
        slot(name="pagination")
          el-pagination.datatablespage-pagination(
            v-if="hasPage"
            @size-change="pageSizeChange"
            @current-change="pageCurrentChange"
            :current-page="pageCurrent"
            :page-sizes="[10, 50, 100, 400]"
            :page-size="pageSize"
            layout="total, sizes, prev, pager, next, jumper"
            :total="recordsFiltered")
</template>
<script>
import FilterForm from './FilterForm'
import Pagination from './Pagination'
import Tree from './Tree'
import getTableData from './getTableData'

export default {
  name: 'Datatables',
  mixins: [Pagination, FilterForm, Tree],
  props: {
    resource: {
      type: String,
      default: ''
    },
    // 是否使用服务端分页
    serverSide: {
      type: Boolean,
      default: false
    },
    // 分页模式
    mode: {
      type: String,
      default: 'page',
      validator: (value) => {
        // page:分页模式,roll:滚动模式,tree:树状模式
        return ['page', 'roll', 'tree'].includes(value)
      }
    },
    data: {
      type: Array,
      default: () => ([])
    },
    columns: {
      type: Array,
      default: () => ([])
    }
  },
  data () {
    return {
      sortData: {},
      tableAllData: this.data,
      tableData: [],
      loading: false,
      cellClassName: ({ column }) => {
        return column.label === '操作' ? 'operation-column' : ''
      }
    }
  },
  computed: {
    hasPage () {
      return this.mode === 'page'
    }
  },
  mounted () {
    this.initTableData()
  },
  methods: {
    initTableData () {
      // 对有绑定远程请求接口但非服务端分页的做第一次全数据请求
      if (this.resource.length && !this.serverSide) {
        this.getTableAllData()
      } else {
        this.getTableData()
      }
    },
    async getTableData () {
      // 刷新表格显示内容
      this.loading = true
      const { tableData, recordsFiltered } = await getTableData({
        serverSide: this.serverSide,
        mode: this.mode,
        resource: this.resource,
        tableAllData: this.tableAllData,
        filterData: this.filterData,
        filterFieldsObject: this.filterFieldsObject,
        sortData: this.sortData,
        pageCurrent: this.pageCurrent,
        pageSize: this.pageSize
      })
      this.recordsFiltered = recordsFiltered
      this.tableData = tableData
      this.loading = false
    },
    async getTableAllData () {
      this.loading = true
      const tableData = await getTableData({
        serverSide: true,
        mode: this.mode,
        resource: this.resource,
        tableAllData: this.tableAllData,
        filterData: this.filterData,
        filterFieldsObject: this.filterFieldsObject,
        sortData: this.sortData,
        pageCurrent: 1,
        pageSize: 999999
      })
      this.tableAllData = tableData
      this.getTableData()
    },
    sortChange (sortData) {
      this.sortData = sortData
      this.getTableData()
    }
  }
}
</script>
<style lang="sass" scoped>
.datatables-main
  display: flex
  flex: 1
  flex-direction: column
  padding: 20px
.datatables-table-wrapper
  display: flex
  flex: 1
  flex-direction: column
  .datatables-table
    display: flex
    flex: 1
    flex-direction: column
.datatablespage-header
  max-height: 45px
  display: flex
  flex-direction: row
  justify-content: space-between
  &>div
    margin-bottom: 1em
  .datatablespage-filter-wrapper
    flex: 1
    overflow: hidden
    text-align: right
    &:hover,&:focus-within
      overflow: visible
  .datatablespage-filter
    // text-align: right
    margin-bottom: -18px
    &:hover,&:focus-within
      border-radius: 4px
      position: relative
      z-index: 999
      background: #fff
      padding: 12px
      margin: -12px
      box-shadow: 0 0 5px 1px #ddd
    /deep/ .el-form-item--mini.el-form-item
      margin-left: 10px
      margin-right: 0
  .datatablespage-toolbar
    margin-right: 1em
.datatablespage-footer
  display: flex
  flex-direction: row
  justify-content: space-between
  &>div
    flex: 1
    margin-top: 1em
.datatablespage-pagination
  text-align: right
</style>
