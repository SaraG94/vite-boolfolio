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
        <h3>{{ project.titolo }}</h3>
        <p>{{ project.cliente }}</p>
    </div>
</template>

<style scoped>

</style>