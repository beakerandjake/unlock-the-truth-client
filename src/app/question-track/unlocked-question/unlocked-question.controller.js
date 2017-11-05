// Controller for the unlocked question component.
import moment from 'moment';

class UnlockedQuestionController {
    timeTaken(question) {
        const { timeUnlocked, timeAnswered } = question;
        const timeDifference = moment(timeAnswered).diff(
            moment(timeUnlocked),
            'hours'
        );
        return moment.duration(timeDifference, 'hours').humanize();
    }
}

export default UnlockedQuestionController;
