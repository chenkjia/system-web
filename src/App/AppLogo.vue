<template lang="pug">
  .app-logo {{title}}
</template>

<script>

export default {
  name: 'AppLogo',
  props: {
    title: {
      type: String,
      default: '智慧水务平台'
    }
  }
}
</script>

<style lang="sass" scoped>
.app-logo
  font-size: 24px
  line-height: 60px
</style>
