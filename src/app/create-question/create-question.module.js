import angular from 'angular';
import createQuestionComponent from './create-question.component';
import createQuestionService from './create-question.service';

// A debug module used to quickly post new questions to the database. 

const moduleName = 'unlock-the-truth.create-question';

angular
    .module(moduleName, [])
    .component('uttCreateQuestion', createQuestionComponent)
    .service('uttCreateQuestionService', createQuestionService);

export default moduleName;