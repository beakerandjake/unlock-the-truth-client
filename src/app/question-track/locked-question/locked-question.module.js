import angular from 'angular';
import CollapsiblePanel from '../../common/collapsible-panel/collapsible-panel.module';
import QuestionNumber from '../../common/question-number/question-number.module';
import lockedQuestionComponent from './locked-question.component';

// Module which contains the locked question component.  

const moduleName = 'unlock-the-truth.locked-question';

angular
    .module(moduleName, [
        CollapsiblePanel,
        QuestionNumber
    ])
    .component('uttLockedQuestion', lockedQuestionComponent);

export default moduleName;