import Vue from 'vue'
import Vuex from 'vuex';
Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    msgFromStore: "Msg from Store"
  },
  getters: {
    msgFromStore: state => state.msgFromStore
  }
});
