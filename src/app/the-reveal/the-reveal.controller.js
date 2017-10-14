class TheRevealController {
    constructor() {
        // Properties
        this.loading = false;
    }

    $onInit() {
        this.unlockTheTruth();
    }

    // Query the API for the truth. 
    unlockTheTruth() {
        if(this.loading){
            return;
        }

        this.loading = true;
    }
}

export default TheRevealController;