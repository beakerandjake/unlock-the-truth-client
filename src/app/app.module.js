import angular from 'angular';
import MainComponent from './app.component';
import Header from './header/header.module';
import Footer from './footer/footer.module';

import 'bootstrap/dist/css/bootstrap.min.css';

const moduleName = 'unlock-the-truth';

//Declare our main module.

angular
    .module(moduleName, [
        Header,
        Footer
    ])
    .component('unlockTheTruth', MainComponent);

export default moduleName;