<template lang="pug">
  DoubleColumnLayout(v-model="layoutState")
    DictionaryGroups(
      slot="main"
      @selectDictionaryGroup="selectDictionaryGroup"
    )
    DictionaryOptions(slot="sub")
</template>
<script>
import DictionaryGroups from './DictionaryGroups'
import DictionaryOptions from './DictionaryOptions'
export default {
  name: 'Dictionaries',
  components: {
    DictionaryGroups,
    DictionaryOptions
  },
  data () {
    return {
      layoutState: 'main',
      dictionaryGroup: ''
    }
  },
  methods: {
    selectDictionaryGroup (group) {
      this.dictionaryGroup = group.name
      this.setLayoutBoth()
    },
    setLayoutBoth () {
      this.layoutState = 'both'
    }
  }
}
</script>
