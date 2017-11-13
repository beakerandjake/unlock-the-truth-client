// Controller for the reveal component.  

class TheRevealController {
    constructor($timeout, uttErrorService, uttTheRevealService, uttScrollHelper) {
        'ngInject';

        // Members
        this._$timeout = $timeout;
        this._errorService = uttErrorService;
        this._theRevealService = uttTheRevealService;
        this._scrollHelper = uttScrollHelper;

        // Properties
        this.clearMessageTimeout = null;
        this.loading = false;
        this.model = null;
    }

    $onInit() {

    }

    // Query the api to get the TRUTH! 
    unlockTheTruth() {
        if (this.loading) {
            return;
        }

        this.loading = true;
        this.model = null;
        // Cancel the last running timeout (if any) 
        this._$timeout.cancel(this.clearMessageTimeout);

        this._theRevealService.unlockTheTruth()
            .then(result => {
                this.model = result;

                // Check if the user unlocked the truth. 
                if (this.model.unlocked && this.model.theTruth) {
                    this.onUnlocked({
                        theTruth: this.model.theTruth
                    });
                } else {
                    this.waitToClearMessage();
                }
            })
            .catch(error => {
                this._errorService.setError(error);
            })
            .finally(() => {
                this.loading = false;
            });
    }

    // Return the user to the questions. 
    scrollToQuestions() {
        this._scrollHelper.scrollToElement('utt-question-track');
    }

    // Hide the 'failed' message after a short time so the user doesnt get confused.
    waitToClearMessage() {
        this.clearMessageTimeout = this._$timeout(() => {
            this.model = null;
        }, 2500);
    }

    // Be sure to cancel potentially running callback when we get killed. 
    $onDestroy() {
        this._$timeout.cancel(this.clearMessageTimeout);
    }
}

export default TheRevealController;