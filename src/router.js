import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Films from './views/Films.vue'
import Characters from './views/Characters.vue'
import Planets from './views/Planets.vue'
import Vehicles from './views/Vehicles.vue'
import Starships from './views/Starships.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/films',
      name: 'films',
      component: Films
    },
    {
      path: '/characters',
      name: 'characters',
      component: Characters
    },
    {
      path: '/planets',
      name: 'planets',
      component: Planets
    },
    {
      path: '/vehicles',
      name: 'vehicles',
      component: Vehicles
    },
    {
      path: '/starships',
      name: 'starships',
      component: Starships
    }
  ]
})
