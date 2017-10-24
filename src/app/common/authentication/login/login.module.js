import angular from 'angular';
import UibAlert from 'angular-ui-bootstrap/src/alert';
import Authentication from '../authentication.module';
import loginComponent from './login.component';

// Module which contains the login component.  

const moduleName = 'unlock-the-truth.login';

angular
    .module(moduleName, [
        UibAlert,
        Authentication
    ])
    .component('uttLogin', loginComponent);

export default moduleName;