// Controller for the current question component.  

class CurrentQuestionController {
    constructor() {}

    $onInit() {

    }

    // Fired when one of our question type components raises their submit callback.  
    onSubmit(answer) {
        // Raise our callback 
        this.onAnswer({
            answer
        });
    }
}

export default CurrentQuestionController;