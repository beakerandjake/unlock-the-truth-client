import angular from 'angular';
import NgSanitize from 'angular-sanitize';
import theTruthComponent from './the-truth.component';

const moduleName = 'unlock-the-truth.the-truth';

angular
    .module(moduleName, [
        NgSanitize
    ])
    .component('uttTheTruth', theTruthComponent);

export default moduleName;