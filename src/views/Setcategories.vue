<template lang="pug">
  div setcategories
</template>

<script>
import { getInfo } from '@/api/setcategories'
export default {
  name: 'home',
  mounted () {
    getInfo()
  }
}
</script>
