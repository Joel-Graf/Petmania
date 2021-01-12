import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import router from './router'
import axios from 'axios'

const base = axios.create({
  baseURL: 'http://localhost:81/pessoal/petmania'
});

Vue.prototype.$http = base; 
Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')