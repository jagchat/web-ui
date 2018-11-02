import React from 'react';
import ReactDOM from 'react-dom';

export class SampleDynamicInFolder extends React.Component {

    constructor(...args) {
        super(...args);
    }

    render() {
        let s = "this is from sample Dynamic in Folder!";
        return <div>
                   <div>{s}</div>
               </div>;

    }
}

