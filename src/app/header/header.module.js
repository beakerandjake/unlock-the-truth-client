import angular from 'angular';
import UibModal from 'angular-ui-bootstrap/src/modal';
import Login from '../common/authentication/login/login.module';
import Authentication from '../common/authentication/authentication.module';
import component from './header.component';

// Module which contains the header component. 

const moduleName = 'unlock-the-truth.header';

angular
    .module(moduleName, [
        UibModal,
        Login,
        Authentication
    ])
    .component('uttHeader', component);

export default moduleName;