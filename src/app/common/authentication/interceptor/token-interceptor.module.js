import angular from 'angular';
import tokenInterceptor from './token-interceptor';

// Module which adds the auth token interceptor. 

const moduleName = 'unlock-the-truth.authentication.token-interceptor';

angular
    .module(moduleName, [])
    .config($httpProvider => {
        'ngInject';
        $httpProvider.interceptors.push(tokenInterceptor);
    });

export default moduleName;