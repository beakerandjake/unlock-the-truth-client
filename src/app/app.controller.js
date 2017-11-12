// Controller for the main app component. 

class AppController {
    constructor(uttErrorService) {
        'ngInject';

        // Members
        this._errorService = uttErrorService;

        // Properties
        this.theTruth = null;
    }

    // Returns the current error object (if any)
    getError() {
        return this._errorService.getError();
    }

    // Callback that is invoked when the user unlocks the truth. 
    onUnlocked(theTruth) {
        this.theTruth = theTruth;
    }
}

export default AppController;