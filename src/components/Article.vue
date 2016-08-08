<template>
    <section class="article">
        <div class="title">dvs</div>
        <article v-html="content | marked">
        </article>
    </section>
</template>
<script>
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
            let name=this.$route.query.title
            this.$http.get('/article?title='+name)
                .then((response)=> {
                    let body = JSON.parse(response.body)
                    this.content = body.content
                }, (response)=> {
                    console.log('Connection Failed')
                })
        },
    }
</script>
<style lang="sass">
@import "../SCSS/Article.scss";
</style>