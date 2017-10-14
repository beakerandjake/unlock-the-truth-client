import {
    correctAnswerEvent
} from '../question-track.constants';

// Controller for the current question component.  

class CurrentQuestionController {
    constructor($scope) {
        'ngInject';

        // Properties
        this.questionAnsweredCorrectly = false;

        // Bind to the correct answer event so the user can move on.
        $scope.$on(correctAnswerEvent, () => {
            this.onCorrectAnswer();
        });
    }

    //Watch for changes on question, reset..

    // Fired when one of our question type components raises their submit callback.  
    onSubmit(answer) {
        // Raise our callback 
        this.onAnswer({
            answer
        });
    }

    // Fired when the user has answered the question correctly. 
    onCorrectAnswer() {
        this.questionAnsweredCorrectly = true;
    }

    // Fired when the user acknowledges the correct answer and wants to move on. 
    moveToNextQuestion() {
        // Invoke our callback.
        this.onContinue({});
    }
}

export default CurrentQuestionController;