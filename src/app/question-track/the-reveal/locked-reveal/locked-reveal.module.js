import angular from 'angular';
import lockedRevealComponent from './locked-reveal.component';

// Module which contains the locked reveal component.  

const moduleName = 'unlock-the-truth.the-reveal.locked';

angular
    .module(moduleName, [])
    .component('uttLockedReveal', lockedRevealComponent);

export default moduleName;