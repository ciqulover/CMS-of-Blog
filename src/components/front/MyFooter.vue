<template>
  <footer>
    <div class="copyright">
      &copy;2015-2016 Lei Jiang, ycwalker@outlook.com
    </div>
    <router-link :to="{path:'/'}" class="login" tag="div">
      站长登陆
    </router-link>
  </footer>
</template>
<style lang="sass" rel="stylesheet/scss" scoped>
  footer {
    position: absolute;
    bottom: 0;
    div {
      text-align: center;
      color: #aaa;
      font-weight: 100;
    }
    div.copyright {
      font-size: 12px;
      height: 40px;
      padding-top: 26px;
      border-top: 1px solid #ddd;
    }
    div.login {
      font-size: 14px;
      margin-bottom: 20px;
      cursor: pointer;
    }
  }
</style>
