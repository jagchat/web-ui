import React from 'react';
import ReactDOM from 'react-dom';

export default class SampleInFolder extends React.Component {

    constructor(...args) {
        super(...args);
    }

    render() {
        let s = "this is from sample in folder!";
        return <div>
                   <div>{s}</div>
               </div>;

    }
}

