import {
    wrongAnswerEvent
} from '../../question-track.constants';

// Controller for the text-question component

class TextQuestionController {
    constructor($scope, uttInsultsService) {
        'ngInject';

        // Members
        this._$scope = $scope;
        this._insultService = uttInsultsService;

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
        // Bail if we still have incorrect answer error. 
        // This prevents the user from holding down enter and continually
        // Resubmitting the form. In order for them to submit again they must 
        // Change the answer. 
        if (!this.answer || this.textQuestionForm.$error.correct) {
            return;
        }

        // Invoke our callback.  
        this.onSubmit({
            answer: this.answer
        });
    }

    // Handle when the user answers incorrectly.
    onIncorrectAnswer() {
        // Reset form so it's no longer "submitted" 
        this.textQuestionForm.$setPristine();
        this.textQuestionForm.$setUntouched();

        // Add an error to the answer field.  
        this.textQuestionForm.answer.$setValidity('correct', false);

        // Rub it in. 
        this.insult = this._insultService.getInsult();
    }

    // Fired when the user types in the answer box.  
    onUserInput() {
        // Bail if the form isn't showing the error state.  
        if (!this.textQuestionForm.$error.correct) {
            return;
        }

        // Clear the incorrect answer error state when they type their new answer.  
        this.textQuestionForm.answer.$setValidity('correct', true);       
    }
}

export default TextQuestionController;