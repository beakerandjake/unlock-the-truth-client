import angular from 'angular';

// Configure $http service

const moduleName = 'utt.configuration.http';

angular
    .module(moduleName, [])
    .config($httpProvider => {
        'ngInject';
        $httpProvider.defaults.withCredentials = true;
    });

export default moduleName;