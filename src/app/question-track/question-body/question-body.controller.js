class QuestionBodyController {
    constructor($sce) {
        'ngInject';

        // Members
        this._$sce = $sce;

        // Properties
        this.trustedBody = '';
    }

    $onInit() {
        this.trustedBody = this._$sce.trustAsHtml(this.body);
    }
}

export default QuestionBodyController;