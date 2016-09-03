<template>
    <header class="myHeader">
        <div class="circle">
            <img src="../img/me.jpg" alt="ycwalker">
        </div>
        <ul class="menu">
            <li v-for="link in links">
                <a :href="link.href">
                    {{link.name}}
                </a>
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
                        this.links = JSON.parse(response.body)
                    }, (response)=> {
                        console.log(response)
                    })
        }

    }
</script>
<style lang="sass">
    @import "../SCSS/MyHeader.scss";
</style>