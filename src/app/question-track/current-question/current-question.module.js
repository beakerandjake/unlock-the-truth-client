import angular from 'angular';
import collapsiblePanel from '../../common/collapsible-panel/collapsible-panel.module';
import questionNumber from '../../common/question-number/question-number.module';
import currentQuestionComponent from './current-question.component';

const moduleName = 'unlock-the-truth.current-question';

angular
    .module(moduleName, [
        collapsiblePanel,
        questionNumber
    ])
    .component('uttCurrentQuestion', currentQuestionComponent);

export default moduleName;