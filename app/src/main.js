import Vue from 'vue'
import App from './App.vue'
import Auth from './views/auth/Auth.vue'
import Reg from './views/auth/Registration.vue'
import router from './router'

Vue.component('Auth',Auth)
Vue.component('Reg', Reg)


new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: {
        App
    }
})
