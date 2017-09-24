import angular from 'angular';
import MainComponent from './app.component';
import Components from './components/components.module';


const moduleName = 'unlock-the-truth';

//Declare our main module.
angular
    .module(moduleName, [
        Components
    ])
    .component('unlockTheTruth', MainComponent)
    .config($locationProvider => {
        // Configure app to have pretty urls (no #)
        $locationProvider.html5Mode(true);
    });

export default moduleName;