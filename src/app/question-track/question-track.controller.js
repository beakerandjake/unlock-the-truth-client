class QuestionTrackController {
    constructor(questionTrackService) {
        'ngInject';

        // Members
        this._questionTrackService = questionTrackService;

        // Properties
        this.model = {};
    }

    $onInit() {
        this._questionTrackService.getQuestions()
            .then(result => {
                console.log('Got a great result!', result);
            })
            .catch(() => {
                console.log('Error loading questions!');
            });
    }
}

export default QuestionTrackController;