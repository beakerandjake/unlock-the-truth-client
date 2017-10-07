// Controller for the current question component.  

class CurrentQuestionController {
    constructor() {
        this.submittingAnswer = false;
    }

    $onInit() {

    }

    // Fired when one of our question type components raises their submit callback.  
    onSubmit(answer) {
        if (this.submittingAnswer) {
            return false;
        }

        // TODO.. not sure if show busy status here yet..  
        this.submittingAnswer = true;

        // Raise our callback 
        this.onAnswer({
            answer
        });
    }
}

export default CurrentQuestionController;