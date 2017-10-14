// Controller for the reveal component.  

class TheRevealController {
    constructor(theRevealService) {
        'ngInject';

        // Members
        this._theRevealService = theRevealService;

        // Properties
        this.loading = false;
        this.secret = null;
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
                this.secret = result;
            })
            .catch(error => {
                //TODO
                console.error(error);
            })
            .finally(() => {
                this.loading = false;
            });
    }
}

export default TheRevealController;