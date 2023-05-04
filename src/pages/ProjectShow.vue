<script>
import axios, { Axios } from 'axios';
export default{
    data(){
        return{
            project: null
        }
    },
    props:['slug'],
    methods:{
        fetchProject(){
            axios.get(`http://127.0.0.1:8000/api/projects/${this.slug}`)
            .then(res=>{
                console.log(res)
                const {success, project} = res.data

                if(success){
                    this.project = res.data.results
                    console.log(this.project)
                }else{
                    this.$router.replace({name:'404'})
                }
            })
            .catch(err=>{
                this.$router.replace({name:'404'})
            })
        }
    },
    created(){
        this.fetchProject()
    }
}
</script>

<template >
    <div v-if="project">
        <div class="container">
            <h1>Dettagli:</h1>
        </div>
        <div class="container">
            <h1>{{ project.titolo }}</h1>
            <h4>{{slug}}</h4>

            <p>{{ project.descrizione }}</p>
        </div>
    </div>

 
</template>

<style scoped>

</style>