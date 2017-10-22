import angular from 'angular';
import navbarComponent from './navbar.component';

// Module which contains the navbar component.

const moduleName = 'unlock-the-truth.navbar';

angular
    .module(moduleName, [])
    .component('uttNavbar', navbarComponent);

export default moduleName;