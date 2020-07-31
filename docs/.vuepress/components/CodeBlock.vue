<template>
  <div class="code-block">
    <div class="code-block__source">
      <Content slot-key="source"/>
      <!-- <slot name="source"/> -->
    </div>
    <div class="code-block__online">
      <Content slot-key="online"/>
    </div>
  </div>
</template>

<script>
/**
 * @descript 代码块，用于在md文档中区分代码与其他说明
 * @todo 接入vuep 直接在线编辑，或接入jsbin之类的在线js编辑器
 */
export default {
  name: 'code-block',
  data () {
    return {}
  }
}
</script>

<style scoped>
.code-block {
  border: solid 1px #ebebeb;
  border-radius: 3px;
  margin-top: 10px;
  transition: .2s;
}
.code-block__source {
  padding: 24px;
}
</style>
