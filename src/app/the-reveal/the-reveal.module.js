import angular from 'angular';
import theRevealComponent from './the-reveal.component';

const moduleName = 'unlock-the-truth.the-reveal';

angular
    .module(moduleName, [])
    .component('uttTheReveal', theRevealComponent);

export default moduleName;