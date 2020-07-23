<template lang='pug'>
el-form(
  v-bind="$attrs"
  ref="comparedForm"
  :rules="rules")
  el-form-item.compared-form__item
    el-table.compared-form__container(
      v-bind="$attrs"
      size="small"
      ref="table"
      :stripe="true"
      :border="true"
      :data="tableData"
      @select="selectChange")
      el-table-column(
        type="selection"
        width="55"
        :selectable="getSelectable")
      el-table-column.compared-form__header(
        v-for="headitem in computedHeadkeys"
        v-if="!headitem.isForm"
        :key="headitem.headkey"
        :label="headitem.label"
        :prop="headitem.headkey")
      //- 无法在slot中用if
      el-table-column.compared-form__header(
        :label="formHeadFlag.label"
        :prop="formHeadFlag.headkey")
        template(slot-scope="scope")
          //- v-model 只改变tableData，但无法监听到tableData
          //- v-model="tableData[scope.$index][formHeadFlag.headkey]"
          component(
            :is="formFields[scope.$index]|filterComponent(dataFormItem)"
            :field="formFields[scope.$index]"
            :disabled="readOnly"
            v-model="tableData[scope.$index][formHeadFlag.headkey]"
            size="small"
            v-bind="formFields[scope.$index].form"
             @change="getChange($event, scope)")
  el-form-item.compared-form__item
    ButtonGroup(
      :data="buttonProps"
      :buttonList="buttonList")
</template>

<script>
/**
 * @module ComparedForm 对比性表单
 * @author linmn
 * @description 原值与新值对比，
 * 1.存在新值或已做新值修改，则自动高亮提醒，且不允许两个值内容一样;
 * 2.允许点击勾选一键取消修改
 * 3.允许权限控制
 */
import DataFormItemReg from '../Dataform/DataFormItemReg'
import { cloneDeep, camelCase } from 'lodash'
import check from './plugins/check'
export default {
  name: 'ComparedForm',
  mixins: [DataFormItemReg, check],
  /**
   * @property {Object} dataInit 表单数据
   * @property {Array} formFields 配置与原先的columns和formList的结合, 表单字段字典，可详细查看columns配置。
   * @property {Boolean} readOnly 是否只读
   * @property {Array} buttonList 按钮组列表
   * @property {String} buttonAlign 按钮组列表
   * @property {Object} keyGroup 原值、拟变更值关键字对象，
   *  格式：{origin: {pre: '', append: ''}, change: {pre: '', append: ''}}
   * */
  props: {
    dataInit: {
      type: Object,
      default: () => ({})
    },
    formFields: {
      type: Array,
      required: true,
      default: () => ([])
    },
    readOnly: {
      type: Boolean,
      default: false
    },
    /* 按钮属性 */
    buttonList: {
      type: Array,
      required: true,
      default: () => ([])
    },
    buttonAlign: {
      type: String,
      default: 'right',
      validator: (value) => {
        return ['left', 'center', 'right'].indexOf(value) > -1
      }
    },
    keyGroup: {
      type: Object,
      default: () => {
        return {
          origin: {
            pre: 'origin',
            append: ''
          }, // 原值是以'origin'开头的,如:originDate,则传pre: 'origin'
          change: {
            pre: 'change',
            append: 'diff'
          } // 拟变更值是以'change'开头,以'diff'结尾,如:changeDateDiff
        }
      }
    } // 关键字段的拼接,即:
  },
  computed: {
    originkey () {
      const key = this.keyGroup.origin
      return this.transFieldName(key.pre, key.append)
    },
    changekey () {
      const key = this.keyGroup.change
      return this.transFieldName(key.pre, key.append)
    },
    computedHeadkeys () {
      return this.headerkeys.map((head) => {
        const { key, isLabel } = head
        if (isLabel) {
          return { ...head, headkey: key }
        }
        const prekey = this.keyGroup[key].pre
        const appendkey = this.keyGroup[key].append
        return {
          ...head,
          prekey,
          appendkey,
          headkey: camelCase(`${prekey},${appendkey}`)
        }
      })
    },
    formHeadFlag () {
      return this.computedHeadkeys[this.computedHeadkeys.length - 1]
    },
    tableData () {
      const originData = cloneDeep(this.dataInit)
      return this.formFields.map(field => {
        const originkeys = this.keyGroup.origin
        const originkey = this.transFieldName(originkeys.pre, field.name, originkeys.append)
        return this.computedHeadkeys.reduce((res, { headkey, prekey, appendkey, isLabel }) => {
          const fieldkey = this.transFieldName(prekey, field.name, appendkey)
          // 字段映射表
          const fieldRelation = isLabel ? res.__fieldkeys__ : {
            ...res.__fieldkeys__,
            [fieldkey]: headkey
          }
          return {
            ...res,
            [headkey]: isLabel ? field.label : originData[fieldkey] || originData[originkey] || null,
            '__allowSelect__': false,
            '__fieldkeys__': fieldRelation
          }
        }, { '__fieldkeys__': {} })
      })
    },
    rules () {
      const rules = this.formFields.reduce((result, current, index) => {
        return !current.form.rules ? result : {
          ...result,
          [current.name]: current.form.rules
        }
      }, {})
      return rules
    },
    formData () {
      return this.formatFormdata(this.tableData)
    },
    buttonProps () {
      return {
        data: this.formatFormdata(this.tableData),
        refs: this.$refs,
        form: this
      }
    }
  },
  filters: {
    filterComponent (formitem, reg) {
      return formitem.form ? reg[formitem.form.tag] : reg['render']
    }
  },
  data () {
    return {
      // 头部信息
      headerkeys: [{
        label: '信息项目',
        key: 'label',
        isLabel: true
      }, {
        label: '原值',
        key: 'origin'
      }, {
        label: '拟变更值',
        key: 'change',
        isForm: true
      }]
    }
  },
  methods: {
    transFieldName (pre = '', key = '', append = '') {
      if (!pre && !append) return camelCase(key)
      return camelCase(pre + ',' + key + ',' + append)
    },
    formatFormdata (tableData) {
      return tableData.reduce((res, data) => {
        const fieldDatas = Object.entries(data.__fieldkeys__).reduce((preData, [key, value]) => {
          preData[key] = data[value]
          return preData
        }, {})
        return Object.assign(res, fieldDatas)
      }, {})
    },
    resetData () {
      this.tableData.map(data => {
        this.$set(data, this.changekey, data[this.originkey])
        this.$nextTick(() => {
          this.getChange(data[this.originkey], { row: data })
        })
      })
    }
  }
}
</script>

<style lang='sass' scoped>

</style>
