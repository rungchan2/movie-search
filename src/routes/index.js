import { createRouter, createWebHashHistory} from 'vue-router'
import Home from './Home'
import About from './About'
import Movie from './Movie'

export default createRouter({
  //hash, history mode

  history: createWebHashHistory(),

  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/about',
      component: About 
    },
    {
      path: '/movie',
      component: Movie 
    }
  ]
})