<template>
    <div class="home">
    <add-project />
    <PageIcon tag="Done" color="#a8ffb9" />
    <PageIcon tag="Cancel" color="#FFE6E2" />
    <PageIcon tag="Edit" color="#fef791" />
    <PageIcon tag="Label" color="#fba960" />
    <PageIcon tag="Remove" color="#b077fc" />
    


  
  </div>
</template>

<script>
import AddProject from '../components/AddProject.vue'
import PageIcon from '../components/PageIcon.vue'



// @ is an alias to /src

export default {
  name: 'Home',
  components: {
    AddProject
    
  
   
 ,
    PageIcon   
  }
}
</script>
