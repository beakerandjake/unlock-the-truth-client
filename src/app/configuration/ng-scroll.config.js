import angular from 'angular';
import NgScroll from 'angular-scroll';

const moduleName = 'unlock-the-truth.config.ng-scroll';

angular
    .module(moduleName, [
        NgScroll
    ])
    .value('duScrollEasing', function (t) {
        return (--t) * t * t + 1;
    })
    .value('duScrollCancelOnEvents', false);

export default moduleName;