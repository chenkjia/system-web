<template lang="pug">
  .datatablespage
    slot(name="prev")
    slot(name="header")
      .datatablespage-header
        ButtonGroup.datatablespage-toolbar(
          :buttonList="toolbar")
        .datatablespage-filter-wrapper(v-if="filterList.length")
          Dataform.datatablespage-filter(
            slot="footer"
            ref="filterForm"
            size="mini"
            :inline="true"
            :dataInit="filterData"
            :formFields="filterFields"
            :buttonList="filterButtonList")
    slot(name="table")
      Datatables.datatablespage-table(
        height="1"
        :data="tableData",
        :columns="columns"
        @sort-change="sortChange")
        el-table-column.operation-column(
          v-if="operation&&operation.length"
          label="操作"
          slot="right"
          :width="operationWidth")
          template(slot-scope="scope")
            ButtonGroup(
              :data="scope.row"
              :buttonList="operation")
    slot(name="footer")
      .datatablespage-info
        el-pagination.datatablespage-pagination(
          v-if="hasPage"
          @size-change="pageSizeChange"
          @current-change="pageCurrentChange"
          :current-page="pageCurrent"
          :page-sizes="[10, 50, 100, 400]"
          :page-size="pageSize"
          layout="total, sizes, prev, pager, next, jumper"
          :total="recordsFiltered")
    slot
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
import { pick, isString, defaultsDeep, values, cloneDeep, mapValues } from 'lodash'
import { get } from '@/utils/axios'

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
      resultFields: cloneDeep(this.fields),
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
    columns () {
      return this.columnList.map((item) => ({
        ...this.resultFields[item],
        name: item
      }))
    },
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
    },
    relationList () {
      return values(this.fields).filter(({ relation }) => relation)
    }
  },
  watch: {
    resource () {
      this.getList()
    }
  },
  async mounted () {
    const relationList = this.relationList.map(({ relation }) => relation)
    const relation = await this.$store.dispatch('relation/getRelation', relationList)
    this.resultFields = mapValues(this.resultFields, (field) => {
      if (!field.relation) return field
      return {
        ...field,
        options: relation[field.relation]
      }
    })
    this.getList()
  },
  methods: {
    getList () {
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
        this.recordsTotal = res.data.recordsTotal
        this.recordsFiltered = res.data.recordsFiltered
        this.tableData = res.data.data
      })
    },
    getRelation: (relationList) => {
      return new Promise((resolve, reject) => {
        get({
          url: 'relation',
          params: {
            relation: relationList
          }
        }).then((data) => {
          resolve(data.data)
        })
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
  display: flex
  flex-direction: column
  flex: 1
  padding: 20px
  overflow: hidden
.datatablespage-header
  max-height: 29px
  margin-bottom: 1em
  display: flex
  justify-content: space-between
  .datatablespage-filter-wrapper
    overflow: hidden
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
      // margin-left: 10px
      // margin-right: 0
      // margin-bottom: 0
  .datatablespage-toolbar
    margin-right: 1em
.datatablespage-table
  flex: 1
.datatablespage-info>div
  margin-top: 1em
.datatablespage-pagination
  text-align: right
.operation-column
  padding: 5px 0 4px
.dataform-dialog /deep/ .el-dialog__body
  padding: 0
</style>
