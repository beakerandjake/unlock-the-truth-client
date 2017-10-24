// Controller for the login component 

class LoginController {
    constructor(uttAuthenticationService) {
        'ngInject';

        // Members
        this._authenticationService = uttAuthenticationService;
    }

    // Fired when the user submits the login form.  
    login() {
        // Bail if form submitted. 
        this.error = null;

        this._authenticationService.login(this.username, this.password)
            .then(() => {
                this.close({});
            })
            .catch(error => {
                this.error = error;
                // Reset form so it's no longer "submitted" 
                this.loginForm.$setPristine();
                this.loginForm.$setUntouched();
            });
    }
}

export default LoginController;