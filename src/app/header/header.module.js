import angular from 'angular';
import component from './header.component';

// Module which contains the header component. 

const moduleName = 'unlock-the-truth.header';

angular
    .module(moduleName, [])
    .component('uttHeader', component);

export default moduleName;