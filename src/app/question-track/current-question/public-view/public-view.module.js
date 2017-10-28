import angular from 'angular';
import publicViewComponent from './public-view.component';

// Module which contains the component which displays the current question to a unauthenticated user. 

const moduleName = 'unlock-the-truth.current-question.public-view';

angular
    .module(moduleName, [])
    .component('uttCurrentQuestionPublicView', publicViewComponent);

export default moduleName;