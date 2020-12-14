<template>
    <div >
        <div v-if="mode === 'edit' " class="PageControl">
            <PageIcon tag="Done" @click="changeMode" color="#a8ffb9" />
            <PageIcon tag="Cancel" color="#FFE6E2" />
        </div>
        <div v-if="mode === 'standart' " class="PageControl">
            <PageIcon tag="Edit" @click="changeMode" color="#fef791" />
            <PageIcon tag="Label" color="#fba960" />
            <PageIcon tag="Remove" color="#b077fc" />
        </div>
    </div>
</template>

<script>

import PageIcon from '../components/PageIcon.vue'

export default {
        name:'PageControl',
        components: {
            PageIcon
        },
        data(){
            return {
                mode: 'standart'
            }
        },
        methods: {
            changeMode(){
                if(this.mode ==='edit') {
                    this.mode = 'standart'
                }
                else{
                    this.mode = 'edit'
                }
            }
        }
    }
</script>

<style lang="less" scoped>
.PageControl {
    display: flex;
    justify-content: space-evenly;
    margin-left: 30px;
    transition: 1s;
}

</style>