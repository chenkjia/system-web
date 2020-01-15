<template lang="pug">
  .double-column-layout(:style="{flexDirection: direction}")
    div.double-column-layout-main(:style="mainStyle")
      slot(name="main")
      div.double-column-layout-btn.el-button.is-plain(
        :class="`double-column-layout-${subBtnDirection}Btn`"
        @click="handleClickMainBtn")
        .iconfont(:class="`iconcaret-${mainBtnDirection}`")
    div.double-column-layout-sub(:style="subStyle")
      slot(name="sub")
      div.double-column-layout-btn.el-button.is-plain(
        :class="`double-column-layout-${mainBtnDirection}Btn`"
        @click="handleClickSubBtn")
        .iconfont(:class="`iconcaret-${subBtnDirection}`")
</template>

<script>
const directionList = ['row', 'row-reverse', 'column', 'column-reverse']
const arrowList = ['left', 'right', 'up', 'down']

/**
 * @module DoubleColumnLayout
 * 双栏布局组件
*/
export default {
  name: 'DoubleColumnLayout',
  props: {
    // 分栏状态：main只显示主栏，both显示两栏，sub只显示次栏
    value: {
      type: String,
      validator: (value) => ['main', 'both', 'sub'].includes(value),
      default: 'main'
    },
    // 分栏方向
    direction: {
      type: String,
      validator: (value) => directionList.includes(value),
      default: 'row'
    },
    // 主栏大小
    mainGrow: {
      type: Number,
      default: 4
    },
    // 次栏大小
    subGrow: {
      type: Number,
      default: 3
    }
  },
  computed: {
    // 计算主栏占位
    mainStyle () {
      return {
        flex: this.value !== 'sub' ? this.mainGrow : 0
      }
    },
    // 计算次栏占位
    subStyle () {
      return {
        flex: this.value !== 'main' ? this.subGrow : 0
      }
    },
    // 计算主栏按钮方向
    mainBtnDirection () {
      return arrowList[directionList.indexOf(this.direction)]
    },
    // 计算次栏按钮方向
    subBtnDirection () {
      const index = directionList.indexOf(this.direction)
      const isSimple = index % 2 === 1
      return arrowList[isSimple ? index - 1 : index + 1]
    }
  },
  methods: {
    // 主栏按钮事件
    handleClickMainBtn () {
      this.value === 'main' ? this.setState('both') : this.setState('sub')
    },
    // 次栏按钮事件
    handleClickSubBtn () {
      this.value === 'sub' ? this.setState('both') : this.setState('main')
    },
    // 状态改变事件
    setState (state) {
      this.$emit('input', state)
    }
  }
}
</script>
<style lang="sass" scoped>
.double-column-layout
  width: 100%
  display: flex
  flex: 1
  .double-column-layout-main,.double-column-layout-sub
    display: flex
    height: 100%
    position: relative
    overflow: hidden
    transition: flex 0.1s
    box-shadow: 0 0 2px 2px #dcdfe6
    align-items: stretch
  .double-column-layout-main
    margin-right: 4px
  .double-column-layout-btn
    position: absolute
    padding: 0
    box-sizing: inherit
    z-index: 998
  .double-column-layout-leftBtn,
  .double-column-layout-rightBtn
    top: 50%
    height: 100px
    line-height: 100px
    transform: translate(0, -50%)
  .double-column-layout-upBtn,
  .double-column-layout-downBtn
    left: 50%
    width: 100px
    text-align: center
    transform: translate(-50%, 0)
  .double-column-layout-leftBtn
    left: 0
    border-left: 0
    border-top-left-radius: 0
    border-bottom-left-radius: 0
  .double-column-layout-rightBtn
    right: 0
    border-right: 0
    border-top-right-radius: 0
    border-bottom-right-radius: 0
  .double-column-layout-upBtn
    top: 0
    border-top: 0
    border-top-left-radius: 0
    border-top-right-radius: 0
  .double-column-layout-downBtn
    bottom: 0
    border-bottom: 0
    border-bottom-right-radius: 0
    border-bottom-left-radius: 0
</style>
