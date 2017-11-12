class HeaderController {
    constructor(uttScrollHelper) {
        'ngInject';

        // Members
        this._scrollHelper = uttScrollHelper;
    }

    // Scroll the user to the question track. 
    scrollToQuestions() {
        this._scrollHelper.scrollToElement('utt-question-track');
    }
}

export default HeaderController;