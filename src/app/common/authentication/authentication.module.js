import angular from 'angular';
import authenticationService from './authentication.service';

// Module which contains authentication related components and services.  

const moduleName = 'unlock-the-truth.authentication';

angular
    .module(moduleName, [])
    .service('uttAuthenticationService', authenticationService);

export default moduleName;