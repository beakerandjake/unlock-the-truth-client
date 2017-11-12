import angular from 'angular';
import NgAnimate from 'angular-animate';
import theRevealService from './the-reveal.service';
import theRevealComponent from './the-reveal.component';

// Module which contains the reveal component

const moduleName = 'unlock-the-truth.the-reveal';

angular
    .module(moduleName, [
        NgAnimate
    ])
    .service('uttTheRevealService', theRevealService)
    .component('uttTheReveal', theRevealComponent);

export default moduleName;