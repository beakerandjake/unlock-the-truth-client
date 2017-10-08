import angular from 'angular';
import insultService from './insults.service';

// Module which contains the insults service.  

const moduleName = 'unlock-the-truth.insults';

angular
    .module(moduleName, [])
    .service('InsultService', insultService);

export default moduleName;