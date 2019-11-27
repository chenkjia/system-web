<template lang="pug">
#app
  router-view
</template>

<script>
export default {
  name: 'App',
  methods: {
    removeStartLoading () {
      if (document.getElementById('loading')) {
        document.body.removeChild(document.getElementById('loading'))
      }
    }
  },
  created () {
    this.removeStartLoading()
  }
}
</script>
<style lang="sass" scoped>
#app
  display: flex
  flex: 1
</style>
