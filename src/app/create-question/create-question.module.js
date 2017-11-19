import angular from 'angular';
import CurrentQuestion from '../question-track/current-question/current-question.module';
import LockedQuestion from '../question-track/locked-question/locked-question.module';
import UnlockedQuestion from '../question-track/unlocked-question/unlocked-question.module';
import createQuestionComponent from './create-question.component';
import createQuestionService from './create-question.service';

// A debug module used to quickly post new questions to the database. 

const moduleName = 'unlock-the-truth.create-question';

angular
    .module(moduleName, [
        CurrentQuestion,
        LockedQuestion, 
        UnlockedQuestion
    ])
    .component('uttCreateQuestion', createQuestionComponent)
    .service('uttCreateQuestionService', createQuestionService);

export default moduleName;