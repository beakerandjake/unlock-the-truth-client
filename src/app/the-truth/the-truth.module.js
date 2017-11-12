import angular from 'angular';
import theTruthComponent from './the-truth.component';

const moduleName = 'unlock-the-truth.the-truth';

angular
    .module(moduleName, [])
    .component(theTruthComponent);

export default moduleName;