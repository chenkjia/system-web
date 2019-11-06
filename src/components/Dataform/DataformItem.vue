<template lang="pug">
  el-form-item(
    :label="field.label")
    el-input(
      v-if="field.form.formtype==='input'"
      v-bind="field.form"
      v-on="$listeners"
      :size="field.form.size||'small'"
      :value="value")
    el-switch(
      v-else-if="field.form.formtype==='switch'"
      v-bind="$attrs"
      v-on="$listeners"
      :value="value")
    DataformUpload(
      v-else-if="field.form.formtype==='file'"
      v-bind="$attrs"
      v-on="$listeners"
      :multiple="field.form.multiple"
      :value="value")
    DataformIcon(
      v-else-if="field.form.formtype==='icon'"
      v-bind="$attrs"
      v-on="$listeners"
      :size="field.form.size||'small'"
      :value="value")
</template>

<script>
import DataformUpload from './DataformUpload'
import DataformIcon from './DataformIcon'
export default {
  name: 'DataformItem',
  components: {
    DataformUpload,
    DataformIcon
  },
  props: {
    field: {
      type: Object
    },
    value: {
    }
  },
  data () {
    return {}
  }
}
</script>
