<template lang="pug">
  el-container
    el-header(style="background-color:#999") Header
    el-container
      el-aside(width="200px",style="background-color:#ccc")
        router-link(to="/setcategories") setcategories
      el-main
        router-view
</template>

<script>

export default {
  name: 'app',
  components: {
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
