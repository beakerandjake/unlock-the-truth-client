// Controller for the current question component.  

class CurrentQuestionController {
    constructor() {

    }

    $onInit() {

    }

    // Fired when one of our question type components raises their submit callback.  
    onSubmit(answer) {
        console.log(`Current question was answered with: ${answer}`);
    }
}

export default CurrentQuestionController;