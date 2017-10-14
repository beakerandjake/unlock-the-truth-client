import correctImage from './correct.jpg';

// Controller for the correct answer component 

class CorrectAnswerController {
    constructor() {
        this.correctImagePath = correctImage;
    }

    continue () {
        this.askedToContinue = true;
        this.close({});
    }
}

export default CorrectAnswerController;