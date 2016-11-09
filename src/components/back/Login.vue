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
  import {get, set, unset}  from '../../assets/js/cookieUtil'
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
        if(!this.name.length||!this.pwd.length){
          this.info='请输入正常的用户名和密码'
          return
        }
        const loginInfo = {
          name: this.name,
          pwd: this.pwd
        }
        this.$store.dispatch('login', loginInfo).then(
          ()=> {
            const date = new Date(Date.now() + 60000 * 30)
            const hostName = location.hostname
            set('user', this.name, date, '/', hostName)
            this.$router.push({path: '/console'})
          },
          msg=>this.info = msg
        )
      },
      clearInfo(){
        this.info=''
      }
    },
    watch:{
      name:'clearInfo',
      pwd:'clearInfo'
    }

  }
</script>
<style lang="sass" rel="stylesheet/scss">
  @import "../../style/variables";

  section.login {
    position: absolute;
    top: 40px;
    left: 0;
    bottom: 0;
    right: 0;
    min-height: 500px;
    .form {
      width: 500px;
      height: 400px;
      margin: 100px auto;
      position: absolute;
      top: 100px;
      left: 50%;
      transform: translate(-50%, 0);
      .icon i {
        transition: all 4s;
        &:hover {
          transform: rotate(1440deg);
        }
      }
      .info {
        display: block;
        margin: 10px;
        font-size: 12px;
        height: 20px;
        color: $black3;
      }
      .input:hover {
        color: $green2;
      }
      > p {
        height: 50px;
        text-align: center;
        transition: all 0.4s;
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
          cursor: pointer;
          &:hover {
            background-color: $green1;
            color: #FFF;
          }
        }
      }
    }
  }
</style>
