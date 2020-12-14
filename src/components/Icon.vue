<template>
        <component class="icon" :is="tag" id="svg" />
</template>

<script>
import Exclamation from '@/assets/Icons/Exclamation.svg'
import Upcoming from '@/assets/Icons/Upcoming.svg'
import Inbox from '@/assets/Icons/Inbox.svg'
import Completed from '@/assets/Icons/Completed.svg'
import Trash from '@/assets/Icons/Trash.svg'
import Element from '@/assets/Icons/Element.svg'
import Element2 from '@/assets/Icons/Element2.svg'
    
    export default {
        name:'Icon',
        components: {
            Exclamation,
            Upcoming,
            Inbox,
            Completed,
            Trash,
            Element,
            Element2
        },
        props: {
            tag: {
                default: 'Exclamation'
            },
        },
        created(){
            document.body.style.setProperty(`--Iconcolor`,this.color)
        }
    }
</script>

<style lang="less" scoped>
.icon {
    height: 20px;
    width: 20px;
}


</style>