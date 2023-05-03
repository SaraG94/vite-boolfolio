<script>
// importo il componente Projects
import Projects from '../components/Projects.vue';

export default{
  //registro il componente
  components:{
    Projects
  }
}
</script>

<template>
    <div class="container">
        <h1 class="title">Projects</h1>
        <!-- uso il componente -->
        <Projects />
    </div>
</template>

<style scoped>
.title{
  padding: 24px 0;
}
</style>