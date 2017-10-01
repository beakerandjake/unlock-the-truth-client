import angular from 'angular';
import UnansweredQuestion from './unanswered-question/unanswered-question.module';
import questionTrackComponent from './question-track.component';
import questionTrackService from './question-track.service';

const moduleName = 'unlock-the-truth.question-track';

angular
    .module(moduleName, [
        UnansweredQuestion
    ])
    .component('uttQuestionTrack', questionTrackComponent)
    .service('questionTrackService', questionTrackService);

export default moduleName;