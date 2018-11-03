import React, { Component } from 'react';
import './App.css';

class App extends Component {
    render() {
        return (
            <div>
                <h1 className="header">My first React App</h1>
                <button className="btn btn-primary">Just a dummy button</button><br />
                <img src={require('./images/react.png')} />
            </div>
        )
    }
}

export default App;