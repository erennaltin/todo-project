<template>
    <div class="ProjectPage">
        <page-header class="pageHeader"/>
        <note-desc class="noteDescription" />
        <page-control class="pageControl" />
    </div>
</template>

<script>
import NoteDesc from './NoteDesc.vue'
import PageControl from './PageControl.vue'
import PageHeader from './PageHeader.vue'

export default {
    name: 'ProjectPage',
    components: {
        PageHeader,
        NoteDesc,
        PageControl
    }
    

}
</script>



<style lang="less" scoped>
.ProjectPage {
    display: grid;
    grid-template-rows: 160px 550px 70px;
    grid-template-areas: "A"
                         "B"
                         "C";
    justify-content: center;
    align-content: center;
}

.pageHeader {
    grid-area: A;
}

.noteDescription {
    grid-area: B;
}

.pageControl {
    grid-area: C;
}
</style>