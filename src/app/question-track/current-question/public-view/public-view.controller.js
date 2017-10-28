import moment from 'moment';

class PublicViewController {
    constructor($interval) {
        'ngInject';

        // Members
        this._$interval = $interval;
        this._updateInterval = null;
    }

    $onInit() {
        this.calculateTimeSinceUnlock();

        // Update the duration every minute so we always display the latest time.  
        this._updateInterval = this._$interval(() => {
            this.calculateTimeSinceUnlock();
        }, 1000);
    }

    // Generate a human readable duration between now and when the user unlocked the question. 
    calculateTimeSinceUnlock() {
        const startTime = new moment(this.question.timeUnlocked);
        const diff = moment().diff(startTime);
        this.duration = moment.duration(diff).humanize();
    }

    // Be sure to cancel our interval when we get destroyed. 
    $onDestroy() {
        if (this._updateInterval) {
            this._$interval.cancel(this._updateInterval);
        }
    }
}

export default PublicViewController;