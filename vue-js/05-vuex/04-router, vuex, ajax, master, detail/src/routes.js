import EmpList from './components/EmployeeList.vue'
import EmpDetail from './components/EmployeeDetail.vue'

//define all routes
export const routes = [{
    path: '',
    redirect: '/List'
  },
  {
    path: '/List',
    component: EmpList,
    name: 'EmpList'
  },
  {
    path: '/Detail/:empno',
    component: EmpDetail,
    name: 'EmpDetail'
  },
  {
    path: '*',
    redirect: '/'
  }
];
