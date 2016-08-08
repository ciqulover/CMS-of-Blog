<template>
    <header>
        <button class="home" @click="toHome">
            <i class="icon-home"></i>
            <span>Home</span>
        </button>
        <div class="user">
            <span>
            <i class="icon-user"></i>
            </span>
            <button @click="logOut">
                <i class="icon-signout"></i>Logout
            </button>
        </div>
    </header>
</template>
<script>
    export default{
         methods: {
            toHome: function () {
                console.log('a')
            }
            , logOut: function () {
                console.log('b')
            }
        }
    }
</script>
<style lang="sass">
    @import "../SCSS/NaviHeader.scss";
</style>