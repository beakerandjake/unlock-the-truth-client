import {
    wrongAnswerEvent
} from './question-track.constants';
import {
    remove
} from 'lodash';

// Controller for the question track component.  

class QuestionTrackController {
    constructor($scope, $uibModal, questionTrackService) {
        'ngInject';

        // Members
        this._$scope = $scope;
        this._$uibModal = $uibModal;
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
                if (!result.correct) {
                    this._$scope.$broadcast(wrongAnswerEvent);
                } else {
                    this.showCorrectAnswerComponent(result);
                }
            })
            .catch(error => {
                this.error = error;
            })
            .finally(() => {});
    }

    // Display the correct answer modal to the user.  
    showCorrectAnswerComponent(result) {
        // Open a modal which displays the correct answer component.  
        const modalInstance = this._$uibModal.open({
            component: 'uttCorrectAnswer',
            keyboard: false,
            backdrop: 'static'
        });

        //When the user acknowledges the modal, move on to the next question. 
        modalInstance.closed.then(() => this.moveOnToNextQuestion(result));
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
    }
}

export default QuestionTrackController;