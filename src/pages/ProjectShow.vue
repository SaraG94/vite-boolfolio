<script>
import axios, { Axios } from 'axios';
export default{
    props:['slug'],
    methods:{
        fetchProject(){
            axios.get(`http://localhost:5173/project.index/${this.slug}`)
            .then(res=>{
                console.log(res)
            })
            .catch(err=>{
                console.log(err)
            })
        }
    },
    created(){
        this.fetchProject()
    }
}
</script>

<template>
    <div>
        <div class="container">
            <h1>Dettagli:</h1>
        </div>
        <div class="container">
            <h1>{{slug}}</h1>
        </div>
    </div>
</template>

<style scoped>

</style>