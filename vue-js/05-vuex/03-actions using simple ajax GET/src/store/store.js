import Vue from 'vue'
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    PENDING: false,
    FAILURE: null,
    DATA_ERROR: null,
    DATA: null
  },
  getters: {
    PENDING: state => state.PENDING,
    FAILURE: state => state.FAILURE,
    DATA_ERROR: state => state.DATA_ERROR,
    DATA: state => state.DATA
  },
  mutations: {
    DATA_PENDING(state) {
      state.PENDING = true;
      state.FAILURE = false;
    },
    DATA_SUCCESS(state, m) {
      state.PENDING = false;
      state.DATA = m;
      state.FAILURE = false;
    },
    DATA_FAILURE(state, m) {
      state.PENDING = false;
      state.DATA_ERROR = m;
      state.FAILURE = true;
    }
  },
  actions: {
    getEmployeesAsync(store) {
      store.commit("DATA_PENDING");
      axios("http://localhost:8000/api/Employees", {})
        .then(resp => {
          store.commit("DATA_SUCCESS", resp.data);
        })
        .catch(error => {
          store.commit("DATA_FAILURE");
        })
    }
  }
});
