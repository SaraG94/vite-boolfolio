import { createRouter, createWebHistory } from "vue-router";
//importo il componente home
import Home from './pages/Home.vue';
import Portfolio from './pages/Portfolio.vue';
import AboutMe from './pages/AboutMe.vue';

const router = createRouter({
    history: createWebHistory(),
    routes:[
        {
            path:'/',
            name:'home',
            component: Home,//assegno il componente home alla rotta home
        },
        {
            path:'/project.index',
            name:'project.index',
            component: Portfolio,
        },
        {
            path:'/about-me',
            name:'about',
            component: AboutMe,
        }
    ]
});

export {router};