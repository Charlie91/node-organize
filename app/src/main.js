import Vue from 'vue'
import App from './App.vue'
import Auth from './views/auth/Auth.vue'
import Reg from './views/auth/Registration.vue'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import axios from 'axios';
import VueAxios from 'vue-axios'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.component('Auth',Auth)
Vue.component('Reg', Reg)
Vue.use(BootstrapVue)
Vue.use(VueAxios, axios)

Vue.axios.interceptors.response.use((response) => { // intercept the global error
    return response
}, function (error) {
    if(error.response.status === 401 && window.location.pathname !== '#/auth' ){
        window.location = window.location.origin + window.location.pathname + '#/auth';
        //перезагружаем страницу и редиректим если незалогинен
    }
})

new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: {
        App
    }
})
