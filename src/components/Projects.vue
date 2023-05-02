<script>
import axios from 'axios';

    export default{
        data() {
            return{
                projects:[]
            }
        },
        methods:{
            fetchProjects(){
                //chiamata axios
                axios.get('http://127.0.0.1:8000/api/projects')
                .then(res=>{
                    console.log(res); //prendo i risultati
                })
                .catch(err=>{
                    console.log(err); //in caso di errore
                })
            }
        },
        mounted(){
            this.fetchProjects() //popolo l'array projects con il metodo creato
        }
    }
</script>

<template>
    <div>
        <!-- ciclo projects e stampo il titolo -->
        <p v-for="project in projects" :key="project.id">{{ project.titolo }}</p>
    </div>
</template>

<style scoped>

</style>