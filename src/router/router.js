import {createRouter, createWebHistory} from 'vue-router'
const Graffiti = () => import('@/views/Graffiti.vue');
const notFoundView = () => import('@/views/notFound.vue');
const graphicsView = () => import ('@/views/graphics.vue');
const portfolioView = () => import ('@/views/portfolio.vue');
const caseStudiesView = () => import ('@/views/caseStudies.vue');
const contactView = () => import ('@/views/contact.vue')
// const homeView = () => import('@/views/home.vue')

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes:[
        {
            path: `/`,
            name: 'graffiti',
            component:  Graffiti,
            redirect: '/portfolio',
            children:[
                {
                    path: 'portfolio',
                    name: 'portfolio',
                    component: portfolioView
                },
                {
                    path: 'graphics',
                    name: 'graphics',
                    component: graphicsView
                },
                {
                    path: 'case-studies',
                    name: 'case-studies',
                    component: caseStudiesView
                },
                {
                    path: 'contact',
                    name: 'contact',
                    component: contactView
                },
            ]
        },
        {
            path: '/:pathMatch(.*)*',
            name: 'not-found',
            component: notFoundView
        },
    ], 
});


export default router