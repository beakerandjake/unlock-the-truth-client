// Controller for the text-question component

class TextQuestionController {
    constructor() {
        this.answer = '';
    }

    $onInit() {

    }

    answerQuestion() {
        console.log(`Answered: ${this.answer}`);

        this.saving = true;
    }
}

export default TextQuestionController;