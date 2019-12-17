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
    el-table(
      v-bind="$attrs"
      v-on="$listeners"
      v-loading="loading"
      :data="tableData"
      border
      size="small"
      style="width: 100%"
      height="1"
      element-loading-text="拼命加载中"
      element-loading-spinner="el-icon-loading"
      element-loading-background="rgba(0, 0, 0, 0.2)"
      :empty-text="loading?' ':'暂无数据'"
      :cell-class-name="cellClassName"
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
      el-table-column(
        v-if="loading"
        label=" "
        :width="1")
    slot(name="footer")
      .datatablespage-footer
        slot(name="info")
          .datatablespage-info asdfsad
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

const orders = {
  ascending: 1,
  descending: -1
}

export default {
  name: 'Datatables',
  mixins: [Pagination, FilterForm],
  props: {
    resource: {
      type: String,
      default: ''
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
      tableData: [],
      loading: false,
      cellClassName: ({ column }) => {
        return column.label === '操作' ? 'operation-column' : ''
      }
    }
  },
  watch: {
    resource () {
      this.getList()
    }
  },
  mounted () {
    this.getList()
  },
  methods: {
    getList () {
      this.loading = true
      this.$get({
        url: this.resource,
        params: {
          limit: this.hasPage ? this.pageSize : 9999999,
          skip: this.hasPage ? (this.pageCurrent - 1) * this.pageSize : 0,
          sort: this.sortData,
          filter: this.filterData,
          fields: this.fields
        }
      }).then((res) => {
        this.loading = false
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
.datatables-main
  display: flex
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
