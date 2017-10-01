import _ from 'lodash';

class QuestionTrackController {
    constructor(questionTrackService) {
        'ngInject';

        // Members
        this._questionTrackService = questionTrackService;

        // Properties
        this.loading = false;
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
                this.calculateQuestionNumbers();
            })
            .catch(() => {
                // Todo, transition to error page.
                console.log('Error loading questions!');
            })
            .finally(() => {
                this.loading = false;
            });
    }

    // Calculate what number each question is in the total track. 
    calculateQuestionNumbers() {
        let questionCount = 0;
        const allQuestions = _.concat(this.model.unlockedQuestions, this.model.currentQuestion, this.model.lockedQuestions);

        // Attach helper property to each question to indicate what the question number is. 
        _.each(allQuestions, (question, index) => {
            questionCount = index + 1;
            question.number = questionCount;
        });
    }
}

export default QuestionTrackController;