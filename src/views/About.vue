<template>
  <div class="body">
    <div class="app">
      <side-bar class="sideBar" />
    </div>
  </div>
</template>

<script>
import SideBar from '../components/SideBar.vue'
  export default {
  components: { SideBar },
    name:'About'
  }
</script>

<style lang="less" scoped>
.body {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto 0;
}

.app {
  width: 1050px;
  height: 780px;
  background-color: red;
  display: grid;
  grid-template-columns: 250px 800px;
  grid-template-rows: 160px 550px 70px;
  grid-template-areas: "A B"
                       "A C"
                       "A D";
  border-radius: 25px;
}

.sideBar {
  grid-area: A;
  
}
</style>