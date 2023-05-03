<script>
export default{

}
</script>

<template>
  <header>
    <h1>Portfolio</h1>
  </header>

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
