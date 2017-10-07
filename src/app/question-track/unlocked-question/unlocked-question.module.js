import angular from 'angular';
import collapsiblePanel from '../../common/collapsible-panel/collapsible-panel.module';
import unlockedQuestionComponent from './unlocked-question.component';

const moduleName = 'unlock-the-truth.unlocked-question';

angular
    .module(moduleName, [
        collapsiblePanel
    ])
    .component('uttUnlockedQuestion', unlockedQuestionComponent);

export default moduleName;