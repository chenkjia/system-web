<template lang="pug">
  div
    el-image.datatables-files(
      style="height: 24px;"
      v-for="image in images"
      :key="image"
      :src="image"
      @click="watchPicture")
    el-dialog(
      :visible.sync="dialogVisible"
      :append-to-body="true")
      img(
        width="100%"
        :src="dialogImageUrl")
</template>
<script>

export default {
  name: 'DatatablesFiles',
  props: {
    images: {
      type: Array,
      default: () => ([])
    }
  },
  data () {
    return {
      dialogVisible: false,
      dialogImageUrl: ''
    }
  },
  methods: {
    watchPicture (event) {
      this.dialogVisible = true
      this.dialogImageUrl = event.target.src
    }
  }
}
</script>
<style lang="sass" scoped>
.datatables-files /deep/ .el-image__inner
  width: auto
</style>
