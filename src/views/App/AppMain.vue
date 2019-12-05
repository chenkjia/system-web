<template lang="pug">
el-main#app-main
  keep-alive(:include="cachedViews")
    router-view(:key="key")
</template>

<script>

export default {
  name: 'AppMain',
  computed: {
    cachedViews () {
      return this.$store.state.tagsView.cachedViews
    },
    key () {
      return this.$route.path
    }
  }
}
</script>

<style lang="sass" scoped>
#app-main
  height: 100%
  display: flex
  flex-direction: column
  padding: 0
</style>
