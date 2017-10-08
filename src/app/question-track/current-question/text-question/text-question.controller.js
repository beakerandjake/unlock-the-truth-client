import {
    wrongAnswerEvent
} from '../../question-track.constants';

// Controller for the text-question component

class TextQuestionController {
    constructor($scope) {
        'ngInject';

        // Members
        this._$scope = $scope; 

        // Properties 
        this.answer = '';
        this.answerIncorrect = false;

        // Bind to the wrong answer event so we can update our display.  
        $scope.$on(wrongAnswerEvent, () => {
            this.onIncorrectAnswer();
        });
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
        this.textQuestionForm.$setPristine();
        this.textQuestionForm.$setUntouched();
        this.textQuestionForm.answer.$setValidity('correct', false);
    }
}

export default TextQuestionController;