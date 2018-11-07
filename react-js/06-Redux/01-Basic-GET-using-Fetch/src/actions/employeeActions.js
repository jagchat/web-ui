import * as types from './actionTypes';
import employeeApi from '../api/employeeApi';

export function loadEmployeesSuccess(employees) {
  return {
    type: types.LOAD_EMPLOYEES_SUCCESS,
    employees
  };
}

export function loadEmployees() {
  return function (dispatch) {
    return employeeApi.getAllEmployees().then((employees) => {
      dispatch(loadEmployeesSuccess(employees));
    }).catch((error) => {
      throw (error)
    });
  }
}

export function createEmployeeSuccess(employee) {
  return {
    type: types.CREATE_EMPLOYEE_SUCCESS,
    employee
  }
}

export function updateEmployeeSuccess(employee) {
  return {
    type: types.UPDATE_EMPLOYEE_SUCCESS,
    employee
  }
}

export function saveEmployee(employee) {

}