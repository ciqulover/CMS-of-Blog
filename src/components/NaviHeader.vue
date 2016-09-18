<template>
    <header class="naviHeader">
        <button class="home"
                @click="toHome">
            <i class="fa fa-fire fa-2x"></i>
        </button>
        <div class="user">
            <span>
                {{time}}好，{{userName}}
            </span>
            <button @click="logout">
                <span>登出</span>
                <i class="fa fa-sign-out"></i>
            </button>
        </div>
    </header>
</template>
<script>
    import {setUser}    from '../vuex/actions'
    import {userName}   from '../vuex/getters'
    import {unset}      from '../js/cookieUtil'
    export default{
        methods: {
            toHome() {
                this.$router.go('/')
            },
            logout() {
                unset('user', '/', location.hostname)
                this.setUser('')
                this.$router.go('/login')
            }
        },
        vuex: {
            getters: {
                userName
            },
            actions: {
                setUser
            }
        }
        , computed: {
            time(){
                let hours = new Date().getHours()
                if (hours > 5 && hours < 12) {
                    return '早上'
                } else if (hours > 11 && hours < 19) {
                    return '下午'
                } else {
                    return '晚上'
                }
            }
        }
    }
</script>
<style lang="sass">
    @import "../style/components/NaviHeader.scss";
</style>