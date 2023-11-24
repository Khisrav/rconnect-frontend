import { createRouter, createWebHashHistory } from "vue-router"
import Home from './views/HomeView.vue'
import LoginView from './views/LoginView.vue'
import ProfileView from './views/ProfileView.vue'
import RegisterView from './views/RegisterView.vue'

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {path: '/', component: Home},
        {path: '/login', component: LoginView},
        {path: '/profile', component: ProfileView},
        {path: '/register', component: RegisterView},
        // {path: '/about', component: () => import(/* webpackChunkName: "about" */ './views/About.vue')},
    ]
});

export default router;