import axios from 'axios';
import {
  store
} from './store';

export default {

  getEmployeesAsync() {
    store.commit("DATA_PENDING");
    return axios("http://localhost:8000/api/Employees", {})
      .then(resp => {
        store.commit("DATA_SUCCESS");
        return resp.data;
      })
      .catch(error => {
        store.commit("DATA_FAILURE");
      })
  },

  getEmployeeAsync(empno) {
    store.commit("DATA_PENDING");
    return axios(`http://localhost:8000/api/Employees/${empno}`, {})
      .then(resp => {
        store.commit("DATA_SUCCESS");
        return resp.data;
      })
      .catch(error => {
        store.commit("DATA_FAILURE");
      })
  }

};
