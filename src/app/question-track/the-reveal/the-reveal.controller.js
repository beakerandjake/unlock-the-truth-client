// Controller for the reveal component.  

class TheRevealController {
    constructor(theRevealService) {
        'ngInject';

        // Members
        this._theRevealService = theRevealService;
    }

    $onInit() {

    }

    unlockTheTruth() {
        console.log('UNLOCK THE TRUTH!');
    }
}

export default TheRevealController;