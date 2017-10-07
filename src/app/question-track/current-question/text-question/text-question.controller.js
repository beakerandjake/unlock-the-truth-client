// Controller for the text-question component

class TextQuestionController {
    constructor() {
        this.answer = '';
    }

    // Fired when the user clicks the submit button.
    answerQuestion() {
        // Sanity 
        if (!this.answer) {
            return;
        }

        // Invoke our callback.  
        this.onSubmit({
            answer: this.answer
        });
    }
}

export default TextQuestionController;