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
  position: fixed
  top: 0
  bottom: 0
  left: 0
  right: 0
  display: flex
</style>
