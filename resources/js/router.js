import { createWebHistory, createRouter } from 'vue-router';
import Index from './components/pages/Index.vue';

const routes = [
    { 
        path: '/',
        name: 'Index',
        component: Index,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;