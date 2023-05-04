<script>
export default {
    props: {
        project: {
            type: Object,
            required: true
        }
    },
}
</script>

<template>
    <div class="project-card">
        <router-link :to="`/projects/${project.slug}`">
            <h3>{{ project.titolo }}</h3>
            <p>{{ project.cliente }}</p>
        </router-link>
    </div>
</template>

<style scoped>

</style>