import * as constants from './the-reveal.constants';
import {
    get
} from 'lodash';

// Service which wraps API methods relating to the reveal. 

class TheRevealService {
    constructor($q, $resource) {
        'ngInject';

        // Members
        this._$q = $q;
        this._theTruthEndpoint = $resource(API_ADDRESS + constants.theTruthApiRoute);
    }

    // Returns a promise that is resolved with the result of the api. 
    // RETURNS THE FINAL TRUTH!!!
    unlockTheTruth() {
        const deferred = this._$q.defer();

        const query = this._theTruthEndpoint.get().$promise;

        query
            .then(result => {
                deferred.resolve(result);
            })
            .catch(error => {
                const message = get(error, 'data.message') || 'Failed to unlock the truth';
                deferred.reject(message);
            });

        return deferred.promise;
    }
}

export default TheRevealService;