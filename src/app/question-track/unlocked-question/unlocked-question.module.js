import angular from 'angular';
import collapsiblePanel from '../../common/collapsible-panel/collapsible-panel.module';
import questionNumber from '../../common/question-number/question-number.module';
import unlockedQuestionComponent from './unlocked-question.component';

const moduleName = 'unlock-the-truth.unlocked-question';

angular
    .module(moduleName, [
        collapsiblePanel,
        questionNumber
    ])
    .component('uttUnlockedQuestion', unlockedQuestionComponent);

export default moduleName;