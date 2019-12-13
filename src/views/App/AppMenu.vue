<template lang="pug">
  el-aside#app-menu(width="60px")
    el-popover(
      placement="right-start"
      width="800"
      trigger="hover")
      el-input(placeholder="请输入菜单名",size="small",v-model="searchMenu")
      .menus-appstore
        el-divider(content-position="left") 系统管理
        .menus-appstore-list
          router-link.menus-appstore-item(
            v-for="menu in searchResultMenus"
            :key="menu._id"
            :to="menu.url")
            .menus-appstore-content
              span.iconfont(:class="'icon'+menu.icon")
              |  {{menu.label}}
            el-rate.menus-appstore-start(
              :max="1"
              :value="menu._id|shortcutsFilter(shortcuts)"
              @change="changeShortcut(menu._id)")
      .app-menu-item(slot="reference")
        span.iconfont.iconappstore
    el-tooltip(
      v-for="menu in shortcutMenus"
      :key="menu._id"
      effect="dark"
      :content="menu.label"
      placement="right")
      router-link.app-menu-item(
        :to="menu.url")
        span.iconfont(:class="'icon'+menu.icon")
</template>

<script>
import { keyBy } from 'lodash'
export default {
  name: 'AppMenu',
  props: {
    menus: {
      type: Array,
      default: () => ([])
    }
  },
  data () {
    return {
      searchMenu: ''
    }
  },
  computed: {
    searchResultMenus () {
      return this.searchMenu === '' ? this.menus : this.menus.filter(({ label }) => {
        return label.includes(this.searchMenu)
      })
    },
    menusObject () {
      return this.menus.length ? keyBy(this.menus, '_id') : {}
    },
    shortcuts () {
      return this.$store.getters.shortcuts
    },
    shortcutMenus () {
      return this.shortcuts.map(shortcut => {
        return this.menusObject[shortcut]
      })
    }
  },
  filters: {
    shortcutsFilter (menuId, shortcuts) {
      return Number(shortcuts.includes(menuId))
    }
  },
  methods: {
    changeShortcut (menuId) {
      this.$store.dispatch('user/changeShortcuts', menuId)
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
    cursor: pointer
    &:hover
      color: #333
      background-color: #eee
    .iconfont
      display: block
      padding: 0 18px
      line-height: 60px
      font-size: 24px
.menus-appstore-list
  width: 100%
  display: flex
  flex-direction: row
  flex-wrap: wrap
  justify-content: space-between
  .menus-appstore-item
    display: flex
    justify-content: space-between
    width: 30%
    padding: 6px
    border-radius: 4px
    color: #606266
    text-decoration: none
    &:hover
      background: #EBEEF5
      .menus-appstore-start
        display: block
    .menus-appstore-content
      flex: 1
    .menus-appstore-start
      display: none
      &[aria-valuenow="1"]
        display: block
</style>
