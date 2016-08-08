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
                   v-show="view==='edit'"></i>
                <i class="fa fa-chevron-left fa-fw"
                   v-show="view==='inspect'"></i>
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
    import marked from '../js/marked.min.js'

    export default{
        data(){
            return {
                title: '',
                input: '',
                date: '',
                view: 'edit',
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
                        }, (response)=> {
                            console.log('Connection Failed')
                        })
            } else {

            }
        },
        methods: {
            send(){
                this.title = this.title.trim()
                if (!this.title) {
                    alert('请输入标题')
                    return
                }
                if (!this.date.trim()) {
                    this.date = new Date()
                }
                this.$http.post('/save', this.$data)
                        .then((response)=> {
                            console.log(response.status)
                        }, (response)=> {
                            console.log('error')
                        })
            },
            editToggle(){
                this.view = this.view === 'edit' ? 'inspect' : 'edit'
            }
        }
        , computed: {
            dateStr: {
                set(value){
                    value=value.trim()
                    if(value){
                        this.date = new Date(value)
                    }else {

                    }

                },

                get(){
                    let d = new Date(this.date)
                    return d.toLocaleDateString() + ' '
                            + d.getHours() + ':'
                            + d.getMinutes() + ':'
                            + d.getSeconds()
                }
            }
        }
    }
</script>
<style lang="sass">
    @import "../SCSS/Editor.scss";
</style>