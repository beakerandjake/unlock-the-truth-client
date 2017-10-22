import angular from 'angular';
import UibModal from 'angular-ui-bootstrap/src/modal';
import Login from '../login/login.module';
import component from './header.component';

// Module which contains the header component. 

const moduleName = 'unlock-the-truth.header';

angular
    .module(moduleName, [
        UibModal,
        Login
    ])
    .component('uttHeader', component);

export default moduleName;