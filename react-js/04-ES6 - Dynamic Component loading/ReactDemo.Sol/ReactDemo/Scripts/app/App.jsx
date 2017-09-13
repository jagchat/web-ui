import React from 'react';
import ReactDOM from 'react-dom';
import Sample from 'Sample';
import SampleInFolder from 'JustAFolder/SampleInFolder';

class App extends React.Component {

    constructor(...args) {
        super(...args);
        this.ComponentSampleDynamic = null;
        this.ComponentSampleDynamicInFolder = null;
        this.ComponentSampleNestedDynamicParent = null;
    }

    onShowAnother = () => {

        ////dynamic loading, but synchronous 
        //require.ensure([], () => {
        //    let SampleDynamic = require('SampleDynamic');
        //    //...write any code based on SampleDynamic here
        //}, 'SampleDynamic');


        //dynamic loading, but asynchronous 
        let p1 = new Promise(resolve => {
            require.ensure([], () => {
                resolve({
                    SampleDynamic: require('SampleDynamic')
                });
            }, 'SampleDynamic');
        });

        p1.then((o) => {
            this.ComponentSampleDynamic = o.SampleDynamic.SampleDynamic;
            this.setState({ SampleDynamic: o.SampleDynamic.SampleDynamic });
        });

        let p2 = new Promise(resolve => {
            require.ensure([], () => {
                resolve({
                    SampleDynamicInFolder: require('JustAFolder/SampleDynamicInFolder')
                });
            }, 'SampleDynamicInFolder');
        });

        p2.then((o) => {
            this.ComponentSampleDynamicInFolder = o.SampleDynamicInFolder.SampleDynamicInFolder;
            this.setState({ SampleDynamicInFolder: o.SampleDynamicInFolder.SampleDynamicInFolder });
        });

        let p3 = new Promise(resolve => {
            require.ensure([], () => {
                resolve({
                    SampleNestedDynamicParent: require('SampleNestedDynamicParent')
                });
            }, 'SampleNestedDynamicParent');
        });

        p3.then((o) => {
            this.ComponentSampleNestedDynamicParent = o.SampleNestedDynamicParent.SampleNestedDynamicParent;
            this.setState({ SampleNestedDynamicParent: o.SampleNestedDynamicParent.SampleNestedDynamicParent });
        });
    }

    render() {
        let s = "Hello World test!";
        let ComponentSampleDynamic = this.ComponentSampleDynamic;
        let ComponentSampleDynamicInFolder = this.ComponentSampleDynamicInFolder;
        let ComponentSampleNestedDynamicParent = this.ComponentSampleNestedDynamicParent;
        return <div>
            <div>{s}</div>
            <Sample />
            <SampleInFolder />
            <button onClick={this.onShowAnother}>Show Another View</button>
            {ComponentSampleDynamic && <ComponentSampleDynamic />}
            {ComponentSampleDynamicInFolder && <ComponentSampleDynamicInFolder />}
            {ComponentSampleNestedDynamicParent && <ComponentSampleNestedDynamicParent />}
            {this.state != null && 'SampleDynamic' in this.state && <this.state.SampleDynamic />}
            {this.state != null && 'SampleDynamicInFolder' in this.state && <this.state.SampleDynamicInFolder />}
            {this.state != null && 'SampleNestedDynamicParent' in this.state && <this.state.SampleNestedDynamicParent />}
        </div>;

    }
}

ReactDOM.render(<App />, document.getElementById('app-container'));