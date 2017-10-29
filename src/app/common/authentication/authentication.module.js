import angular from 'angular';
import TokenInterceptor from './interceptor/token-interceptor.module';
import LocalStorage from 'angular-local-storage';
import authenticationService from './authentication.service';

// Module which contains authentication related components and services.  

const moduleName = 'unlock-the-truth.authentication';

angular
    .module(moduleName, [
        TokenInterceptor,
        LocalStorage
    ])
    .service('uttAuthenticationService', authenticationService)
    // Configure the local storage module.  
    .config(localStorageServiceProvider => {
        'ngInject';
        localStorageServiceProvider.setPrefix('utt');
    });

export default moduleName;