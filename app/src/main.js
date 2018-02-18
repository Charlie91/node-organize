import Vue from 'vue'
import App from './App.vue'
import Auth from './Auth.vue'
import Reg from './Registration.vue'

Vue.component('Auth',Auth)
Vue.component('Reg', Reg)

const routes = {
    '/': App,
}


new Vue({
    el: '#app',
    data: {
        currentRoute: window.location.pathname
    },
    computed: {
        ViewComponent () {
            return routes[this.currentRoute]
        }
    },
    render (h) { return h(this.ViewComponent) }
})
