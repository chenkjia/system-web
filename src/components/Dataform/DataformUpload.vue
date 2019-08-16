<template lang="pug">
  el-upload.form-upload(
    list-type="picture-card"
    action="/api/upload"
    :limit="1"
    :class="{'form-upload-simple': isSimple}"
    :multiple="multiple"
    :on-remove="handleRemove"
    :on-success="handleSuccess"
    :file-list="value")
    i.el-icon-plus
    //- el-button(size="small",type="primary") 点击上传
</template>

<script>
export default {
  name: 'DataformUpload',
  props: {
    value: {
      type: Array,
      default: () => ([])
    },
    multiple: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    isSimple () {
      return !this.multiple && this.value.length
    }
  },
  methods: {
    handleRemove (file, fileList) {
      this.$emit('input', fileList)
    },
    handleSuccess (file, fileList) {
      const { filename, path } = file
      this.$emit('input', [{
        name: filename,
        url: path
      }])
    }
  }
}
</script>
<style lang="sass" scoped>
.form-upload
  text-align: left
.form-upload-simple /deep/ .el-upload
  display: none
</style>
