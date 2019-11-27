<template lang="pug">
  Dataform(
    size="large"
    label-position="right"
    label-width="100px"
    :dataInit="loginData"
    :formFields="loginFields"
    :buttonList="loginButtons")
</template>
<script>

export default {
  name: 'home',
  data () {
    return {
      loginData: {},
      loginFields: [{
        name: 'username',
        label: '账号',
        form: {
          formtype: 'input'
        }
      }, {
        name: 'password',
        label: '密码',
        form: {
          formtype: 'input',
          'show-password': true
        }
      }],
      loginButtons: [{
        label: '登录',
        type: 'primary',
        func: this.login
      }]
    }
  },
  methods: {
    login () {
      console.log('login')
    }
  }
}
</script>
<style scoped>
@import url("//unpkg.com/element-ui@2.10.1/lib/theme-chalk/index.css")
</style>
