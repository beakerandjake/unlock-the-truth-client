import angular from 'angular';
import NgResource from 'angular-resource';
import UiRouter from '@uirouter/angularjs';
import ErrorDisplay from 'error-display/error-display.module';
import LockedQuestion from './locked-question/locked-question.module';
import CurrentQuestion from './current-question/current-question.module';
import UnlockedQuestion from './unlocked-question/unlocked-question.module';
import TheReveal from './the-reveal/the-reveal.module';
import questionTrackComponent from './question-track.component';
import questionTrackService from './question-track.service';

// Module which contains the question track.  

const moduleName = 'unlock-the-truth.question-track';

angular
    .module(moduleName, [
        NgResource,
        UiRouter,
        ErrorDisplay,
        LockedQuestion,
        CurrentQuestion,
        UnlockedQuestion,
        TheReveal
    ])
    .component('uttQuestionTrack', questionTrackComponent)
    .service('uttQuestionTrackService', questionTrackService)

    // Configure the routing for this module. 
    .config($stateProvider => {
        'ngInject';

        // Register the home state, and add the home component to it. 
        $stateProvider.state('question-track', {
            url: '/',
            component: 'uttQuestionTrack'
        });
    });

export default moduleName;