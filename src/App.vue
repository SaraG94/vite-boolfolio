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
footer{
  padding: 30px 0;
}
</style>
