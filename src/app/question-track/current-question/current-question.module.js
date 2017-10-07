import angular from 'angular';
import TextQuestion from './text-question/text-question.module';
import CollapsiblePanel from '../../common/collapsible-panel/collapsible-panel.module';
import QuestionNumber from '../../common/question-number/question-number.module';
import currentQuestionComponent from './current-question.component';

const moduleName = 'unlock-the-truth.current-question';

angular
    .module(moduleName, [
        CollapsiblePanel,
        QuestionNumber,
        TextQuestion
    ])
    .component('uttCurrentQuestion', currentQuestionComponent);

export default moduleName;