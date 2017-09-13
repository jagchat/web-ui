import React from 'react';
import ReactDOM from 'react-dom';

export default class Sample extends React.Component {

    constructor(...args) {
        super(...args);
    }

    render() {
        let s = "this is from sample!";
        return <div>
                   <div>{s}</div>
               </div>;

    }
}

