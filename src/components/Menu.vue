<template>
    <section class="menu">
        <div class="title">链接编辑</div>
        <table>
            <tbody>
            <tr>
                <th>链接名称</th>
                <th>链接地址</th>
            </tr>
            <tr v-for="link in links">
                <td>
                    <i class="fa fa-plus-circle" @click="addLink($index)"  v-if="links.length<4"></i>
                    <i class="fa fa-minus-circle" @click="removeLink($index)"  v-if="links.length>1"></i>
                    <input type="text" v-model="link.name">
                </td>
                <td>
                    <input type="text" v-model="link.href">
                </td>
            </tr>
            </tbody>
        </table>
        <div class="panel">
            <button @click="saveLinks">保存</button>
        </div>
    </section>
</template>

<script>
    import {userName} from '../vuex/getters'
export default{
    data(){
        return{
            links:null
        }
    },
    created(){
        this.$http.post('/getLinks')
                .then((response)=> {
                    let body = JSON.parse(response.body)
                    this.links = body
                }, (response)=> {
                    console.log('Connection Failed')
                })
    },
    methods:{
        addLink(i){
            this.links.splice(i+1,0,{name:'',href:''})
        },
        removeLink(i){
            this.links.splice(i,1)
        },
        saveLinks(){
            if(this.userName==='游客'){
                alert('游客无此权限')
                return
            }
            this.$http.post('/setLinks',this.$data)
                    .then((response)=> {
                        let body = response.body
                    }, (response)=> {
                        console.log('Connection Failed')
                    })
        },
    },
    vuex: {
        getters: {
            userName,
        },
    }
}
</script>

<style lang="sass">
@import "../SCSS/Menu.scss";
</style>