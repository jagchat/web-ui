import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    render() {
        let s = "Hello World!";
        return <div>{s}</div>;
    }
}

ReactDOM.render(<App />, document.getElementById('app-container'));