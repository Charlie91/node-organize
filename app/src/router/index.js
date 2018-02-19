import Vue from 'vue'
import Router from 'vue-router'

// Containers
import Full from './../containers/Full'
import Empty from './../containers/Empty'
import Dashboard from './../views/Dashboard'

// Views

Vue.use(Router)

export default new Router({
    mode: 'hash',
    linkActiveClass: 'open active',
    scrollBehavior: () => ({ y: 0 }),
    routes: [
        {
            path: '/',
            redirect: '/dashboard',
            name: 'Home',
            component: Full,
            children: [
                {
                    path: 'dashboard',
                    name: 'Dashboard',
                    component: Dashboard
                }

            ]
        },
        {
            path: '/auth',
            name: 'Auth',
            component: Empty,
        },
    ]
})
