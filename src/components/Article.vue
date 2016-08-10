<template>
    <background></background>
    <links></links>
    <section class="article" v-on:scroll="scroll">
        <div class="title">{{title}}</div>
        <div class="time">{{date}}</div>
        <article v-html="content | marked">
        </article>
    </section>
</template>
<script>

    import Background from './Background.vue'
    import Links from './Links.vue'

    import marked from '../js/marked.min.js'

    export default{
        data(){
            return{
                title:'',
                date:'',
                content:''
            }
        },
        filters:{
            marked
        },
        created(){
            let id=this.$route.query.id
            this.$http.get('/article?id='+id)
                .then((response)=> {
                    let body = JSON.parse(response.body)
                    this.content = body.content
                    this.title=body.title
                    this.date=new Date(body.date).toLocaleDateString()
                }, (response)=> {
                    console.log('Connection Failed')
                })
        },
        components: {
            Background,
            Links
        },
        methods:{
            scroll(){
                console.log('a')
            }
        }
    }
</script>
<style lang="sass">
@import "../SCSS/Article.scss";
</style>