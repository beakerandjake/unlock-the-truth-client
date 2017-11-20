import {
    toInteger,
    toString,
    random
} from 'lodash';

// Controller for the click question component. 

class ClickQuestionController {
    constructor() {
        // Properties
        this.requiredClicks = 0;
        this.currentNumberOfClicks = 0;
    }

    $onInit() {
        // Expect that 'click' questions body is the required number of clicks to complete. 
        this.requiredClicks = toInteger(this.question.currentBody);

        // Sanity
        if (this.requiredClicks < 1) {
            this.requiredClicks = 100;
        }
    }

    // Fired when the user clicks the button. 
    incrementClickCount() {
        // Bail if already answered question. 
        if (this.currentNumberOfClicks >= this.requiredClicks) {
            return;
        }

        // Increment click count
        this.currentNumberOfClicks += 1;

        // Roll the dice on whether or not to move the button
        if (random(0, 1, true) > .5) {
            this.moveButton();
        }

        // Check if the user clicked enough times. 
        if (this.currentNumberOfClicks >= this.requiredClicks) {
            this.submitAnswer();
        }
    }

    // Move the button to a random location to keep the user on their toes.
    moveButton() {
        console.log('move the button!');
    }

    // Raise our answer callback. 
    submitAnswer() {
        this.onSubmit({
            // Expect the answer to be equal to the required clicks
            answer: toString(this.requiredClicks)
        });
    }
}

export default ClickQuestionController;