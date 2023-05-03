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
  <header>
    <h1>Portfolio</h1>
  </header>
  <router-view></router-view>
  <footer>
    <h4>footer</h4>
  </footer>
</template>

<style scoped>
.title{
  padding: 24px 0;
}
</style>
