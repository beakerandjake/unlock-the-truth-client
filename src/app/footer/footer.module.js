import angular from 'angular';
import footer from './footer.component';

import './footer.css';

const moduleName = 'unlock-the-truth.footer';

angular
    .module(moduleName, [])
    .component('uttFooter', footer);

export default moduleName;