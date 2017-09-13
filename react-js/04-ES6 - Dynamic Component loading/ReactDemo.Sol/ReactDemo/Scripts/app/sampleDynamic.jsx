import React from 'react';
import ReactDOM from 'react-dom';

export class SampleDynamic extends React.Component {

    constructor(...args) {
        super(...args);
    }

    render() {
        let s = "this is from sample Dynamic!";
        return <div>
                   <div>{s}</div>
               </div>;

    }
}

