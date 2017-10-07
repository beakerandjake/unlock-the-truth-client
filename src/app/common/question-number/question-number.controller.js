import {
    parseInt
} from 'lodash';

class QuestionNumberController {
    constructor() {
        this.visible = false;
    }

    // If our bindings change, see if we can still display the number. 
    $onChanges(changesObject) {
        if (changesObject.number && changesObject.number.isFirstChange()) {
            return;
        }

        this._checkIfCanDisplay();
    }

    // See if we can display on init. 
    $onInit() {
        this._checkIfCanDisplay();
    }

    // Only this to display if we got a valid number. 
    _checkIfCanDisplay() {
        this.visible = parseInt(this.number) > 0;
    }
}

export default QuestionNumberController;