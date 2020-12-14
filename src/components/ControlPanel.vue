<template>
    <div class="ControlPanel">
        <control-tab v-for="element in elements" :key="element" :element="element"/>
    </div>
</template>

<script>
import ControlTab from './ControlTab.vue'
    export default {
  components: { ControlTab },
        name:'ControlPanel',
        data(){
            return {
                elements: [{
                    title: 'Inbox',
                    svg: 'Inbox'
                },
                {
                    title: 'Today',
                    svg: 'Exclamation'
                },
                {
                    title: 'Upcoming',
                    svg: 'Upcoming'
                },
                {
                    title: 'Completed',
                    svg: 'Completed'
                },
                {
                    title: 'Trash',
                    svg: 'Trash'
                }]
            }
        }
    }
</script>

<style lang="less" scoped>

</style>