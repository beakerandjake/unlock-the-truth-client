import angular from 'angular';
import Modal from 'angular-ui-bootstrap/src/modal';
import ErrorDisplay from '../error-display/error-display.module';
import LockedQuestion from './locked-question/locked-question.module';
import CurrentQuestion from './current-question/current-question.module';
import UnlockedQuestion from './unlocked-question/unlocked-question.module';
import questionTrackComponent from './question-track.component';
import questionTrackService from './question-track.service';

// Module which contains the question track.  

const moduleName = 'unlock-the-truth.question-track';

angular
    .module(moduleName, [
        Modal,
        ErrorDisplay,
        LockedQuestion,
        CurrentQuestion,
        UnlockedQuestion
    ])
    .component('uttQuestionTrack', questionTrackComponent)
    .service('questionTrackService', questionTrackService);

export default moduleName;