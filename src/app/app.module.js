import angular from 'angular';

// Global styles
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

// utt components
import MainComponent from './app.component';
import Header from './header/header.module';
import Footer from './footer/footer.module';
import Navbar from './navbar/navbar.module';
import QuestionTrack from './question-track/question-track.module';

const moduleName = 'unlock-the-truth';

//Declare our main module.

angular
    .module(moduleName, [
        Header,
        Footer,
        QuestionTrack,
        Navbar
    ])
    .component('unlockTheTruth', MainComponent);

export default moduleName;