import angular from 'angular';
import UiRouter from '@uirouter/angularjs';

// Global configuration for ui router. 

const moduleName = 'unlock-the-truth.config.ui-router';

angular
    .module(moduleName, [
        UiRouter
    ])

    // Configure HTML 5 Mode, remove the # from our urls. 
    .config($locationProvider => {
        'ngInject';
        $locationProvider.html5Mode(true);
    })

    // Always fallback to default route if not found. 
    .config($urlRouterProvider => {
        'ngInject';
        $urlRouterProvider.otherwise('/');
    });

export default moduleName;