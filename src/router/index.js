import { createRouter, createWebHistory } from 'vue-router';
import MainRoutes from './MainRoutes.js';
import AuthRoutes from './AuthRoutes.js';

export default createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/:pathMatch(.*)*',
            component: () => import('@/views/pages/Error404.vue')
        },
        MainRoutes,
        ...AuthRoutes
    ]
});

