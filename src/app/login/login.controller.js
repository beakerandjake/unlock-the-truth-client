class LoginController {
    constructor(uttAuthenticationService) {
        'ngInject';

        // Members
        this._authenticationService = uttAuthenticationService;
        console.log('hello');
    }

    // Fired when the user submits the login form.  
    login() {
        console.log('asked to login!');
    }
}

export default LoginController;