import angular from 'angular';
import errorComponent from './error.component';
import './error.css';
import './error.jpg';


// Module which has the error display component.  

const moduleName = 'unlock-the-truth.error';

angular
    .module(moduleName, [])
    .component('uttError', errorComponent);

    export default moduleName;