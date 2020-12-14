<template>
    <div class="SideBar" @click="changeWindow" >
        <h1 class="main-text"> To-Do App </h1>
        <div class="progress"></div>
        <div class="controlPanel">
            <control-panel />
            <sub-topic />
            <sub-topic />
            <sub-topic />
            <sub-topic />
        </div>
        <add-project class="addProject" />

    </div>
</template>

<script>
import AddProject from './AddProject.vue';
import ControlPanel from './ControlPanel.vue'
import SubTopic from './SubTopic.vue'

export default {
    components: { 
      ControlPanel, SubTopic,
        AddProject },
    name:'SideBar',
    mounted () {
        document.querySelector(".controlPanel").addEventListener('scroll', this.changeWindow);
    },
    unmounted () {
        document.querySelector(".controlPanel").removeEventListener('scroll', this.changeWindow);
    },
    methods: {
        changeWindow() {
            let x = document.querySelector(".controlPanel").scrollTop;
            let height =document.querySelector(".controlPanel").scrollHeight 
            document.body.style.setProperty('--scroll',(10*x)/height);
        }
    }
}
</script>

<style lang="less" scoped>
.SideBar {
    display: grid;
    grid-template-columns: 230px 20px;
    grid-template-rows: 60px 620px 1fr;
    grid-template-areas:"C C"
                        "A B"
                        "D D";
    align-items: center;
    justify-items: center;
    background-color: @bgb;
    font-family:@font;


    .main-text {
        text-align: center;
        grid-area: C;
        // transform: translate(30px,15px);
        // font-family: 'Roboto', sans-serif;
    }
    .controlPanel {
        grid-area: A;
        margin-top: 5px;
        height: 100%;
        border-radius: 50px;
        overflow-y: scroll;
        scrollbar-width: 0;
        &::-webkit-scrollbar {
            display: none;
        }
    }
    
    .addProject {
        grid-area: D;
    }
}
.progress {
    grid-area: B;
  height: 0%;
  transform: translateX(10px);
  width: 6px;
  border-radius: 3px;
  background-color: rgb(0, 183, 255);
  animation: progress 1s linear;
}

@keyframes progress {
  to {
    background-color: #0082de;
    background-image: linear-gradient(180deg, #0082de 0%, #FC00FF 100%);
    height: 100%;
  }
}
:root * {

  /* Pause the animation */
  animation-play-state: paused;
  /* Bind the animation to scroll */
  animation-delay: calc(var(--scroll) * -0.1s);
  /* These last 2 properites clean up overshoot weirdness */
  animation-iteration-count: 1;
  animation-fill-mode: both;
}




</style>