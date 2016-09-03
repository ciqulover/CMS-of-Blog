<template>
    <section class="editor">
        <input class="title"
               placeholder="标题"
               v-model="title">
        <div :class="view">
            <textarea v-model="input">
            </textarea>
            <button class="toggle"
                    @click="editToggle">
                <i class="fa fa-chevron-right fa-fw"
                   v-show="view==='edit'">
                </i>
                <i class="fa fa-chevron-left fa-fw"
                   v-show="view==='inspect'">
                </i>
            </button>
            <article v-html="input | marked">
            </article>
        </div>
        <div class="panel">
            <input type="text"
                   v-model="dateStr"
            >
            <button class="save"
                    @click="send">保存
            </button>
        </div>
    </section>
</template>
<script>
    import marked       from '../js/marked.min.js'
    import {userName}   from '../vuex/getters'
    import {pop}        from '../vuex/actions'
    export default{
        data(){
            return {
                title: '',
                input: '',
                date: '',
                id: '',
                view: 'edit'
            }
        },
        filters: {
            marked
        },
        created(){
            if (this.$route.query.id) {
                let id = this.$route.query.id
                this.$http.get('/article?id=' + id)
                        .then((response)=> {
                            let body = JSON.parse(response.body)
                            this.input = body.content
                            this.title = body.title
                            this.date = body.date
                            this.id = id
                        }, (response)=> {
                            console.log(response)
                        })
            } else {
                this.date = new Date().toLocaleDateString()
            }
        },

        methods: {
            send(){
                if (this.userName === '游客') {
                    this.pop({
                        pop: true,
                        content: '游客无此权限',
                        cb1: function () {
                            this.pop({})
                        }.bind(this)
                    })
                    return
                }
                this.title = this.title.trim()
                if (!this.title) {
                    alert('请输入标题')
                    return
                }
                if (!this.dateStr.trim()) {
                    this.date = new Date()
                }

                this.$http.post('/save', this.$data)
                        .then(()=> {
                            this.pop({
                                pop: true,
                                content: '保存成功',
                                cb1: function () {
                                    this.pop({})
                                    this.$router.go('/console/articleList')
                                }.bind(this)
                            })
                        }, (response)=> {
                            console.log(response)
                        })
            },
            editToggle(){
                this.view = this.view === 'edit' ? 'inspect' : 'edit'
            },
        },
        computed: {
            dateStr: {
                set(value){
                    value = value.trim()
                    let reg = /(\d{4})年(\d+)月(\d+)日/
                    if (reg.test(value)) {
                        let date = RegExp.$1
                                + '/' + RegExp.$2
                                + '/' + RegExp.$3
                        this.date = new Date(date)

                    } else {
                        this.date = new Date()
                    }
                },

                get(){
                    let d = new Date(this.date)
                    if (d != 'Invalid Date') {
                        return d.getFullYear() + '年' +
                                (d.getMonth() + 1) + '月' +
                                d.getDate() + '日'
                    } else {
                        return '日期不合法'
                    }
                }
            }
        },
        vuex: {
            getters: {
                userName
            },
            actions: {
                pop
            }
        }
    }
</script>
<style lang="sass">
    @import "../SCSS/Editor.scss";
</style>