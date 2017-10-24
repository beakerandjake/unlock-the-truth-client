import angular from 'angular';
import Authentication from '../authentication.module';
import logoutComponent from './logout.component';

// Module which contains the logout component. 

const moduleName = 'unlock-the-truth.logout';

angular
    .module(moduleName, [
        Authentication
    ])
    .component('uttLogout', logoutComponent);

export default moduleName;