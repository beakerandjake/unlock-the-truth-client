import angular from 'angular';
import MainComponent from './app.component';
import Header from './header/header.module';

const moduleName = 'unlock-the-truth';

//Declare our main module.

angular
    .module(moduleName, [
        Header
    ])
    .component('unlockTheTruth', MainComponent);

export default moduleName;