import angular from 'angular';
import loginComponent from './login.component';

const moduleName = 'unlock-the-truth.login';

angular
    .module(moduleName, [])
    .component('uttLogin', loginComponent);

export default moduleName;