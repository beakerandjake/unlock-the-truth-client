import angular from 'angular';
import AppComponent from './app.component';

const moduleName = 'unlock-the-truth';

//Declare our main module.
angular
    .module(moduleName, [])
    .component('unlockTheTruth', AppComponent)
    .config($locationProvider => {
        // Configure app to have pretty urls (no #)
        $locationProvider.html5Mode(true);
    });

export default moduleName;