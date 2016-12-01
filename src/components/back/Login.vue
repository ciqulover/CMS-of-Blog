<template>
  <section class="login">
    <div class="form" @keyup.enter="doLogin">
      <p class="icon">
        <i class="fa fa-fire fa-2x"></i>
      </p>
      <p class="input">
        <i class="fa fa-user fa-fw"></i>
        <input id="userName"
               type="text"
               name="userName"
               placeholder="用户名"
               v-model.trim="name"
        >
      </p>
      <p class="input">
        <i class="fa fa-key fa-fw"></i>
        <input id="password"
               type="password"
               placeholder="密码"
               v-model.trim="pwd"
        >
      </p>
      <p class="info">{{info}}</p>
      <p>
        <button @click="doLogin()">登陆
        </button>
      </p>
    </div>
  </section>
</template>
<script>
  import {mapActions} from 'vuex'
  import {set}  from '../../assets/js/cookieUtil'

  export default{
    data(){
      return {
        name: '',
        pwd: '',
        info: ''
      }
    },
    methods: {
      doLogin(){
        if (!this.name.length) return this.info = '请输入正常的用户名'
        if (!this.pwd.length) return this.info = '请输入正常的密码'

        this.login({name: this.name, pwd: this.pwd})
          .then(() => {
            const date = new Date(Date.now() + 60000 * 30)
            set('user', this.name, date, '/', window.location.hostname)
            this.$router.push({path: '/console'})
          })
          .catch(msg => this.info = msg)
      },
      clearInfo(){
        this.info = ''
      },
      ...mapActions(['login'])
    },
    watch: {
      name: 'clearInfo',
      pwd: 'clearInfo'
    }
  }
</script>
<style lang="sass" rel="stylesheet/scss" scoped>
  @import "../../style/variables";

  section.login {
    .form {
      width: 500px;
      height: 400px;
      margin: 0 auto;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      .icon i {
        transition: all 4s;
        &:hover {
          transform: rotate(1440deg);
        }
      }
      > p {
        height: 50px;
        text-align: center;
        transition: all 0.4s;
        &.info {
          margin: 10px;
          font-size: 12px;
          height: 20px;
          color: $black3;
        }
        &.input:hover {
          color: $green2;
        }
        input {
          transition: all 0.4s;
          width: 200px;
          padding: 8px;
          border-bottom: 1px solid $green1;
          &:focus {
            width: 210px;
          }
        }
        button {
          transition: all 0.4s;
          color: $black3;
          border: 1px solid $green1;
          border-radius: 4px;
          width: 60px;
          height: 30px;
          &:hover {
            background-color: $green1;
            color: #FFF;
          }
        }
      }
    }
  }
</style>
