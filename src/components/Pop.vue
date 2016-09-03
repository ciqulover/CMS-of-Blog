<template>
    <div class="shade">
        <div class="content">
            <p>{{getPopPara.content}}</p>
            <div class="button">
                <button class="ok" @click="ok">确定</button>
                <button class="cancel" @click="cancel"
                        v-if="getPopPara.cb2">取消
                </button>
            </div>
        </div>
    </div>
</template>

<script>

    import {getPopPara} from '../vuex/getters'
    export default{

        vuex: {
            getters: {
                getPopPara,
            }
        },
        methods: {
            ok(){
                let fn = this.getPopPara.cb1
                typeof fn == 'function' && fn()
            },
            cancel(){
                let fn = this.getPopPara.cb2
                typeof fn == 'function' && fn()
            }
        }

    }
</script>
<style lang="sass">
    @import "../SCSS/Pop.scss";
</style>