import React from 'react';
import {
    render
} from 'react-dom';
import App from './components/app';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
import { loadEmployees } from './actions/employeeActions';

const store = configureStore();
store.dispatch(loadEmployees());

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')
);

if (module.hot) {
    module.hot.accept();
}