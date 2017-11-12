import angular from 'angular';
import backgroundImagePath from './the-truth.gif';

class TheTruthController {
    constructor($document) {
        'ngInject';

        // Members
        this._$document = $document;
    }

    $onInit() {
        this.updateBackgroundImage();
    }

    // Update the background for a nice surprise. 
    updateBackgroundImage() {
        if(!backgroundImagePath){
            return;
        }

        const bodyElement = angular.element(this._$document[0].body);
        bodyElement.css('background', 'black');
        bodyElement.css('background-image', `url(${backgroundImagePath})`);
        bodyElement.css('background-attachment', `fixed`);
        bodyElement.css('background-size', `cover`);
    }
}

export default TheTruthController;