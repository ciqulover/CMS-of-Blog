<template>
    <header class="links">
        <div class="circle">
            <img src="../img/me.jpg" alt="ycwalker">
        </div>
        <ul>
            <li v-for="link in links">
                <a :href="link.href">{{link.name}}</a>
            </li>
        </ul>
    </header>
</template>
<script>
    export default{
        data(){
            return{
                links:null,
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
        }

    }
</script>
<style lang="sass">
    @import "../SCSS/Links.scss";
</style>