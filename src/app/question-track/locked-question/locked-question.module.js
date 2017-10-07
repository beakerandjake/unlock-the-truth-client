import angular from 'angular';
import collapsiblePanel from '../../common/collapsible-panel/collapsible-panel.module';
import questionNumber from '../../common/question-number/question-number.module';
import lockedQuestionComponent from './locked-question.component';

const moduleName = 'unlock-the-truth.locked-question';

angular
    .module(moduleName, [
        collapsiblePanel,
        questionNumber
    ])
    .component('uttLockedQuestion', lockedQuestionComponent);

export default moduleName;