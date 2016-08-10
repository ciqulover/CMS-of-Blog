<template>
    <background></background>
    <links></links>
    <section class="archive">
        <ul>
            <li v-for="year in archive">
                <p>{{$key}}年</p>
                <ul>
                    <li v-for="month in year">
                        <p>{{$key}}月</p>
                        <ul>
                            <li v-for="article in month">
                                <span @click="detail(article._id)">{{article.title}}</span>
                                <span>{{article.date | dateParse}}</span>
                            </li>
                        </ul>
                    </li>
                </ul>
            </li>
        </ul>
    </section>
</template>
<script>
    import Background from './Background.vue'
    import Links from './Links.vue'
    export default{
        data(){
            return {
                articles: null
            }
        },
        filters: {
            dateParse: value=>new Date(value).toLocaleDateString()
        },
        created(){
            this.$http.get('/articleList')
                    .then((response)=> {
                        let arcs = JSON.parse(response.body)
                        this.articles = arcs
                    }, (response)=> {
                        console.log('Connection Failed')
                    })
        },
        methods:{
            detail(id){
                this.$router.go('/article?id='+id)
            }
        },
        components: {
            Background,
            Links
        },
        computed:{
            archive(){
                if(!this.articles)return null
                let result={}
                this.articles.forEach(item=>{
                    let date=new Date(item.date)
                    let [year,month]=date.toLocaleDateString().split('/')
                    if(!result[year]){
                        result[year]={}
                        result[year][month]=[item]
                    }else {
                        if(!result[year][month]){
                            result[year][month]=[item]
                        }else {
                            result[year][month].push(item)
                        }
                    }
                })
                return result
            }
        },

    }
</script>
<style lang="sass">
@import "../SCSS/Archive.scss";
</style>