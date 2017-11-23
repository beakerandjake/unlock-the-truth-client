import angular from 'angular';
import NgScroll from 'angular-scroll';

// Global styles
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import 'angular-motion';

// configuration
import NgScrollConfig from './configuration/ng-scroll.config';

// utt components
import MainComponent from './app.component';
import Header from './header/header.module';
import Footer from './footer/footer.module';
import Error from './error/error.module';
import QuestionTrack from './question-track/question-track.module';
import TheReveal from './the-reveal/the-reveal.module';
import TheTruth from './the-truth/the-truth.module';

const moduleName = 'unlock-the-truth';

//Declare our main module.

angular
    .module(moduleName, [
        // 3rd party
        NgScroll,
        // Config
        NgScrollConfig,
        // UTT components
        Header,
        Footer,
        Error,
        QuestionTrack,
        TheReveal,
        TheTruth
    ])
    .component('unlockTheTruth', MainComponent);

export default moduleName;