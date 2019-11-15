<template lang="pug">
  el-dropdown(trigger="click")
    .app-profile-toggle
      | 下拉菜单
      i.el-icon-arrow-down.el-icon--right
    el-dropdown-menu(slot="dropdown")
      el-dropdown-item 修改密码
      el-dropdown-item(divided) 退出登录
</template>

<script>

export default {
  name: 'AppProfile'
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
</style>
