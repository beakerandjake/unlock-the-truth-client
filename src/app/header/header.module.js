import angular from 'angular';
import ScrollHelper from 'common/scroll-helper/scroll-helper.module';
import component from './header.component';

// Module which contains the header component. 

const moduleName = 'unlock-the-truth.header';

angular
    .module(moduleName, [
        ScrollHelper
    ])
    .component('uttHeader', component);

export default moduleName;