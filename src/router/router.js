import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'

Vue.use(Router);

export default new Router({
    mode: 'history',
    hash: false,
    routes: [
        {path: '/', name: 'home', component: Hello},
        {path: '/tellstory', name: 'home', component: Hello},
        {path: '/statistica', name: 'home', component: Hello},
        // {path: '/card', name: 'home', component: Hello},
    ]
})
