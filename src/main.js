import Vue from 'vue'
import App from './App.vue'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
/*
import Home from './components/Home.vue'
import Films from './components/Films.vue'
import Characters from './components/Characters.vue'
import Planets from './components/Planets.vue'
import Vehicles from './components/Vehicles.vue'
import Spaceships from './components/Spaceships.vue'
*/

import './assets/vendor/bootstrap/css/bootstrap.min.css'
import './assets/vendor/font-awesome/css/font-awesome.min.css'
import './assets/vendor/devicons/css/devicons.min.css'
import './assets/vendor/simple-line-icons/css/simple-line-icons.css'
import './assets/css/resume.min.css'
import './assets/vendor/jquery/jquery.js'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

//Vue.use(Router)
Vue.config.productionTip = false
/*
const routes = [
  {path:'/', name:'home' , component: Home},
  {path:'/films', name:'films' , component: Films},
  {path:'/characters', name:'characters' , component: Characters},
  {path:'/planets', name:'planets' , component: Planets},
  {path:'/vehicles', name:'vehicles' , component: Vehicles},
  {path:'/spaceships', name:'spaceships' , component: Spaceships},
]

const router = new VueRouter ({
  routes
})*/

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
