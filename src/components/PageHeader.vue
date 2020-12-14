<template>
    <div class="PageHeader">
        <h4> Project Name </h4>
        <h1> Note Name </h1>
        <div class="minInfo">
            <p> Note Category </p>
            <p> Date </p>
        </div>
    </div>
</template>

<script>
    export default {
        name:'PageHeader'
    }
</script>

<style lang="less" scoped>

.PageHeader {
    display: grid;
    grid-template-columns: 650px 150px;
    grid-template-rows: 50px 100px;
    align-items: flex-end;
    grid-template-areas: "A B"
                         "C B";
    background-color: @phb;
    border-bottom: 1px solid @bgb;
    padding: 0;
}

.minInfo {
    grid-area: B;
    height: 60%;
    margin-top: 20px;
    align-self: flex-start;
    color: @pnc;
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-evenly;

}

h4 {
    margin-left: 20px;
    grid-area: A;
    color: @phh;
}

h1 {
    margin-left: 30px;
    font-size: 50px;
    grid-area: C;
    transform: translateY(-20px);
}


</style>