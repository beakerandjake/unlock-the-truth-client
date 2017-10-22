class HeaderController {
    constructor($uibModal) {
        'ngInject';

        // Members 
        this._$uibModal = $uibModal;
    }

    // Display the login component. 
    login() {
        this._$uibModal.open({
            component: 'uttLogin',
            keyboard: false
        });
    }
}

export default HeaderController;