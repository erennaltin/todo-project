<template>
    <div class="tabContainer">
        <div class="controlIcon">
            <icon :tag="element.svg" />
        </div>
        <p> {{ element.title }} </p>
    </div>
</template>

<script>
import Icon from "./Icon.vue"

export default {
        name:'ControlTab',
        components: { 
            Icon 
        },
        props: {
            element: {
                type: Object,
                default() {
                    return {title: 'Today',
                    svg: 'Exclamation'}
                    }
                },
        }
    }
</script>

<style lang="less" scoped>
.tabContainer {
    display: grid;
    grid-template-columns: 50px 180px;
    align-items: center;
    text-align:right;
    width: 250px;
    height: 50px;
    transition: 0.5s;
    font-size: 14px;
    p:last-child {
        text-align: left;
        transform: translateX(+20px);
    }
    &:hover {
        padding: 10px 10px;
    }
}


</style>