import {
    wrongAnswerEvent
} from './question-track.constants';

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

        this._questionTrackService.answerQuestion(this.model.currentQuestion.Id, answer)
            .then(result => {
                if (!result.correct) {
                    this._$scope.$broadcast(wrongAnswerEvent);
                } else {
                    this.showCorrectAnswerComponent();
                }
            })
            .catch(error => {
                this.error = error;
            })
            .finally(() => {});
    }

    // Display the correct answer modal to the user.  
    showCorrectAnswerComponent() {
        // Open a modal which displays the correct answer component.  
        this._$uibModal.open({
            component: 'uttCorrectAnswer',
            keyboard: false,
            backdrop: 'static'
        });
    }
}

export default QuestionTrackController;