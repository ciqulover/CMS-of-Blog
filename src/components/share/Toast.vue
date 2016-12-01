<template>
  <div class="toast">
    <div class="info">
      <p>{{toast.info}}</p>
      <div class="panel">
        <button @click="toast.toastResolve"
                class="confirm">确定
        </button>
        <button @click="toast.toastReject"
                class="cancel"
                v-if="toast.btnNum===2">取消
        </button>
      </div>
    </div>
  </div>
</template>
<script>
  import {mapState} from 'vuex'
  export default{
    computed: mapState(['toast'])
  }
</script>
<style lang="sass" rel="stylesheet/scss" scoped>
  @import "../../style/mixins.scss";

  .toast {
    @include shade();
    background-color: rgba(0, 0, 0, 0.4);
    .info {
      background-color: #FFF;
      border-radius: 10px;
      position: absolute;
      width: 400px;
      height: 240px;
      margin-top: -100px;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      padding-top: 60px;
      p {
        text-align: center;
        font-size: 20px;
      }
      div.panel {
        width: 100%;
        position: absolute;
        bottom: 20px;
        text-align: center;
        button {
          margin: 10px;
          width: 80px;
          height: 30px;
        }
        .confirm {
          @include greenButton();
        }
        .cancel {
          @include orangeButton();
        }
      }
    }
  }
</style>
