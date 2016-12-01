<template>
  <main class="wrap">
    <my-header></my-header>
    <section class="article">
      <article class="block">
        <div class="title">{{article.title}}</div>
        <div class="info">{{article.date |toDate}}</div>
        <div class="content" v-html="article.content"></div>
      </article>
    </section>
    <my-footer></my-footer>
  </main>
</template>
<script>
  import {mapState}   from 'vuex'
  import marked       from '../../assets/js/marked.min'
  import hljs         from '../../assets/js/highlight.pack'
  import MyHeader     from './MyHeader.vue'
  import MyFooter     from './MyFooter.vue'

  export default{
    created(){
      this.fetchData()
    },
    updated(){
      this.highlight()
    },
    methods: {
      fetchData(){
        this.$store.dispatch('getArticle', this.$route.query.id)
      },
      highlight(){
        setTimeout(() => {
          hljs.initHighlighting.called = false
          hljs.initHighlighting()
        }, 0)
      }
    },
    computed: mapState({
      article: state => {
        state.article.content = marked(state.article.content || '')
        return state.article
      }
    }),
    components: {MyHeader, MyFooter},
    watch: {
      '$route': ['fetchData', 'highlight']
    }
  }
</script>

<style lang="sass" rel="stylesheet/scss">
  @import "../../style/variables";

  .wrap {
    min-height: 100%;
    position: relative;
  }

  section.article {
    line-height: 1.6;
    padding-bottom: 160px;
    article {
      .title {
        margin: 0.65em 0;
        font-size: 1.5em;
      }
      .info {
        color: #7f8c8d;
        margin: 1.2em 0;
        span {
          margin-left: 0.5rem;
        }
      }
      .content {
        h2, h3, h4, h5, h6 {
          position: relative;
          margin: 1em 0;
          &:before {
            content: "#";
            color: $green1;
            position: absolute;
            left: -0.7em;
            top: -4px;
            font-size: 1.2em;
            font-weight: bold;
          }
        }
        h4, h5, h6 {
          &:before {
            content: ""
          }
        }
        h2, h3 {
          font-size: 22px
        }
        h4, h5, h6 {
          font-size: 18px
        }
        a {
          color: $green1;
          word-break: break-all;
        }
        blockquote {
          margin: 2em 0;
          padding-left: 20px;
          border-left: 4px solid $green1;
        }
        img {
          display: block;
          max-width: 100%;
          margin: 1em auto
        }
        code,
        pre {
          font-size: 0.8em;
          background-color: #f8f8f8;
          font-family: 'Roboto Mono', Monaco, courier, monospace;
          color: #525252;
        }
      }
    }
  }
</style>
