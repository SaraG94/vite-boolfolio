<script>
import NavBar from './components/NavBar.vue';
export default{
  
  components: {
    NavBar
  }
}
</script>

<template>
  <NavBar/>

  <main>
    <!-- permette di montare i componenti definiti nelle rotte -->
    <router-view></router-view> 
  </main>

  <footer>
    <h4>footer</h4>
  </footer>
</template>

<style scoped>
.title{
  padding: 24px 0;
}
</style>
