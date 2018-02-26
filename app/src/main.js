import Vue from 'vue'
import App from './App.vue'
import Auth from './views/auth/Auth.vue'
import Reg from './views/auth/Registration.vue'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.component('Auth',Auth)
Vue.component('Reg', Reg)
Vue.use(BootstrapVue);

new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: {
        App
    }
})
