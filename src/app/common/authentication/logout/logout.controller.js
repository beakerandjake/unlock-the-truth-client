// Controller for the logout component. 

class LogoutController {
    constructor(uttAuthenticationService) {
        'ngInject';

        // Members
        this._authenticationService = uttAuthenticationService;

        // Properties
        this.busy = false;
    }

    // Fired when the user asks to logout. 
    logout() {
        if (this.busy) {
            return;
        }

        this.busy = true;

        this._authenticationService.logout()
            .then(() => {
                this.close({});
            })
            .catch(() => {
                //TODO HANDLE ERROR
            })
            .finally(() => {
                this.busy = false;
            });
    }
}

export default LogoutController;