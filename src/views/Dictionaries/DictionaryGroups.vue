<template lang="pug">
  DatatablesPage(
    resource="dictionaries"
    :fields="fields"
    :columnList="columnList"
    :filterList="filterList"
    :createList="createList"
    :updateList="updateList"
    :toolbarList="toolbarList"
    :operationList="operationList")
</template>
<script>
export default {
  name: 'DictionaryGroups',
  data () {
    return {
      toolbarList: ['create'],
      operationList: ['update', 'delete', {
        name: 'options',
        label: '编辑字典项',
        func: (data) => {
          this.$emit('selectDictionaryGroup', data)
        }
      }],
      columnList: ['sign', 'label', 'options', 'enabled', 'remark'],
      filterList: ['sign', 'label', 'enabled'],
      createList: ['sign', 'label', 'enabled', 'remark'],
      updateList: ['sign', 'label', 'enabled', 'remark'],
      fields: {
        sign: {
          label: '字典标识',
          form: {
            formtype: 'input'
          },
          filter: {
            like: true
          }
        },
        label: {
          label: '字典名称',
          form: {
            formtype: 'input'
          },
          filter: {
            like: true
          }
        },
        options: {
          label: '选项',
          render: data => data.map(({ label }) => label).join(',')
        },
        enabled: {
          label: '是否启用',
          form: {
            formtype: 'switch'
          },
          filter: {
            formtype: 'select'
          }
        },
        remark: {
          label: '备注',
          form: {
            formtype: 'input',
            type: 'textarea',
            resize: 'none',
            autosize: true
          },
          filter: {
            formtype: 'input'
          }
        }
      }
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
