import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// Main Views
import Login from './views/Login.vue'
import Appointments from './views/Appointments.vue'
// List Views
import Clients from './views/Clients.vue'
import Pets from './views/Pets.vue'
import Services from './views/Services.vue'
import Plans from './views/Plans.vue'
import Promotions from './views/Promotions.vue'

export default new Router({
  routes: [
    // Main Views
    {path: '/Login', name: 'Login', component: Login},
    {path: '/Appointments', name: 'Atendimentos', component: Appointments},
    // List Views
    {path: '/Clients', name: 'Clientes', component: Clients},
    {path: '/Pets', name: 'Pets', component: Pets},
    {path: '/Services', name: 'Serviços', component: Services},
    {path: '/Plans', name: 'Planos', component: Plans},
    {path: '/Promotions', name: 'Promoções', component: Promotions},
    // Default
    {path: '*', redirect: '/Appointments'}
  ]
})