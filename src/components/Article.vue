<template>
    <div class="wrap">
        <my-header></my-header>
        <section class="article">
            <article class="post-block">
                <div class="post-title">{{title}}</div>
                <div class="post-info">{{date}}</div>
                <div class="post-content">
                    {{{content | marked}}}
                </div>
            </article>
        </section>
        <my-footer></my-footer>
    </div>
</template>
<script>
    import myHeader     from './MyHeader.vue'
    import myFooter     from './MyFooter.vue'
    import marked       from '../js/marked.min'
    import hljs         from '../js/highlight.min'
    import {bgToggle}   from '../vuex/actions'

    export default{
        data(){
            return {
                title: '',
                date: '',
                content: ''
            }
        },
        filters: {
            marked
        },
        route: {
            canReuse:()=>false
        },
        watch: {
            content: hljs.initHighlighting
        },
        created(){
            let id = this.$route.query.id
            this.$http.get('/article?id=' + id)
                    .then((response)=> {
                        let body = JSON.parse(response.body)
                        this.content = body.content
                        this.title = body.title
                        let d = new Date(body.date)
                        this.date = d.getFullYear() + '年' +
                                (d.getMonth() + 1) + '月' +
                                d.getDate() + '日'
                    }, (response)=> {
                        console.log(response)
                    })
        },
        components: {
            myHeader,
            myFooter
        },
        ready(){
            this.bgToggle('MyCanvas')
            hljs.initHighlighting()
            hljs.initHighlighting.called = false
        },
        vuex: {
            actions: {
                bgToggle
            }
        }
    }
</script>
<style lang="sass">
    @import "../style/components/Article.scss";
</style>