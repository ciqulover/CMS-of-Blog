<template>
    <section class="articleList">
        <button @click="$router.go('/console/editor')">
            新增文章
        </button>
        <table>
            <tbody>
                <tr>
                    <th @click="sort('title')">标题</th>
                    <th @click="sort('date')">日期</th>
                    <th>选项</th>
                </tr>
                <tr v-for="article in articles">
                    <td @click="detail(article._id)">
                        {{article.title}}
                    </td>
                    <td>
                        {{article.date | dateParse}}
                    </td>
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
    import {userName}   from '../vuex/getters'
    import {pop}        from '../vuex/actions'
    export default{
        data(){
            return {
                articles: null,
                sortState:{
                    date:0,
                }

            }
        },
        filters: {
            dateParse: value=>{
                let d = new Date(value)
                return d.getFullYear() + '年' +
                        (d.getMonth()+1) + '月' +
                        d.getDate() + '日'
            }
        },
        created(){
            this.$http.get('/articleList')
                    .then((response)=> {
                        let arcs = JSON.parse(response.body)
                        this.articles = arcs.sort((i, j)=>{
                            return new Date(j.date) - new Date(i.date)
                        })
                    }, (response)=> {
                        console.log(response)
                    })
        },
        methods:{
            edit(id){
                this.$router.go('/console/editor?id='+id)
            },
            deleteItem(id,index){
                if(this.userName==='游客'){
                    this.pop({
                        pop:true,
                        content:'游客无此权限',
                        cb1:function() {
                            this.pop({})
                        }.bind(this)
                    })
                    return
                }
                this.pop({
                    pop:true,
                    content:'确定要删除吗',
                    cb1:function () {
                        this.$http.post('/delete',{id})
                                .then(()=> {
                                    this.pop({
                                        pop:true,
                                        content:'删除成功',
                                        cb1:function () {
                                            this.pop({})
                                            this.articles.splice(index,1)
                                        }.bind(this)
                                    })
                                }, (response)=> {
                                    console.log(response)
                                })
                    }.bind(this),
                    cb2:function () {
                        this.pop({})
                    }.bind(this)
                })

            },
            detail(id){
                this.$router.go('/article?id='+id)
            },
            sort(opt){
                if(opt=='date'){
                    if(this.sortState.date===0){
                        this.articles = this.articles.sort((i, j)=>{
                            return new Date(i.date) - new Date(j.date)
                        })
                        this.sortState.date=1
                    }else {
                        this.articles.reverse()
                    }
                }else if(opt=='title'){
                    this.articles.reverse()
                }
            }
        },
        vuex: {
            getters: {
                userName,
            },
            actions:{
                pop,
            }
        }
    }
</script>
<style lang="sass">
    @import "../style/components/ArticleList.scss";
</style>