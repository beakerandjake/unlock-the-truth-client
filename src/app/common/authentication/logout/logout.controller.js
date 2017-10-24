// Controller for the logout component. 

class LogoutController {
    constructor(uttAuthenticationService) {
        'ngInject';

        this._authenticationService = uttAuthenticationService;
    }

    // Fired when the user asks to logout. 
    logout() {
        this._authenticationService.logout()
            .then(() => {
                this.close({});
            });
    }
}

export default LogoutController;