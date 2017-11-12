// Controller for the reveal component.  

class TheRevealController {
    constructor(uttErrorService, uttTheRevealService) {
        'ngInject';

        // Members
        this._errorService =  uttErrorService;
        this._theRevealService = uttTheRevealService;

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
            })
            .catch(error => {
                this._errorService.setError(error);
            })
            .finally(() => {
                this.loading = false;
            });
    }
}

export default TheRevealController;