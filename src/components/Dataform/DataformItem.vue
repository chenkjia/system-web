<template lang="pug">
  el-form-item(
    :label="field.label")
    el-input(
      v-if="field.form.type==='input'"
      v-on="$listeners"
      :value="value"
    )
    DataformUpload(
      v-else-if="field.form.type==='file'"
      v-on="$listeners"
      :multiple="field.form.multiple"
      :value="value")
</template>

<script>
import DataformUpload from './DataformUpload'
export default {
  name: 'DataformItem',
  components: {
    DataformUpload
  },
  props: {
    field: {
      type: Object
    },
    value: {

    }
  }
}
</script>
