<template lang="pug">
  div.el-select-dropdown.el-popper.form-icon-dropdown
    .dropdown-icons.clearfix
      .dropdown-icon(
        v-for="icon in icons"
        :key="icon")
        .dropdown-icons-content.iconfont(
          :class="`icon${icon}`"
          @click="iconSelect(icon)")
    slot
</template>

<script>
import axios from 'axios'
import Popper from 'element-ui/src/utils/vue-popper'
// 表单里的Icon选择器
export default {
  name: 'DataformIconDropdown',
  mixins: [Popper],
  props: {
    placement: {
      default: 'bottom-start'
    },
    boundariesPadding: {
      default: 0
    },
    value: {
      type: String
    }
  },
  data () {
    return {
      icons: []
    }
  },
  methods: {
    getIcons () {
      axios({ url: '/icon/iconfont.css' }).then((req) => {
        this.icons = req.data
          .split('.icon')
          .filter(item => item.includes(':before'))
          .map(item => item.split(':before')[0])
      })
    },
    iconSelect (icon) {
      this.$emit('iconSelect', icon)
    }
  },
  mounted () {
    this.getIcons()
  }
}
</script>
<style lang="sass" scoped>
.form-icon-dropdown
  width: 250px
.dropdown-icons
  padding: 4px
.dropdown-icon
  float: left
  width: 32px
  height: 32px
  border: 1px solid #fff
  border-radius: 4px
  cursor: pointer
  &:hover
    border-color: #C0C4CC
  .dropdown-icons-content
    padding: 0 6px
    color: #C0C4CC
    font-size: 20px
    line-height: 32px
</style>
