<template>
    <div class="NoteDesc" >
        <textarea class="noteArea" rows="3" cols="3" placeholder="Write here your notes!">  </textarea>
        <div class="progress"></div>
    </div>
</template>

<script>
    export default {
        name:'NoteDesc',
        mounted () {
        document.querySelector(".noteArea").addEventListener('scroll', this.changeWindow);
        },
        unmounted () {
        document.querySelector(".noteArea").removeEventListener('scroll', this.changeWindow);
        },
        methods: {
            changeWindow() {
                let y = document.querySelector(".noteArea").scrollTop;
                let height =document.querySelector(".noteArea").scrollHeight 
                document.body.style.setProperty('--scrollnote',(10*y)/height);
                console.log(y)
                }
        }
    }
</script>

<style lang="less" scoped>
.NoteDesc {
    display: grid;
    justify-items: center;
    align-items: center;
    grid-template-columns: 760px 40px;
    grid-template-areas: "A B";


    .noteArea {
        border-radius: 15px;
        padding-top: 10px;
        grid-area: A;
        width: 98%;
        height: 96%;
        background-color: white;
        overflow-y: scroll;
        resize: none;
        font-size: 18px;
        margin-left: 45px;
        &::-webkit-scrollbar {
            display: none;
        }
    }}
    .progress {
        grid-area: B;
        height:100%;
        width: 6px;
        border-radius: 3px;
        // background-color: rgb(0, 183, 255);
        background-color: black;
        animation: progress 1s linear;

    }

    // @keyframes progress {
    // to {
    //     background-color: #0082de;
    //     background-image: linear-gradient(180deg, #0082de 0%, #FC00FF 100%);
    //     height: 100%;
    //     }
    // }
    :root * {

    /* Pause the animation */
    animation-play-state: paused;
    /* Bind the animation to scroll */
    animation-delay: calc(var(--scrollnote) * -0.1s);
    /* These last 2 properites clean up overshoot weirdness */
    animation-iteration-count: 1;
    animation-fill-mode: both;
    }



</style>