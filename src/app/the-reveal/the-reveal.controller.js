// Controller for the reveal component.  

class TheRevealController {
    constructor(uttErrorService, uttTheRevealService, uttScrollHelper) {
        'ngInject';

        // Members
        this._errorService = uttErrorService;
        this._theRevealService = uttTheRevealService;
        this._scrollHelper = uttScrollHelper;

        // Properties
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

        this._theRevealService.unlockTheTruth()
            .then(result => {
                this.model = result;

                // Check if the user unlocked the truth. 
                if (this.model.unlocked && this.model.theTruth) {
                    this.onUnlocked({
                        theTruth: this.model.theTruth
                    });
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
}

export default TheRevealController;