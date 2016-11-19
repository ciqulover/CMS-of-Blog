<template>
  <section class="articles">
    <router-link :to="{name:'editor'}"
                 tag="button">新增文章
    </router-link>
    <table>
      <tbody>
      <tr>
        <th>标题</th>
        <th>日期</th>
        <th>选项</th>
      </tr>
      <tr v-for="(article,index) in articles">
        <router-link :to="{name:'article',query:{id:article._id}}"
                     tag="td">
          {{article.title}}
        </router-link>
        <td>
          {{article.date | toDate}}
        </td>
        <td>
          <router-link class="fa fa-pencil-square-o"
                       :to="{name:'editor',query:{id:article._id}}"
                       tag="i">
          </router-link>
          <i class="fa fa-trash"
             @click="deleteArticle(article._id)">
          </i>
        </td>
      </tr>
      </tbody>
    </table>
  </section>
</template>
<script>
  import {mapState, mapActions} from 'vuex'
  export default{
    created(){
      this.getArticles()
    },
    computed: mapState(['articles']),
    methods: mapActions(['getArticles', 'deleteArticle'])
  }
</script>
<style lang="sass" rel="stylesheet/scss" scoped>
  @import "../../style/mixins.scss";

  section.articles {
    @include rightSide();
    button {
      @include center();
      position: relative;
      width: 200px;
      height: 60px;
      margin: 30px 0;
      font-size: 20px;
    }
    table {
      position: absolute;
      @include center();
      top: 150px;
      width: 60%;
      tr {
        height: 50px;
        th {
          font-weight: normal;
          cursor: pointer;
          &:first-of-type {
            width: 40%;
            min-width: 40px;
          }
          &:nth-of-type(2) {
            width: 30%;
            min-width: 200px;
          }
          &:last-of-type {
            width: 30%;
            min-width: 100px;
            cursor: default;
          }
        }
        td:first-of-type {
          color: $green1;
          cursor: pointer;
        }
        td:nth-of-type(2), td:nth-of-type(3) {
          text-align: center;
        }
        td i {
          color: $green2;
          cursor: pointer;
        }
        td i:after {
          display: inline-block;
          width: 10px;
          content: '';
        }
      }
    }
  }
</style>
