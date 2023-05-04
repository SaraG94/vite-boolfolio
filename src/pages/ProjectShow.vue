<script>
import axios, { Axios } from 'axios';
export default{
    props:['slug'],
    methods:{
        fetchProject(){
            axios.get(`http://127.0.0.1:8000/api/projects/${this.slug}`)
            .then(res=>{
                const {success, project} = res.data

                if(success){
                    this.project = project
                }else{
                    this.$router.replace({name:'404'})
                }
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