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
        this.projections = {
            current: {
                '_id': '12345',
                'number': 666,
                'timeUnlocked': '2017-11-19T02:45:21.712Z'
            }
        };
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
                // Reset form so it's no longer 'submitted' 
                this.createQuestionForm.$setPristine();
                this.createQuestionForm.$setUntouched();
                this.resetModel();
            });
    }

    resetModel() {
        this.model = cloneDeep(constants.defaultModel);
    }

    getCurrentQuestionModel() {
        this.projections.current.title = this.model.title;
        this.projections.current.currentBody = this.model.currentBody;
        this.projections.current.type = this.model.type;

        return this.projections.current;
    }
}

export default CreateQuestionController;