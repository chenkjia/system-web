<template lang="pug">
  div
    DatatablesPage(
      resource="setcategories"
      :columns="columns"
      :toolbarList="toolbarList"
      :operationList="operationList")
</template>
<script>

export default {
  name: 'home',
  data () {
    return {
      toolbarList: ['create'],
      operationList: ['update', 'delete'],
      columns: [{
        name: 'label',
        label: '系列名'
      }, {
        name: 'name',
        label: '英文名'
      }]
    }
  },
  methods: {
    handleRemove (file, fileList) {
      console.log(file, fileList)
    },
    handlePreview (file) {
      console.log(file)
    }
  }
}
</script>
