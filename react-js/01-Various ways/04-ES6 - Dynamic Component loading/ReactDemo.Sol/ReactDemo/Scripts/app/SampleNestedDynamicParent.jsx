import React from 'react';
import ReactDOM from 'react-dom';

export class SampleNestedDynamicParent extends React.Component {

    constructor(...args) {
        super(...args);
        this.ComponentSampleNestedDynamicChild = null;
    }

    componentWillMount() {
        let p1 = new Promise(resolve => {
            require.ensure([], () => {
                resolve({
                    SampleNestedDynamicChild: require('SampleNestedDynamicChild')
                });
            }, 'SampleNestedDynamicChild');
        });

        p1.then((o) => {
            this.ComponentSampleNestedDynamicChild = o.SampleNestedDynamicChild.SampleNestedDynamicChild;
            this.setState({ SampleNestedDynamicChild: o.SampleNestedDynamicChild.SampleNestedDynamicChild });
        });
    }

    render() {
        let s = "this is from sample nested Dynamic parent!";
        let ComponentSampleNestedDynamicChild = this.ComponentSampleNestedDynamicChild;
        return <div>
            <div>{s}</div>
            {ComponentSampleNestedDynamicChild && <ComponentSampleNestedDynamicChild />}
            {this.state != null && 'SampleNestedDynamicChild' in this.state && <this.state.SampleNestedDynamicChild />}
        </div>;

    }
}

