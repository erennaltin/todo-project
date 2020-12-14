<template>
<div class="mainIconControl" >
    <div class="PageIcon" :id="tag">
        <component class="icon" :is="tag" id="svg" />
    </div>
    <p> {{ tag }} </p>
</div>
</template>

<script>
import Done from '@/assets/Icons/Done.svg'
import Cancel from '@/assets/Icons/Cancel.svg'
import Edit from '@/assets/Icons/Edit.svg'
import Label from '@/assets/Icons/Label.svg'
import Remove from '@/assets/Icons/Remove.svg'





    
    export default {
        name:'PageIcon',
        components: {
            Done,
            Cancel,
            Edit,
            Label,
            Remove
        },
        props: {
            tag: {
                default: 'Done'
            },
            color: {
                default: 'yellow'
            }
        },
        mounted(){
            document.querySelector(`#${this.tag}`).style.backgroundColor = this.color
            document.querySelector(`#${this.tag}`).parentElement.style.backgroundColor = this.color
        },
        
    }
</script>

<style lang="less" scoped>
.icon {
    height: 20px;
    width: 20px;
}

.PageIcon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 35px;
    height: 35px;
    border-radius: 10px;
}
.mainIconControl {
    display: grid;
    grid-template-columns: 35px 1fr ;
    grid-template-areas:"A B" ;
    align-items: center;
    height: 35px;
    width: 35px;
    border-radius: 10px;
    transition: 1s;
    &:hover {
        width: 100px;
    p {
        visibility: visible;
        grid-area: B;

    }
    }
    p {
        display: inline-block;
        padding: 10px;
        visibility: hidden;
        text-align: center;
    }
}


</style>