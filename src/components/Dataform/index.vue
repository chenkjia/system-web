<template lang="pug">
  el-form(
    v-bind="$attrs"
    ref="dataform"
    :class="labelVisable|transLabelClass"
    :model="formData"
    :rules="rules")
    el-form-item(
      v-for="field in formFields",
      :key="field.name",
      :label="field.label"
      :prop="field.name")
      slot(name="field.name")
        component(
          :is="dataFormItem[field.form.tag]"
          :field="field"
          :placeholder="field|transPlacehoder(labelVisable)"
          v-bind="field.form"
          v-model="formData[field.name]")
    el-form-item.dataform-button-item
      ButtonGroup.dataform-button(
        :style="buttonAlign|transBtnStyle"
        :data="{data:formData,refs:this.$refs}"
        :buttonList="buttonList")
</template>

<script>
/**
 * @name Dataform 传统表单
 * @description 除了el-form的常规属性，还支持以下：
 * @property {Object} dataInit 表单数据
 * @property {Array} formFields 配置与原先的columns和formList的结合, 表单字段字典，可详细查看columns配置。
 * @property {Array} buttonList 按钮组列表
 * @property {String} buttonAlign 按钮组列表
 * */
import DataFormItemReg from './DataFormItemReg'
export default {
  name: 'Dataform',
  mixins: [DataFormItemReg],
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
    rowNum: {
      type: Number
    },
    colNum: {
      type: Number,
      default: 1
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
    /* 文本标签属性 */
    labelVisable: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      formData: this.dataInit
    }
  },
  filters: {
    transLabelClass (labelVisable) {
      return `label-visable__${labelVisable}`
    },
    transPlacehoder (field, labelVisable) {
      const { form } = field
      if (form.placeholder) return form.placeholder
      return !labelVisable ? field.label : ''
    },
    transBtnStyle (align) {
      return {
        textAlign: align
      }
    }
  },
  computed: {
    rules () {
      const rules = this.formFields.reduce((result, current) => {
        return !current.form.rules ? result : {
          ...result,
          [current.name]: current.form.rules
        }
      }, {})
      return rules
    }
  },
  watch: {
    dataInit (data) {
      this.formData = data
    }
  }
}
</script>
<style lang="sass" scoped>
.dataform-button-item
  margin-bottom: 0
.form-upload
  text-align: left

</style>
<style scoped>
.label-visable__false >>> label.el-form-item__label {
  display: none;
  width: 0 !important;
}
.label-visable__false >>> .el-form-item__content {
  margin-left: 0 !important;
}
</style>
