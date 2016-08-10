<template>
    <section class="articleList">
        <button @click="$router.go('/console/editor')">
            新增文章
        </button>
        <table>
            <tbody>
                <tr>
                    <th>标题</th>
                    <th>日期</th>
                    <th>选项</th>
                </tr>
                <tr v-for="article in articles">
                    <td @click="detail(article._id)">{{article.title}}</td>
                    <td>{{article.date | dateParse}}</td>
                    <td>
                        <i class="fa fa-pencil-square-o"
                           @click="edit(article._id)">

                        </i>
                        <i class="fa fa-trash"
                           @click="deleteItem(article._id,$index)">
                        </i>
                    </td>
                </tr>
            </tbody>
        </table>

    </section>
</template>
<script>
    import {userName} from '../vuex/getters'
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
            console.log('d')
            this.$http.get('/articleList')
                    .then((response)=> {
                        console.log(response.body)
                        let arcs = JSON.parse(response.body)
                        this.articles = arcs
                    }, (response)=> {
                        console.log('Connection Failed')
                    })
        },
        methods:{
            edit(id){
                console.log(id)
                this.$router.go('editor?id='+id)
            },
            deleteItem(id,index){
                if(this.userName==='游客'){
                    alert('游客无此权限')
                    return
                }
                this.$http.post('/delete',{id})
                        .then((response)=> {
                            console.log(this.articles)
                            this.articles.splice(index,1)
                        }, (response)=> {
                            console.log('Connection Failed')
                        })
            },
            detail(id){
                this.$router.go('/article?id='+id)
            }
        },
        vuex: {
            getters: {
                userName,
            },
        }
    }
</script>
<style lang="sass">
    @import "../SCSS/ArticleList.scss";
</style>