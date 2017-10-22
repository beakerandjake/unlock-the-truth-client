import angular from 'angular';
import insultsService from './insults.service';

// Module which contains the insults service.  

const moduleName = 'unlock-the-truth.insults';

angular
    .module(moduleName, [])
    .service('uttInsultsService', insultsService);

export default moduleName;