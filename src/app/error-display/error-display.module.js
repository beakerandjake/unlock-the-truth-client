import angular from 'angular';
import errorDisplayComponent from './error-display.component';
import './error-display.css';
import './error.jpg';


// Module which has the error display component.  

const moduleName = 'unlock-the-truth.error-display';

angular
    .module(moduleName, [])
    .component('uttErrorDisplay', errorDisplayComponent);

export default moduleName;