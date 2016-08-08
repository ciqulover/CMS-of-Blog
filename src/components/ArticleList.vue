<template>
    <section class="articleList">
        <table>
            <tbody>
                <tr>
                    <th>标题</th>
                    <th>日期</th>
                    <th colspan="1"></th>
                </tr>
                <tr v-for="article in articles">
                    <td>{{article.title}}</td>
                    <td>{{article.date | dateParse}}</td>
                    <td>
                        <i class="fa fa-pencil-square-o"
                           @click="edit(article._id)"

                        ></i>
                        <i class="fa fa-trash"
                           @click="deleteItem(article._id)"

                        ></i>
                    </td>
                </tr>
            </tbody>
        </table>
        <button @click="$router.go('/console/editor')">新文章</button>
    </section>
</template>
<script>


    export default{
        data(){
            return {
                articles: null
            }
        },
        filters: {
            dateParse: value=>new Date(value).toLocaleDateString()+
                    new Date(value).toLocaleTimeString()
        },
        created(){
            console.log(name)
            this.$http.get('/articleList')
                    .then((response)=> {
                        let arcs = JSON.parse(response.body)
                        this.articles = arcs
                        console.log(arcs,arcs[0]._id)
                    }, (response)=> {
                        console.log('Connection Failed')
                    })
        },
        methods:{
            edit(id){
                console.log(id)
                this.$router.go('editor?id='+id)
            },
            deleteItem(id){
                console.log(id)
            }
        }
    }
</script>
<style lang="sass">
    @import "../SCSS/ArticleList.scss";
</style>