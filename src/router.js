import { createRouter, createWebHistory } from "vue-router";
//importo il componente home
import Home from './pages/Home.vue'

const router = createRouter({
    history: createWebHistory(),
    routes:[
        {
            path:'/',
            name:'home',
            component: Home,//assegno il componente home alla rotta home
        },
        {

        },
        {

        }
    ]
});

export {router};