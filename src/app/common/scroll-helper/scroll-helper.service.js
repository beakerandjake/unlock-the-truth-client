import angular from 'angular';

// Helps classes easily use angular-scroll to scroll the page. 

class ScrollHelperService {
    constructor($document) {
        'ngInject';

        this._document = $document;
    }

    // Tries to animate scroll to specified element, if not found scrolls to error, if error not found, does nothing. 
    scrollToElement(id) {
        if (!id) {
            return;
        }

        // Get desired element (if doesn't exist try to grab error element).
        const desired = this.getAngularElement(id) || this.getAngularElement('utt-error');

        if (!desired) {
            console.error('could not find element to scroll to!');
            return;
        }

        this._document.scrollToElementAnimated(desired);
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