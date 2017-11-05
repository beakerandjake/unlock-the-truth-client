import * as constants from './create-question.constants';
import {
    cloneDeep
} from 'lodash';

// Controller for the create question component. 

class CreateQuestionController {
    constructor(uttCreateQuestionService) {
        'ngInject';

        // Members
        this._createQuestionService = uttCreateQuestionService;

        // Properties
        this.model = null;
        this.result = null;
        this.questionTypes = constants.questionTypes;
    }

    $onInit() {
        this.resetModel();
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
            })
            .finally(() => {
                // Reset form so it's no longer "submitted" 
                this.createQuestionForm.$setPristine();
                this.createQuestionForm.$setUntouched();
                this.resetModel();
            });
    }

    resetModel() {
        this.model = cloneDeep(constants.defaultModel);
    }
}

export default CreateQuestionController;