import angular from 'angular';
import QuestionNumber from 'common/question-number/question-number.module';
import unlockedQuestionComponent from './unlocked-question.component';

// Module which contains an unlocked question component.  

const moduleName = 'unlock-the-truth.unlocked-question';

angular
    .module(moduleName, [
        QuestionNumber
    ])
    .component('uttUnlockedQuestion', unlockedQuestionComponent);

export default moduleName;