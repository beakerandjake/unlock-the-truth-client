import angular from 'angular';
import LockedQuestion from './locked-question/locked-question.module';
import CurrentQuestion from './current-question/current-question.module';
import questionTrackComponent from './question-track.component';
import questionTrackService from './question-track.service';

const moduleName = 'unlock-the-truth.question-track';

angular
    .module(moduleName, [
        LockedQuestion,
        CurrentQuestion
    ])
    .component('uttQuestionTrack', questionTrackComponent)
    .service('questionTrackService', questionTrackService);

export default moduleName;