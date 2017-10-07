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

        this.submittingAnswer = true;
        console.log(`Current question was answered with: ${answer}`);
    }
}

export default CurrentQuestionController;