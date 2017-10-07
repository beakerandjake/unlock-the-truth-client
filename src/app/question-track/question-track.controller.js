// Controller for the question track component.  

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
            })
            .catch(() => {
                // Todo, transition to error page.
                console.log('Error loading questions!');
            })
            .finally(() => {
                this.loading = false;
            });
    }

    // Fired when the user answers the current question.  
    onCurrentQuestionAnswered(answer) {
        console.log(`Current question answered with ${answer}`);
    }
}

export default QuestionTrackController;