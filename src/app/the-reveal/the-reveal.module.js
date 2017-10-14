import angular from 'angular';
import LockedReveal from './locked-reveal/locked-reveal.module';
import theRevealService from './the-reveal.service';
import theRevealComponent from './the-reveal.component';

// Module which contains the reveal component

const moduleName = 'unlock-the-truth.the-reveal';

angular
    .module(moduleName, [
        LockedReveal
    ])
    .service('theRevealService', theRevealService)
    .component('uttTheReveal', theRevealComponent);

export default moduleName;