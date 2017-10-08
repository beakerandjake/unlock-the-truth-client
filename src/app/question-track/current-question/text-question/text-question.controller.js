import {
    wrongAnswerEvent
} from '../../question-track.constants';

// Controller for the text-question component

class TextQuestionController {
    constructor($scope) {
        'ngInject';

        // Bind to the wrong answer event so we can update our display.  
        $scope.$on(wrongAnswerEvent, () => {
            this.onIncorrectAnswer();
        });

        // Properties 
        this.answer = '';
        this.answerIncorrect = false;
    }

    // Fired when the user clicks the submit button.
    answerQuestion() {
        // Sanity 
        if (!this.answer) {
            return;
        }

        // Invoke our callback.  
        this.onSubmit({
            answer: this.answer
        });
    }

    // Handle when the user answers incorrectly.
    onIncorrectAnswer() {
        console.log(this);
        console.log('Incorrect!');
        this.answerIncorrect = true;
    }
}

export default TextQuestionController;