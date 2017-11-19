// Controller for the footer component. 

class FooterController {
    constructor($uibModal, uttAuthenticationTokenService, uttScrollHelper) {
        'ngInject';

        // Members 
        this._$uibModal = $uibModal;
        this._authenticationService = uttAuthenticationTokenService;
        this._scrollHelper = uttScrollHelper;
        this._modalInstance = null;
    }

    // Is the user currently logged in? 
    userLoggedIn() {
        return this._authenticationService.userLoggedIn();
    }

    // Fired when the user clicks the login button. 
    login() {
        if (this.userLoggedIn() || this._modalInstance) {
            return;
        }

        // Display the login component. 
        this._modalInstance = this._$uibModal.open({
            component: 'uttLogin',
            keyboard: false,
            backdrop: 'static'
        });

        // Scroll user to questions on login.
        this._modalInstance.result
            .then(() => {
                return this._scrollHelper.scrollToElement('utt-question-track');
            })
            .finally(() => {
                this._modalInstance = null;
            });
    }

    // Fired when the user clicks the login button. 
    logout() {
        if (!this.userLoggedIn() || this._modalInstance) {
            return;
        }

        // Display the logout component. 
        this._modalInstance = this._$uibModal.open({
            component: 'uttLogout',
            keyboard: false,
            backdrop: 'static'
        });

        // Scroll user to header on logout. 
        this._modalInstance.result
            .then(() => {
                return this._scrollHelper.scrollToElement('utt-header');
            })
            .finally(() => {
                this._modalInstance = null;
            });
    }
}

export default FooterController;