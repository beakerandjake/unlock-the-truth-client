import angular from 'angular';
import ErrorDisplay from '../error-display/error-display.module';
import LockedQuestion from './locked-question/locked-question.module';
import CurrentQuestion from './current-question/current-question.module';
import UnlockedQuestion from './unlocked-question/unlocked-question.module';
import CorrectAnswer from './correct-answer/correct-answer.module';
import questionTrackComponent from './question-track.component';
import questionTrackService from './question-track.service';

// Module which contains the question track.  

const moduleName = 'unlock-the-truth.question-track';

angular
    .module(moduleName, [
        ErrorDisplay,
        LockedQuestion,
        CurrentQuestion,
        UnlockedQuestion,
        CorrectAnswer
    ])
    .component('uttQuestionTrack', questionTrackComponent)
    .service('questionTrackService', questionTrackService);

export default moduleName;