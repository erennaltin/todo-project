<template>
    <div name="SubTopic">
        <h5 class="projectName"> PROJECT </h5>
        <div class="projectElements" v-for="element in elements" :key="element">
            <control-tab :element="element" />
        </div>
    </div>
</template>

<script>
import ControlTab from './ControlTab.vue'
    export default {
  components: { ControlTab },
        name:'SubTopic',
        data(){
            return {
                elements: [{
                    title: 'Element1',
                    svg: 'Element'
                },
                {
                    title: 'Element2',
                    svg: 'Element2'
                },
                {
                    title: 'Element3',
                    svg: 'Element2'
                }]
            }
        }
    }
</script>

<style lang="less" scoped>
.projectName {
    padding: 5px 0;
    transform: translateX(30px);
    color: @projectNameColor;
}
</style>