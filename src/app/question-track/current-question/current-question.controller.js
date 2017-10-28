import {
    correctAnswerEvent
} from '../question-track.constants';

// Controller for the current question component.  

class CurrentQuestionController {
    constructor($scope, uttAuthenticationService) {
        'ngInject';

        // Members
        this._authenticationService = uttAuthenticationService;

        // Properties
        this.questionAnsweredCorrectly = false;

        // Bind to the correct answer event so the user can move on.
        $scope.$on(correctAnswerEvent, () => {
            this.onCorrectAnswer();
        });
    }

    // Fired when our one way bindings change.  
    // This generally only happens when the user has advanced to a new question. 
    $onChanges(changesObject) {
        // Only care about when question changes.  
        if (!changesObject.question || changesObject.question.isFirstChange()) {
            return;
        }

        // Reset our state when we get a new question so the user can answer. 
        this.questionAnsweredCorrectly = false;
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

    // Checks if the user is allowed to answer the current question. 
    userCanAnswerQuestion() {
        return this._authenticationService.userLoggedIn();
    }
}

export default CurrentQuestionController;