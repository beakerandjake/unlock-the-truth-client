import angular from 'angular';
import errorComponent from './error.component';
import errorService from './error.service';
import './error.css';

// Module which has the error display component.  

const moduleName = 'unlock-the-truth.error';

angular
    .module(moduleName, [])
    .component('uttError', errorComponent)
    .service('uttErrorService', errorService);

    export default moduleName;