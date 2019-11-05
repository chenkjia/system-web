<template lang="pug">
  div
</template>

<script>
// 表单里的Icon选择器
export default {
  name: 'DataformIcon',
  props: {
    value: {
      type: String
    }
  },
  methods: {
    getIcons () {
      console.log(this)
    },
    handleSelect (icon) {
      this.$emit('input', icon)
    }
  },
  mounted () {
    this.getIcons()
  }
}
</script>
<style lang="sass" scoped>
.form-upload
  text-align: left
.form-upload-simple /deep/ .el-upload
  display: none
</style>
