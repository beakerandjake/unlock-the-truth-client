class HeaderController {
    constructor($uibModal, uttAuthenticationService) {
        'ngInject';

        // Members 
        this._$uibModal = $uibModal;
        this._authenticationService = uttAuthenticationService;
    }

    // Is the user currently logged in? 
    userLoggedIn() {
        return this._authenticationService.userLoggedIn();
    }

    // Fired when the user clicks the login button. 
    login() {
        if (this.userLoggedIn()) {
            return;
        }

        // Display the login component. 
        this._$uibModal.open({
            component: 'uttLogin',
            keyboard: false,
            backdrop: 'static'
        });
    }

    // Fired when the user clicks the login button. 
    logout() {
        if (!this.userLoggedIn()) {
            return;
        }

        // Display the logout component. 
        this._$uibModal.open({
            component: 'uttLogout',
            keyboard: false,
            backdrop: 'static'
        });
    }


}

export default HeaderController;