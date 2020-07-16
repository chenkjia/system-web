<template lang="pug">
  .login-wrapper
    .login-bg
      .login-container
        div.app-logo 智慧水务平台
        Dataform.login-form(
          size="large"
          label-position="top"
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
          tag: 'input'
        }
      }, {
        name: 'password',
        label: '密码',
        form: {
          tag: 'input',
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
    login ({ data }) {
      const result = cloneDeep(data)
      result.password = this.$md5(data.password)
      this.$post({
        url: 'login',
        data: result
      }).then(res => {
        if (res.data) {
          setToken(res.data.token)
          this.$router.push('/')
        }
      })
    }
  }
}
</script>
<style lang="sass" scoped>
.login-wrapper
  position: fixed
  top: 0
  right: 0
  bottom: 0
  left: 0
  background: url(/bg.jpg) no-repeat
  background-size: cover
.login-bg
  display: flex
  flex-direction: column
  align-items: center
  justify-content: center
  height: 100%
  overflow: auto
.login-container
  width: 300px
  display: flex
  flex-direction: column
  padding: 20px 35px
  background: rgba(255,255,255,0.8)
  position: absolute
  box-shadow: 0 0 20px -4px rgba(0, 0, 0, 0.1)
.app-logo
  font-size: 24px
  line-height: 60px
  color: #666
</style>
