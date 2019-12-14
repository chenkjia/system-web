<template lang="pug">
  DoubleColumnLayout(v-model="layoutState")
    DictionaryGroups(
      slot="main"
      @selectDictionaryGroup="selectDictionaryGroup"
    )
    DictionaryOptions(
      slot="sub"
      v-if="dictionaryGroupId!==''"
      :dictionaryGroupId="dictionaryGroupId")
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
      dictionaryGroupId: ''
    }
  },
  methods: {
    selectDictionaryGroup (group) {
      this.dictionaryGroupId = group._id
      this.setLayoutBoth()
    },
    setLayoutBoth () {
      this.layoutState = 'both'
    }
  }
}
</script>
