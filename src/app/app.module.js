import angular from 'angular';

// utt components
import MainComponent from './app.component';
import Header from './header/header.module';
import Footer from './footer/footer.module';
import QuestionTrack from './question-track/question-track.module';

// Global styles
import 'bootstrap/dist/css/bootstrap.min.css';

const moduleName = 'unlock-the-truth';

//Declare our main module.

angular
    .module(moduleName, [
        Header,
        Footer,
        QuestionTrack
    ])
    .component('unlockTheTruth', MainComponent);

export default moduleName;