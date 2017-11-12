import angular from 'angular';
import scrollHelperService from './scroll-helper.service';

const moduleName = 'unlock-the-truth.common.scroll-helper';

angular
    .module(moduleName, [])
    .service('uttScrollHelper', scrollHelperService);

export default moduleName;