import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

window.axios = require('axios');

Vue.use(Vuetify);

Vue.prototype.$searchAPI = 'http://localhost:8080/search';
Vue.prototype.$submitAPI = 'http://localhost:8080/submit';

new Vue({
    router: router,
    render: h => h(App)
}).$mount('#app');
