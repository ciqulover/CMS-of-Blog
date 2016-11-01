<template>
  <section class="articles">
    <router-link :to="{path:'/console/editor'}"
                 tag="button">新增文章
    </router-link>
    <table>
      <tbody>
      <tr>
        <th @click="sort('title')">标题</th>
        <th @click="sort('date')">日期</th>
        <th>选项</th>
      </tr>
      <tr v-for="(article,index) in articles">
        <router-link :to="{path:'/article',query:{id:article._id}}"
                     tag="td">
          {{article.title}}
        </router-link>
        <td>
          {{article.date | toDate}}
        </td>
        <td>
          <i class="fa fa-pencil-square-o"
             @click="editArticle(article._id)">
          </i>
          <i class="fa fa-trash"
             @click="deleteArticle(article._id,index)">
          </i>
        </td>
      </tr>
      </tbody>
    </table>
  </section>
</template>
<script>
  import {mapState, mapGetters} from 'vuex'
  export default{
    created(){
      this.$store.dispatch('getArticles')
    },
    computed: Object.assign(
      {},
      mapState(['articles'])
    ),
    methods: {
      editArticle(id){
        this.$router.push('/console/editor?id=' + id)
      },
      deleteArticle(id){
        this.$store.dispatch('deleteArticle',id).then(()=>{
        })
      }
    }
  }
</script>
<style lang="sass" rel="stylesheet/scss" scoped>
  @import "../../style/variables.scss";
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
