<template lang="pug">
  span
    InfoRenderFiles(
      v-if="field.render&&field.render.type==='file'"
      :images="value|fileFilter")
    span.iconfont(
      v-else-if="field.render&&field.render.type==='icon'"
      :class="`icon${value}`")
    span(v-else) {{result}}
</template>

<script>

import InfoRenderFiles from './InfoRenderFiles'
import isFunction from 'lodash/isFunction'
import renderList from './renderList'
export default {
  name: 'InfoRender',
  components: {
    InfoRenderFiles
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
