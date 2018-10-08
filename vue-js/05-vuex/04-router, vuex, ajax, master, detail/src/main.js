import Vue from 'vue'
import App from './App.vue'

//bootstrap
import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
Vue.use(BootstrapVue);

//vue router
import VueRouter from 'vue-router' //import router library
Vue.use(VueRouter); //enable Vue Router in Vue instance
import {
  routes
} from './routes' //import all routes defined in this file
const router = new VueRouter({
  routes
});

//vuex store
import Vuex from 'vuex' //importing vuex
Vue.use(Vuex); //enable vuex
import {
  store
} from './store/store' //import store to be used in all components and in app

new Vue({
  el: '#app',
  store, //register store (accessible through out app and all components automatically using 'this.$store')
  router, //register routes for the Vue instance
  render: h => h(App)
})
