import angular from 'angular';
import UiRouter from '@uirouter/angularjs';
import createQuestionComponent from './create-question.component';
import createQuestionService from './create-question.service';

// A debug module used to quickly post new questions to the database. 

const moduleName = 'unlock-the-truth.create-question';

angular
    .module(moduleName, [
        UiRouter
    ])
    .component('uttCreateQuestion', createQuestionComponent)
    .service('uttCreateQuestionService', createQuestionService)
    // Configure the routing for this module. 
    .config($stateProvider => {
        'ngInject';

        // Register the home state, and add the home component to it. 
        $stateProvider.state('debug', {
            url: '/debug',
            component: 'uttCreateQuestion'
        });
    });

export default moduleName;