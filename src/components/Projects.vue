<script>
import axios from 'axios';
import ProjectsCard from './ProjectsCard.vue';

    export default{
        //registro il componente
        components:{
            ProjectsCard
        },
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
                    const {results} = res.data;
                    this.projects = results; //assegno all'array i risultati
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
    <div class="project">
        <!-- ciclo projects e stampo il titolo -->
        <ProjectsCard v-for="project in projects" :key="project.id" :project="project" />
    </div>
</template>

<style scoped>
.project {
  display: grid;
  gap: 24px;
  grid-template-columns: repeat(4,1fr);
}
</style>