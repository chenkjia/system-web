<template lang="pug">
  el-container#app-frame
    el-header#app-header
      //- i#menu-toggle.iconfont(
      //-   :class="{ iconoutdent: asideActive, iconindent: !asideActive }"
      //-   @click="changeAsideActive"
      //- )
      AppLogo
      #app-navbar
        AppProfile(
          :fullname="fullname",
          :avatar="avatar")
    el-container#app-container
      el-aside#app-menu(
        :width="asideActive?'200px':'60px'")
        el-tooltip(
          v-for="menu in menus"
          :key="menu._id"
          effect="dark"
          :content="menu.label"
          placement="right")
          router-link.app-menu-item(
            :to="menu.url")
            span.iconfont(:class="'icon'+menu.icon")
      el-main#app-main
        router-view
</template>

<script>
import AppLogo from './AppLogo'
import AppProfile from './AppProfile'

export default {
  name: 'AppFrame',
  components: {
    AppLogo,
    AppProfile
  },
  data () {
    return {
      menus: [],
      asideActive: false
    }
  },
  methods: {
    getMenus () {
      this.$get({
        url: 'menus'
      }).then(req => {
        this.menus = req.data.data
      })
    },
    changeAsideActive () {
      this.asideActive = !this.asideActive
    },
    removeStartLoading () {
      if (document.getElementById('loading')) {
        document.body.removeChild(document.getElementById('loading'))
      }
    }
  },
  computed: {
    fullname () {
      return this.$store.getters.fullname
    },
    avatar () {
      return this.$store.getters.avatar && this.$store.getters.avatar.url
    }
  },
  created () {
    this.removeStartLoading()
    this.$store.dispatch('user/getInfo')
    this.getMenus()
  }
}
</script>

<style lang="sass" scoped>
#app
  font-family: 'Avenir', Helvetica, Arial, sans-serif
  color: #2c3e50
  position: fixed
  top: 0
  bottom: 0
  left: 0
  right: 0
#app-container
  height: 100%
#app-main
  height: 100%
  display: flex
  flex-direction: column
  padding: 0
#app-header
  z-index: 1999
  background-color: #FFF
  color: #666
  display: flex
  justify-content: space-between
  box-shadow: 2px 4px 20px -4px rgba(0,0,0,.1)
#menu-toggle
  line-height: 60px
  font-size: 28px
  padding: 0 16px
  cursor: pointer
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
