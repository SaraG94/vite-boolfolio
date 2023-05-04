import { createRouter, createWebHistory } from "vue-router";
//importo il componente home
import Home from './pages/Home.vue';
import Portfolio from './pages/Portfolio.vue';
import AboutMe from './pages/AboutMe.vue';
import ProjectShow from './pages/ProjectShow.vue';
import NotFound from './pages/NotFound.vue';

const router = createRouter({
    history: createWebHistory(),
    routes:[
        {
            path:'/',
            name:'home',
            component: Home,//assegno il componente home alla rotta home
        },
        {
            path:'/project',
            name:'project.index',
            component: Portfolio,
        },
        {
            path:'/about-me',
            name:'about',
            component: AboutMe,
        },
        {
            path:'/projects/:slug',
            name:'project.show',
            component:ProjectShow,
            props: true,
        },
        {
			path: '/404',
			name: '404',
			component: NotFound,
		},
    ]
});

export {router};