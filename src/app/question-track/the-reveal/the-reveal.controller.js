// Controller for the reveal component.  

class TheRevealController {
    constructor($state, uttTheRevealService) {
        'ngInject';

        // Members
        this._$state = $state;
        this._theRevealService = uttTheRevealService;

        // Properties
        this.loading = false;
        this.theTruth = null;
    }

    $onInit() {

    }

    // Query the api to get the TRUTH! 
    unlockTheTruth() {
        if (this.loading) {
            return;
        }

        this.loading = true;

        this._theRevealService.unlockTheTruth()
            .then(result => {
                this.theTruth = result;
            })
            .catch(error => {
                this._$state.go('error', {
                    error: error
                });
            })
            .finally(() => {
                this.loading = false;
            });
    }
}

export default TheRevealController;