import angular from 'angular';
import component from './click-question.component';

// contains the click question component

const moduleName = 'unlock-the-truth.current-question.click';

angular
    .module(moduleName, [])
    .component('uttClickQuestion', component);

export default moduleName;