import Vue from 'vue'
import VueResource from 'vue-resource'

Vue.use(VueResource)

new Vue({
  data: {
    name: '',
    info: '',
    pwd: '',
    pwdRepeat: ''
  },
  methods: {
    submit () {
      if (!this.name.length) return this.info = '请输入合适的用户名'
      if (this.pwd.length < 5) return this.info = '密码长度太短'
      if (this.pwd !== this.pwdRepeat) return this.info = '两次输入的密码不一致'
      this.$http.post('/api/setup', {name: this.name, pwd: this.pwd})
        .then(() => {
          this.info = '创建成功, 即将跳转到登陆...'
          setTimeout(() => window.location.reload(), 2500)
        })
        .catch(() => this.info = '创建失败')
    },
    clearInfo () {
      this.info = ''
    }
  },
  watch: {
    name: 'clearInfo',
    pwd: 'clearInfo',
    pwdRepeat: 'clearInfo'
  }
}).$mount('#setup')
