import angular from 'angular';
import UiRouter from '@uirouter/angularjs';

// Global styles
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

// utt components
import MainComponent from './app.component';
import Header from './header/header.module';
import Footer from './footer/footer.module';
import CreateQuestion from './create-question/create-question.module';
import QuestionTrack from './question-track/question-track.module';

const moduleName = 'unlock-the-truth';

//Declare our main module.

angular
    .module(moduleName, [
        UiRouter,
        Header,
        Footer,
        QuestionTrack,
        CreateQuestion
    ])
    .component('unlockTheTruth', MainComponent);

export default moduleName;