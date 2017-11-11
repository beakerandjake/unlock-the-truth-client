import {
    wrongAnswerEvent,
    correctAnswerEvent
} from './question-track.constants';
import {
    remove
} from 'lodash';


// Controller for the question track component.  

class QuestionTrackController {
    constructor($scope, $state, uttQuestionTrackService) {
        'ngInject';

        // Members
        this._$scope = $scope;
        this._$state = $state;
        this._questionTrackService = uttQuestionTrackService;
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
                this._$state.go('error', {
                    error: error
                });
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
                this.error = error;
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
        }

        // Clear answer result so we dont accidentally move on more than once.  
        this._answerResult = null;
    }

    // Check whether the user has unlocked all of the questions. 
    allQuestionsUnlocked() {
        if (!this.model) {
            return false;
        }

        // No current question? No locked questions? Seems like we got em all. 
        return !this.model.currentQuestion && this.model.lockedQuestions.length === 0;
    }
}

export default QuestionTrackController;