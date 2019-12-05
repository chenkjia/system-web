<template lang="pug">
  el-aside#app-menu(width="60px")
    el-tooltip(
      v-for="menu in menus"
      :key="menu._id"
      effect="dark"
      :content="menu.label"
      placement="right")
      router-link.app-menu-item(
        :to="menu.url")
        span.iconfont(:class="'icon'+menu.icon")
</template>

<script>
export default {
  name: 'AppMenu',
  props: {
    menus: {
      type: Array,
      default: () => ([])
    }
  }
}
</script>

<style lang="sass" scoped>
#app-menu
  border-right: 1px solid rgba(0,0,0,.05)
  background-color: #FFF
  .app-menu-item
    display: block
    color: #666
    background-color: #FFF
    text-decoration: none
    &:hover
      color: #333
      background-color: #eee
    .iconfont
      display: block
      padding: 0 18px
      line-height: 60px
      font-size: 24px
</style>
