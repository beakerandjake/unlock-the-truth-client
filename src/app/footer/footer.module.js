import angular from 'angular';
import UibModal from 'angular-ui-bootstrap/src/modal';
import Login from 'common/authentication/login/login.module';
import Logout from 'common/authentication/logout/logout.module';
import Authentication from 'common/authentication/authentication.module';
import footer from './footer.component';

// Module which contains the footer component.  

import './footer.css';

const moduleName = 'unlock-the-truth.footer';

angular
    .module(moduleName, [
        UibModal,
        Login,
        Logout,
        Authentication
    ])
    .component('uttFooter', footer);

export default moduleName;