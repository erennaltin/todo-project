<template>
  <div class="body">
    <div class="app">
      <side-bar class="sideBar" />
      <project-page class="projectPage" />
    </div>
  </div>
</template>

<script>
import SideBar from '../components/SideBar.vue'
import ProjectPage from '../components/ProjectPage.vue'
  export default {
  components: { 
    SideBar,
    ProjectPage
    },
    name:'About'
  }

    ProjectPage</script>

<style lang="less" scoped>
.body {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto 0;
  background-color: #8BC6EC;
  background-image: linear-gradient(135deg, #8BC6EC 0%, #9599E2 100%);
}

.app {
  width: 1050px;
  height: 780px;
  background-color: white;
  display: grid;
  grid-template-columns: 250px 800px;
  grid-template-areas: "A B"
                       "A B"
                       "A B";
  border-radius: 25px;
}

.sideBar {
  grid-area: A;
}

.projectPage {
  grid-area: B;
}
</style>