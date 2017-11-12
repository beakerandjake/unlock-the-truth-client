import angular from 'angular';

// Helps classes easily use angular-scroll to scroll the page. 

class ScrollHelperService {
    constructor($document) {
        'ngInject';

        this._document = $document;
    }

    scrollToElement(id) {
        if (!id) {
            return;
        }

        // Get desired element (if doesn't exist try to grab error element).
        const desired = this.getAngularElement(id) || this.getAngularElement('utt-error');

        if (!desired) {
            this._document.scrollTopAnimated(0, 1000);
            return;
        }

        console.log('got desired element!');

        // element
        // error
        // top
    }

    // Grab the element by id and wrap in angular element.  
    getAngularElement(id) {
        const element = document.getElementById(id);

        if (!element) {
            return;
        }

        return angular.element(element);
    }
}

export default ScrollHelperService;