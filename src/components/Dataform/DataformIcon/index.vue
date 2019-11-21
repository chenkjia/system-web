<template lang="pug">
  .form-icon(
    :class="`form-icon--${inputSize}`"
    @click="toggleDropdown"
    v-clickoutside="closeDropdown")
    .form-icon-input.iconfont(
      :class="`icon${value}`")
    DataformIconDropdown(
      v-show="visible"
      @iconSelect="handleSelect")
</template>

<script>
import Clickoutside from 'element-ui/src/utils/clickoutside'
import DataformIconDropdown from './DataformIconDropdown'

// 表单里的Icon选择器
export default {
  name: 'DataformIcon',
  components: {
    DataformIconDropdown
  },
  props: {
    size: {
      type: String,
      default: ''
    },
    value: {
      type: String,
      default: ''
    }
  },
  directives: { Clickoutside },
  inject: {
    elForm: {
      default: ''
    },
    elFormItem: {
      default: ''
    }
  },
  data () {
    return {
      icons: [],
      visible: false
    }
  },
  computed: {
    // 通过表单定义的大小
    elFormSize () {
      return (this.elForm || {}).size
    },
    // 通过表单项定义的大小
    elFormItemSize () {
      return (this.elFormItem || {}).size
    },
    // 最终计算得出的大小
    inputSize () {
      return this.size || this.elFormItemSize || this.elFormSize
    }
  },
  methods: {
    // icon选择界面开关方法
    toggleDropdown () {
      this.visible = !this.visible
    },
    // icon选择界面关闭方法
    closeDropdown () {
      this.visible = false
    },
    // icon选择方法
    handleSelect (icon) {
      this.$emit('input', icon)
    }
  }
}
</script>
<style lang="sass" scoped>
.form-icon
  position: relative
  top: 3px
  width: 40px
  height: 40px
  border: 1px solid #DCDFE6
  border-radius: 4px
  cursor: pointer
  &:hover
    border-color: #C0C4CC
  .form-icon-input
    height: 40px
    padding: 0 6px
    color: #C0C4CC
    font-size: 28px
    line-height: 40px
  &.form-icon--medium
    width: 36px
    height: 36px
    .form-icon-input
      height: 36px
      font-size: 24px
      line-height: 36px
  &.form-icon--small
    width: 32px
    height: 32px
    .form-icon-input
      height: 32px
      font-size: 20px
      line-height: 32px
  &.form-icon--mini
    width: 28px
    height: 28px
    .form-icon-input
      height: 28px
      font-size: 16px
      line-height: 28px
</style>
