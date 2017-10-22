import angular from 'angular';
import LocalStorage from 'angular-local-storage';
import authenticationService from './authentication.service';

// Module which contains authentication related components and services.  

const moduleName = 'unlock-the-truth.authentication';

angular
    .module(moduleName, [
        LocalStorage
    ])
    .service('uttAuthenticationService', authenticationService);

export default moduleName;