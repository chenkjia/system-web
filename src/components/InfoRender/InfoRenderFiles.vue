<template lang="pug">
  div
    el-image.infoRender-files(
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
  name: 'InfoRenderFiles',
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
.infoRender-files
  vertical-align: top
  /deep/ .el-image__inner
    width: auto
</style>
