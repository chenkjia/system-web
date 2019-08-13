<template lang="pug">
  el-container#app
    el-header(style="background-color:#999") Header
    el-container#app-container
      el-aside(width="200px",style="background-color:#ccc")
        router-link(to="/setcategories") setcategories
      el-main#app-main
        router-view
</template>

<script>

export default {
  name: 'app',
  components: {
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
</style>
