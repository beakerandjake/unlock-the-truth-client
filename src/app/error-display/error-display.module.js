import angular from 'angular';
import errorDisplayComponent from './error-display.component';
import './error-display.css';
import './error.jpg';


// Module which has the error display component.  

const moduleName = 'unlock-the-truth.error-display';

angular
    .module(moduleName, [])
    .component('uttErrorDisplay', errorDisplayComponent)

    // Configure the routing for this module. 
    .config($stateProvider => {
        'ngInject';

        // Register the home state, and add the home component to it. 
        $stateProvider.state('error', {
            url: '/error',
            component: 'uttErrorDisplay',
            params: {
                // allow this state to be transitioned to with an error param. 
                error: null
            }
        });
    });

export default moduleName;