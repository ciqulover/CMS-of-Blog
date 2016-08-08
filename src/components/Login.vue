<template>
    <background></background>
    <section class="login">
        <validator name="loginValidator">
            <div class="form" @keyup.enter="login">
                <p>
                    <i class="fa fa-fire fa-2x"></i>
                </p>
                <p>
                    <i class="fa fa-user fa-fw"></i>
                    <input id="userName"
                           type="text"
                           name="userName"
                           placeholder="用户名"
                           v-model="userName"
                           initial="off"
                           detect-change="off"
                           detect-blur="off"
                           v-validate:user-name="userRule">
                    <label for="userName"
                           v-if="$loginValidator.userName.pattern">
                        <i class="fa fa-exclamation-triangle"></i>
                        <span>账号不能包含字母数字和下划线以外的字符</span>
                    </label>
                </p>
                <p>
                    <i class="fa fa-key fa-fw"></i>
                    <input id="password"
                           type="password"
                           placeholder="密码"
                           v-model="password"
                           initial="off"
                           detect-change="off"
                           detect-blur="off"
                           v-validate:password="passwordRule">
                    <label for="password"
                           v-if="$loginValidator.password.minlength">
                        <i class="fa fa-close"></i>
                        <span>密码太短</span>
                    </label>
                    <label for="password"
                           v-if="true">
                        <span>{{info}}</span>
                    </label>
                </p>
                <p>
                    <button @click="login">登陆</button>
                </p>
                <p>
                    <span>没有账户？点击</span>
                    <span class="register">这里</span>
                    <span>注册</span>
                </p>
            </div>
        </validator>
    </section>
</template>
<script>
    import Background from './Background.vue'
    import {toggle} from '../vuex/actions'
    export default{
        data(){
            return {
                userName: '',
                password: '',
                info: '',
                userRule: {
                    pattern: '/^[a-zA-Z0-9_]+$/',
                },
                passwordRule: {
                    minlength: 1,
                    maxlength: 16,
                }
            }
        },
        ready(){
        },
        components: {Background},
        methods: {
            login(){
                this.$validate(true, ()=> {
                    if (this.$loginValidator.valid) {
                        this.toggle()
                        this.$http.post('/login', this.$data)
                            .then((response)=> {
                                this.toggle()
                                console.log(response.body)
                                let body = JSON.parse(response.body)
                                this.info = body.state
                            }, (response)=> {
                                console.log('Connection Failed')
                            })
                    }
                })
            },
        },
        vuex: {
            actions: {
                toggle
            }
        }
    }
</script>
<style lang="sass">
    @import "../SCSS/common.scss";
    @import "../SCSS/Login.scss";
</style>