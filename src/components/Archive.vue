<template>
    <div class="wrap">
        <my-header></my-header>
        <section class="archive">
            <ul>
                <li class="item"
                    v-for="year in years">
                    <p>{{year}}</p>
                    <ul>
                        <li v-for="article in archive[year]">
                            <span class="date">
                                {{article.date | dateParse}}
                            </span>
                            <span class="title"
                                  @click="detail(article._id)">
                                {{article.title}}
                            </span>
                        </li>
                    </ul>
                </li>
            </ul>
        </section>
        <my-footer></my-footer>
    </div>
</template>
<script>
    import myHeader     from './MyHeader.vue'
    import myFooter     from './MyFooter.vue'
    import {bgToggle}   from '../vuex/actions'
    export default{
        data(){
            return {
                articles: null,
                years:[1],
            }
        },
        filters: {
            dateParse: value=> {
                let d = new Date(value)
                return d.getFullYear() + '年' +
                        (d.getMonth() + 1) + '月' +
                        d.getDate() + '日'
            }
        },
        created(){
            this.$http.get('/articleList')
                    .then((response)=> {
                        let arcs = JSON.parse(response.body)
                        this.articles = arcs.sort((i, j)=> {
                            return new Date(j.date) - new Date(i.date)
                        })
                    }, (response)=> {
                        console.log(response)
                    })
        },
        ready(){
            this.bgToggle('MyCanvas')
        },
        methods: {
            detail(id){
                this.$router.go('/article?id=' + id)
            }
        },
        components: {
            myHeader,
            myFooter,
        },
        computed: {
            archive(){
                if (!this.articles) {
                    return {1:[{title:'',date:''}]}
                }
                let archive = {}
                this.years.splice(0,1)
                this.articles.forEach(atc=> {
                    let year = new Date(atc.date).getFullYear()
                    if (!archive[year]) {
                        this.years.push(year)
                        archive[year] = []
                    }
                    archive[year].push(atc)
                })
                return archive
            },
        },
        vuex:{
            actions:{
                bgToggle
            }
        }
    }
</script>
<style lang="sass">
    @import "../style/components/Archive.scss";
</style>