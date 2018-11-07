import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import EmployeeList from './EmployeeList';

class App extends Component {
    render() {
        return (
            <div>
                <Header></Header>
                <EmployeeList></EmployeeList>
            </div>
        )
    }
}

export default App;