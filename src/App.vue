<script>
// importo il componente Projects
import Projects from './components/Projects.vue';

export default{
  //registro il componente
  components:{
    Projects
  }
}
</script>

<template>
  <div class="container">
    <!-- uso il componente -->
    <Projects />
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
