import Vue          from 'vue'
import VueResource  from 'vue-resource'

Vue.use(VueResource)

new Vue({
  data:{
    name:'',
    pwd:'',
    pwdRepeat:'',
    info:''
  },
  methods:{
    submit(){
      switch (true){
        case !this.name.length:
          this.info='请输入合适的用户名'
              return
        case this.pwd.length<5:
          this.info='密码长度太短'
              return
        case this.pwd!==this.pwdRepeat:
          this.info='两次输入的密码不一致'
              return
      }
      this.$http.post('/api/setup',{name:this.name,pwd:this.pwd})
        .then(()=>{
          this.info='创建成功, 即将跳转到登陆...'
          setTimeout(()=>location.reload(),3000)
        },()=>this.info='创建失败')
    }
  }
}).$mount('#setup')
