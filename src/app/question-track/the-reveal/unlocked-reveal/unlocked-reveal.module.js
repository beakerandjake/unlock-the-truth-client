import angular from 'angular';
import unlockedRevealComponent from './unlocked-reveal.component';

// Module which contains the unlocked reveal component

const moduleName = 'unlock-the-truth.the-reveal.unlocked';

angular
    .module(moduleName, [])
    .component('uttUnlockedReveal', unlockedRevealComponent);

export default moduleName;