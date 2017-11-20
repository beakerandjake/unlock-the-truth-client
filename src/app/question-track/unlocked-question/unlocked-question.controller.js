// Controller for the unlocked question component.
import moment from 'moment';

class UnlockedQuestionController {
    timeTaken(question) {
        const { timeUnlocked, timeAnswered } = question;
        const timeDifference = moment(timeAnswered).diff(moment(timeUnlocked), 'hours');
        return moment.duration(timeDifference, 'hours').humanize();
    }
    completionText(question) {
        const conditionalAttemptString = question.failedAttempts > 1 ? `and ${question.failedAttempts} attempts` : ``;
        return `It took Eric and Jennie ${this.timeTaken(question)} ${conditionalAttemptString} to answer correctly.`;
    }
}

export default UnlockedQuestionController;
