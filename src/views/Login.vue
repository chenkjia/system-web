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
import { cloneDeep } from 'lodash'
import { setToken } from '@/utils/auth'

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
    login (data) {
      const result = cloneDeep(data)
      result.password = this.$md5(data.password)
      this.$post({
        url: 'login',
        data: result
      }).then(res => {
        if (res.code === 0) {
          setToken(res.data.token)
          this.$router.push('/')
        }
      })
    }
  }
}
</script>
<style scoped>
@import url("//unpkg.com/element-ui@2.10.1/lib/theme-chalk/index.css")
</style>
