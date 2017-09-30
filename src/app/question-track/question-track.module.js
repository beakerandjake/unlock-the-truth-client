import angular from 'angular';
import questionTrackComponent from './question-track.component';
import questionTrackService from './question-track.service';

const moduleName = 'unlock-the-truth.question-track';

angular
    .module(moduleName, [])
    .component('uttQuestionTrack', questionTrackComponent)
    .service('questionTrackService', questionTrackService);

export default moduleName;