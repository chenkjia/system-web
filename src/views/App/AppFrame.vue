<template lang="pug">
  el-container#app-frame
    el-header#app-header
      AppLogo
      #app-navbar
        AppProfile(
          :fullname="fullname",
          :avatar="avatar")
    el-container#app-container
      AppMenu(:menus="menus")
      .app-tagsview-container(v-if="menus.length")
        TagsView
        AppMain
</template>

<script>
import AppLogo from './AppLogo'
import AppProfile from './AppProfile'
import AppMenu from './AppMenu'
import AppMain from './AppMain'
import TagsView from './TagsView'

export default {
  name: 'AppFrame',
  components: {
    AppLogo,
    AppProfile,
    AppMenu,
    AppMain,
    TagsView
  },
  methods: {
    removeStartLoading () {
      if (document.getElementById('loading')) {
        document.body.removeChild(document.getElementById('loading'))
      }
    }
  },
  computed: {
    menus () {
      return this.$store.getters.menus
    },
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
    this.$store.dispatch('user/getMenus')
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
.app-tagsview-container
  width: 1px
  flex: 1
  display: flex
  flex-direction: column
</style>
