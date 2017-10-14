import {
    random
} from 'lodash';

// Controller for the correct answer component 

class CorrectAnswerController {
    constructor() {
        this.correctImagePath = this.getRandomImage();
    }

    // Return a random image from our correct images folder. 
    getRandomImage() {
        return require(`./images/correct_${random(1,5)}.gif`);
    }

    continue () {
        this.askedToContinue = true;
        this.close({});
    }
}

export default CorrectAnswerController;