// Controller for the create question component. 

class CreateQuestionController {
    constructor(uttCreateQuestionService) {
        'ngInject';

        // Members
        this._createQuestionService = uttCreateQuestionService;

        // Properties
        this.model = null;
        this.result = null;
    }

    // Fired when the user clicks the create question button. 
    createQuestion() {
        this.result = null;

        this._createQuestionService.createQuestion(this.model)
            .then(result => {
                this.result = result;
            })
            .catch(error => {
                this.result = error;
            });
    }
}

export default CreateQuestionController;