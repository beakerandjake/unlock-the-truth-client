import {
    correctAnswerEvent
} from '../question-track.constants';

// Controller for the current question component.  

class CurrentQuestionController {
    constructor($scope) {
        'ngInject';

        // Bind to the correct answer event so the user can move on.
        $scope.$on(correctAnswerEvent, () => {
            this.onCorrectAnswer();
        });
    }

    //Watch for changes on question, reset..

    // Fired when the user has answered the question correctly. 
    onCorrectAnswer() {
        console.log('You got one correct!');
    }

    // Fired when one of our question type components raises their submit callback.  
    onSubmit(answer) {
        // Raise our callback 
        this.onAnswer({
            answer
        });
    }
}

export default CurrentQuestionController;