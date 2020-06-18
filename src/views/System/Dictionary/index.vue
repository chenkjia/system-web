<template lang="pug">
  DoubleColumnLayout(v-model="layoutState")
    DictionaryGroup(
      slot="main"
      @selectDictionaryGroup="selectDictionaryGroup"
    )
    DictionaryOption(
      slot="sub"
      v-if="dictionaryGroupId!==''"
      :dictionaryGroupId="dictionaryGroupId")
</template>
<script>
import DictionaryGroup from './DictionaryGroup'
import DictionaryOption from './DictionaryOption'
export default {
  name: 'Dictionaries',
  components: {
    DictionaryGroup,
    DictionaryOption
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
