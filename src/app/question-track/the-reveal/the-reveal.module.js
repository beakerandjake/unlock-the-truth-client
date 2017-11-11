import angular from 'angular';
import UiRouter from '@uirouter/angularjs';
import LockedReveal from './locked-reveal/locked-reveal.module';
import UnlockedReveal from './unlocked-reveal/unlocked-reveal.module';
import TheTruth from './the-truth/the-truth.module';
import theRevealService from './the-reveal.service';
import theRevealComponent from './the-reveal.component';

// Module which contains the reveal component

const moduleName = 'unlock-the-truth.the-reveal';

angular
    .module(moduleName, [
        UiRouter,
        LockedReveal,
        UnlockedReveal,
        TheTruth
    ])
    .service('uttTheRevealService', theRevealService)
    .component('uttTheReveal', theRevealComponent);

export default moduleName;