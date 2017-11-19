import angular from 'angular';
import AngularAnimate from 'angular-animate';
import Insults from '../../../common/insults/insults.module';
import QuestionBody from '../../question-body/question-body.module';
import textQuestionComponent from './text-question.component';

// Modules which contains the text-question component

const moduleName = 'unlock-the-truth.current-question.text';

angular
    .module(moduleName, [
        AngularAnimate,
        Insults,
        QuestionBody
    ])
    .component('uttTextQuestion', textQuestionComponent);

export default moduleName;