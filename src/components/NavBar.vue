<script>
export default{

}
</script>

<template>
    <header>
        <div class="container nav">
            <router-link :to="{ name: 'home'}">Portfolio</router-link>

            <ul class="nav__menu">
                <li>
                    <router-link :to="{name: 'home'}">Home</router-link>
                </li>
                <li>
                    <router-link :to="{name: 'project.index'}">Project</router-link>
                </li>
                <li>
                    <router-link :to="{name: 'about'}">About Me</router-link>
                </li>
            </ul>
        </div>
    </header>
</template>

<style scoped>
.nav, .nav__menu {
  display: flex;
  align-items: center;
  gap: 2rem;
}
.nav__menu {
  margin-left: auto;
}
</style>