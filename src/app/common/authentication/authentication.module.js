import angular from 'angular';
import authenticationService from './authentication.service';

const moduleName = 'unlock-the-truth.authentication';

angular
    .module(moduleName, [])
    .service('uttAuthenticationService', authenticationService);

export default moduleName;