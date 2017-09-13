import React from 'react';
import ReactDOM from 'react-dom';

export class SampleNestedDynamicChild extends React.Component {

    constructor(...args) {
        super(...args);
    }

    render() {
        let s = "this is from sample nested Dynamic child (invoked by parent)!";
        return <div>
                   <div>{s}</div>
               </div>;

    }
}

