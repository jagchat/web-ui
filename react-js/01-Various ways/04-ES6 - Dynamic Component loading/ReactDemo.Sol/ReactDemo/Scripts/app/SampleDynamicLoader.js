'use strict';

export default () => {
    return new Promise(resolve => {
        require.ensure([], () => {
            resolve({
                SampleDynamic: require('SampleDynamic')
            });
        }, 'SampleDynamic');
    });
};