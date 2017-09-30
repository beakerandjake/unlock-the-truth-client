import angular from 'angular';
import questionTrackComponent from './question-track.component';

const moduleName = 'unlock-the-truth.question-track';

angular
    .module(moduleName, [])
    .component('uttQuestionTrack', questionTrackComponent);

export default moduleName;