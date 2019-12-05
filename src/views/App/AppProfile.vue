<template lang="pug">
  el-dropdown(trigger="click",@command="handleCommand")
    .app-profile-toggle
      el-avatar.app-profile-avatar(:size="32",:src="avatar")
      | {{fullname}}
      i.el-icon-arrow-down.el-icon--right
    el-dropdown-menu(slot="dropdown")
      el-dropdown-item(command="changePassword") 修改密码
      el-dropdown-item(command="logout",divided) 退出登录
</template>

<script>

export default {
  name: 'AppProfile',
  props: {
    fullname: String,
    avatar: {
      type: String,
      default: '/app-profile-avatar.png'
    }
  },
  methods: {
    handleCommand (command) {
      this[command]()
    },
    changePassword () {
      console.log('changePassword')
    },
    logout () {
      this.$router.push('logout')
    }
  }
}
</script>

<style lang="sass" scoped>
.app-profile-toggle
  display: block
  padding: 0 18px
  line-height: 60px
  font-size: 16px
  color: #666
  cursor: pointer
  &:hover
    color: #333
    background-color: #eee
  .app-profile-avatar
    float: left
    margin: 14px 14px 14px 0
</style>
