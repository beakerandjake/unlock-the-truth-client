import angular from 'angular';
import correctAnswerComponent from './correct-answer.component';

// Module which contains the correct answer component. 

const moduleName = 'unlock-the-truth.question-track.correct-answer';

angular
    .module(moduleName)
    .component('uttCorrectAnswer', correctAnswerComponent);

export default moduleName;