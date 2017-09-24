import angular from 'angular';
import sampleComponent from './sample.component';

const moduleName = 'unlock-the-truth.sample';

angular
    .module(moduleName, [])
    .component('sample', sampleComponent);

export default moduleName;