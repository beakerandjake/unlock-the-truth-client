import * as constants from './the-reveal.constants';

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
            .catch(() => {
                deferred.reject('Failed to unlock the truth. This is an error, please try again.');
            });

        return deferred.promise;
    }
}

export default TheRevealService;