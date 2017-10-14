// Controller for the reveal component.  

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

    }
}

export default TheRevealController;