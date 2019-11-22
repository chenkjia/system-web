<template lang="pug">
  div
    DatatablesFiles(
      v-if="field.render&&field.render.type==='file'"
      :images="value|fileFilter")
    span(v-else) {{result}}
</template>

<script>

import DatatablesFiles from './DatatablesFiles'
import isFunction from 'lodash/isFunction'
import renderList from './renderList'
export default {
  name: 'InfoRender',
  components: {
    DatatablesFiles
  },
  props: {
    field: {
      type: Object
    },
    value: {
    }
  },
  computed: {
    result () {
      return this.resultRender()(this.value, this.field)
    }
  },
  filters: {
    fileFilter: (value) => value.map(({ url }) => 'http://localhost:8080/' + url)
  },
  methods: {
    resultRender () {
      return !this.field.render ? renderList['text'] : isFunction(this.field.render) ? this.field.render : renderList[this.field.render.type]
    }
  }
}
</script>
