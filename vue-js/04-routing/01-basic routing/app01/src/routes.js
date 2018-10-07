import Home from './components/Home.vue'
import About from './components/About.vue'

//define all routes
export const routes = [{
    path: '',
    component: Home
  },
  {
    path: '/Home',
    component: Home
  },
  {
    path: '/About',
    component: About
  }
];
