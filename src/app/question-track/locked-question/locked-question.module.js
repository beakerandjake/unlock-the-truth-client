import angular from 'angular';
import collapsiblePanel from '../../common/collapsible-panel/collapsible-panel.module';
import lockedQuestionComponent from './locked-question.component';

const moduleName = 'unlock-the-truth.locked-question';

angular
    .module(moduleName, [
        collapsiblePanel
    ])
    .component('uttLockedQuestion', lockedQuestionComponent);

export default moduleName;