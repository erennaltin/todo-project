<template>
    <div class="ProjectPage">
        <page-header class="pageHeader"/>
        <note-desc class="noteDescription" />

    </div>
</template>

<script>
import NoteDesc from './NoteDesc.vue'
import PageHeader from './PageHeader.vue'

export default {
    name: 'ProjectPage',
    components: {
        PageHeader,
        NoteDesc
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
</style>