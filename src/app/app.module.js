import angular from 'angular';

const moduleName = 'unlock-the-truth';

//Declare our main module.
angular
    .module(moduleName, [])
    .config( $locationProvider => {
        // Configure app to have pretty urls (no #)
        $locationProvider.html5Mode(true);
    });

export default moduleName;