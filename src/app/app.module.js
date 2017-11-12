import angular from 'angular';
import NgScroll from 'angular-scroll';

// Global styles
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

// utt components
import NgScrollConfig from './configuration/ng-scroll.config';
import MainComponent from './app.component';
import Header from './header/header.module';
import Footer from './footer/footer.module';
import Error from './error/error.module';
import CreateQuestion from './create-question/create-question.module';
import QuestionTrack from './question-track/question-track.module';

const moduleName = 'unlock-the-truth';

//Declare our main module.

angular
    .module(moduleName, [
        NgScroll,
        NgScrollConfig,
        Header,
        Footer,
        Error,
        QuestionTrack,
        CreateQuestion
    ])
    .component('unlockTheTruth', MainComponent);

export default moduleName;