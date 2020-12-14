<template>
    <div class="AddProject">
        <div class="addButton"> <p> + </p> </div>
    </div>
</template>

<script>
    export default {
        name:'AddProject'
    }
</script>

<style lang="less" scoped>
.AddProject {
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: @font;
    height: 100%;
    width: 100%;
    cursor: pointer;
    
    .addButton {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 50px;
        width: 50px;
        font-size: 50px;
        font-weight: 300;
        color: white;
        background-color: blue;
        border-radius: 999px;
        box-shadow: 0 0 4px 2px rgb(62, 62, 255);
        transition: 0.3s;
        &:hover {
            box-shadow: 0 0 6px 3px rgb(109, 153, 247);
            width: 55px;
            height: 55px;
            font-size: 60px;
        }
        p {
            transform: translateY(-1px);
            // &:hover {
            //     font-size: 80px;
            // }
        }
    }
}
</style>