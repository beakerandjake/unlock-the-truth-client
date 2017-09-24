import angular from 'angular';
import Sample from './sample/sample.module';

const moduleName = 'unlock-the-truth.components';

// Module which includes all components used by this app. 
angular.module(moduleName, [
    Sample
]);

export default moduleName;