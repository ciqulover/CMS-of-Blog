<template>
    <section class="account">
        <div class="title">修改密码</div>
        <div class="password">
            <i class="fa fa-key fa-fw"></i>
            <input type="password"
                   placeholder="输入新密码"
                   v-model="pw">
            <br>
            <i class="fa fa-key fa-fw"></i>
            <input type="password"
                   placeholder="重新输入"
                   v-model="rpw">
        </div>
        <div class="panel">
            <button @click="savePw">保存</button>
        </div>
    </section>
</template>
<script>
    import {userName}   from '../vuex/getters'
    import {pop}        from '../vuex/actions'
    export default{
        data(){
            return {
                pw: '',
                rpw: ''
            }
        },
        methods: {
            savePw(){
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
                if (this.pw === this.rpw) {
                    this.$http.post('/savePw', {
                        userName:this.userName,
                        password:this.pw
                    }).then(()=> {
                        this.pop({
                            pop: true,
                            content: '保存成功',
                            cb1: function () {
                                this.pop({})
                            }.bind(this)
                        })
                    }, (response)=> {
                        console.log(response)
                    })
                }else {
                    this.pop({
                        pop: true,
                        content: '两次输入不一致',
                        cb1: function () {
                            this.pop({})
                        }.bind(this)
                    })
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
    @import "../style/components/Account.scss";
</style>