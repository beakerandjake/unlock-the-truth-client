import angular from 'angular';
import backgroundImagePath from './the-truth.gif';
import audioPath from './the-truth.mp3';

class TheTruthController {
    constructor($document) {
        'ngInject';

        // Members
        this._$document = $document;
        
    }

    $onInit() {
        this.updateBackgroundImage();
        this.playAudio();
    }

    // Update the background for a nice surprise. 
    updateBackgroundImage() {
        if (!backgroundImagePath) {
            return;
        }

        angular
            .element(this._$document[0].body)
            .css({
                'background': 'black',
                'background-image': `url(${backgroundImagePath})`,
                'background-attachment': 'fixed',
                'background-repeat': 'no-repeat',
                'background-size': 'cover',
                'background-position': 'center'
            });
    }

    // SPIN THEM RIGHT ROUND
    playAudio() {
        const sound = new Audio(audioPath);
        sound.loop = true;
        sound.play();
    }
}

export default TheTruthController;