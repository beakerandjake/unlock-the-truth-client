class TheRevealController {
    constructor(theRevealService) {
        'ngInject';

        // Members
        this._theRevealService = theRevealService;

        // Properties
        this.loading = false;
        this.model = null;
    }

    $onInit() {
        this.unlockTheTruth();
    }

    // Query the API for the truth. 
    unlockTheTruth() {
        if (this.loading) {
            return;
        }

        this.loading = true;

        this._theRevealService.unlockTheTruth()
            .then(result => {
                this.model = result;
            })
            .catch(error => {
                // TODO. 
                console.error(error);
            })
            .finally(() => {
                this.loading = false;
            });
    }
}

export default TheRevealController;