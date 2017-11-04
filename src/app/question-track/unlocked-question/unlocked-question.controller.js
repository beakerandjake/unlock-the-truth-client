// Controller for the unlocked question component.
import moment from 'moment';

class UnlockedQuestionController {
    constructor() {}

    $onInit() {}

    timeTaken(question) {
        let { timeUnlocked, timeAnswered } = question;
        return moment(timeAnswered).diff(moment(timeUnlocked), 'hours');
    }
}

export default UnlockedQuestionController;
