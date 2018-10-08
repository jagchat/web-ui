import Vue from 'vue'
import App from './App.vue'

//import bootstrap
import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
Vue.use(BootstrapVue);

import Vuex from 'vuex' //importing vuex
Vue.use(Vuex); //enable vuex

import {
  store
} from './store/store' //import store to be used in all components and in app

new Vue({
  el: '#app',
  store, //register store (accessible through out app and all components automatically using 'this.$store')
  render: h => h(App)
})
