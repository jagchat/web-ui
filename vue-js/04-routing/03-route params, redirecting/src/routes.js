import Data from './components/DataEntry.vue'
import Result from './components/Result.vue'

//define all routes
export const routes = [{
    path: '',
    redirect: '/Data'
  },
  {
    path: '/Data',
    component: Data,
    name: 'DataPart'
  },
  {
    path: '/Result/:a/:b',
    component: Result,
    name: 'ResultPart'
  },
  {
    path: '*',
    redirect: '/'
  }
];
