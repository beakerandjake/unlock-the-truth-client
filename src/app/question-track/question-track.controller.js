import {
    wrongAnswerEvent,
    correctAnswerEvent
} from './question-track.constants';
import {
    remove
} from 'lodash';


// Controller for the question track component.  

class QuestionTrackController {
    constructor($scope, uttErrorService, uttQuestionTrackService, uttScrollHelper) {
        'ngInject';

        // Members
        this._$scope = $scope;
        this._questionTrackService = uttQuestionTrackService;
        this._errorService = uttErrorService;
        this._scrollHelper = uttScrollHelper;
        this._answerResult = null;

        // Properties
        this.loading = false;
        this.error = false;
        this.model = {};
    }

    $onInit() {
        this.loadQuestions();
    }

    // Query API for questions and store results.
    loadQuestions() {
        // Bail if currently busy
        if (this.loading) {
            return;
        }

        this.loading = true;
        this.model = {};

        this._questionTrackService.getQuestions()
            .then(result => {
                this.model = result;
            })
            .catch(error => {
                this._errorService.setError(error);
            })
            .finally(() => {
                this.loading = false;
            });
    }

    // Fired when the user answers the current question.  
    onCurrentQuestionAnswered(answer) {
        if (this.loading) {
            return;
        }

        this._questionTrackService.answerCurrentQuestion(answer)
            .then(result => {
                this._answerResult = result;
                // Broadcast event based on if they got it right. 
                const event = result.correct ? correctAnswerEvent : wrongAnswerEvent;
                this._$scope.$broadcast(event);
            })
            .catch(error => {
                this._errorService.setError(error);
            })
            .finally(() => {});
    }

    // When the user answers successfully, it's time to update our track so the user can answer the next question. 
    moveOnToNextQuestion() {
        // The user can't move on if we didn't get a correct result from the api. 
        if (!this._answerResult || !this._answerResult.correct) {
            return;

        }

        // Update current question (it's okay for current question to be undefined if they answered the last question)
        this.model.currentQuestion = this._answerResult.nextQuestion;

        if (this._answerResult.previousQuestion) {
            //Push the previous question onto answered questions
            this.model.unlockedQuestions.push(this._answerResult.previousQuestion);
        }

        if (this.model.currentQuestion) {
            // Remove current question from locked questions.
            remove(this.model.lockedQuestions, ['_id', this.model.currentQuestion._id]);
        } else {
            // No current question?? the user must be done!
            this.scrollToReveal();
        }

        // Clear answer result so we dont accidentally move on more than once.  
        this._answerResult = null;
    }

    // Scroll the user to the reveal element
    scrollToReveal() {
        this._scrollHelper.scrollToElement('utt-the-reveal');
    }
}

export default QuestionTrackController;