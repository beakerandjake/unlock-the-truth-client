import angular from 'angular';
import collapse from 'angular-ui-bootstrap/src/collapse';

import unlockedQuestionComponent from './unlocked-question.component';

const moduleName = 'unlock-the-truth.unlocked-question';

angular
    .module(moduleName, [
        collapse
    ])
    .component('uttUnlockedQuestion', unlockedQuestionComponent);

export default moduleName;