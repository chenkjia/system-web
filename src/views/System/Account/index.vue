<template lang="pug">
  DatatablesPage(
    ref="DatatablesPage"
    resource="system/account"
    :serverSide="true"
    :columns="columns"
    :filterFields="filterFields"
    :createFields="createFields"
    :updateFields="updateFields"
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
        :formFields="changeList"
        :buttonList="changeButtonList")
</template>
<script>
import { cloneDeep } from 'lodash'
import changePassword from './changePassword'
import { fieldsFormat, fieldsGetRelation } from '@/utils/fieldsFormat.js'
import { fields, columnList, filterList, createList, updateList } from './fields'
export default {
  name: 'account',
  mixins: [changePassword],
  data () {
    return {
      toolbarList: ['create'],
      operationList: ['update', 'delete', {
        name: 'change',
        label: '修改密码',
        func: this.changeFormInit
      }],
      columns: [],
      filterFields: [],
      createFields: [],
      updateFields: [],
      createButtonList: [{
        label: '取 消',
        func: () => {
          this.$refs.DatatablesPage.createDialogVisible = false
        }
      }, {
        label: '确 定',
        type: 'primary',
        func: ({ data, form }) => {
          form.validate((valid) => {
            const result = cloneDeep(data)
            result.password = this.$md5(data.password)
            this.$create({ url: this.$refs.DatatablesPage.resource, data: result }).then(res => {
              if (res.code === 0) {
                this.$refs.DatatablesPage.createDialogVisible = false
                this.$refs.DatatablesPage.getList()
              }
            })
          })
        }
      }]
    }
  },
  async created () {
    this.columns = await fieldsGetRelation(fieldsFormat(fields, columnList))
    this.filterFields = await fieldsGetRelation(fieldsFormat(fields, filterList, 'filter'))
    this.createFields = await fieldsGetRelation(fieldsFormat(fields, createList, 'create'))
    this.updateFields = await fieldsGetRelation(fieldsFormat(fields, updateList, 'update'))
  }
}
</script>
