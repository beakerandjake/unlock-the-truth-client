import angular from 'angular';
import errorComponent from './error.component';
import './error.css';
import './error.jpg';


// Module which has the error display component.  

const moduleName = 'unlock-the-truth.error';

angular
    .module(moduleName, [])
    .component('uttError', errorComponent)

    // Configure the routing for this module. 
    .config($stateProvider => {
        'ngInject';

        // Register the home state, and add the home component to it. 
        $stateProvider.state('error', {
            url: '/error',
            component: 'uttError',
            params: {
                // allow this state to be transitioned to with an error param. 
                error: null
            }
        });
    });

export default moduleName;