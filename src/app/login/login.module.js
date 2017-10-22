import angular from 'angular';
import Authentication from '../common/authentication/authentication.module';
import loginComponent from './login.component';

const moduleName = 'unlock-the-truth.login';

angular
    .module(moduleName, [
        Authentication
    ])
    .component('uttLogin', loginComponent);

export default moduleName;