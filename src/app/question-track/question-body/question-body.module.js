import angular from 'angular';
import NgSanitize from 'angular-sanitize';
import questionBody from './question-body.component';

const moduleName = 'utt.question-track.question-body';

angular
    .module(moduleName, [
        NgSanitize
    ])
    .component('uttQuestionBody', questionBody);

export default moduleName;