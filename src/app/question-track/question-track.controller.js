import {
    wrongAnswerEvent,
    correctAnswerEvent
} from './question-track.constants';
import {
    remove
} from 'lodash';

// Controller for the question track component.  

class QuestionTrackController {
    constructor($scope, questionTrackService) {
        'ngInject';

        // Members
        this._$scope = $scope;
        this._questionTrackService = questionTrackService;

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
                this.error = error;
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

        this._questionTrackService.answerQuestion(this.model.currentQuestion.id, answer)
            .then(result => {
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
    moveOnToNextQuestion(result) {
        //Update current question.
        this.model.currentQuestion = result.nextQuestion;

        if (result.previousQuestion) {
            //Push previous question onto answered questions
            this.model.unlockedQuestions.push(result.previousQuestion);
        }

        if (this.model.currentQuestion) {
            //Remove current question from locked questions.
            remove(this.model.lockedQuestions, ['id', this.model.currentQuestion.id]);
        }

        this.loading = false;
    }
}

export default QuestionTrackController;