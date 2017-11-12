// Controller for the main app component. 

class AppController {
    constructor(uttErrorService) {
        'ngInject';

        // Members
        this._errorService = uttErrorService;
    }

    // Returns the current error object (if any)
    getError() {
        return this._errorService.error;
    }
}

export default AppController;