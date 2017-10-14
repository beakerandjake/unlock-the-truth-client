// Service which wraps API methods relating to the reveal. 

class TheRevealService {
    constructor($q, $timeout) {
        'ngInject';

        // Members
        this._$q = $q;
        this._$timeout = $timeout;
    }

    // Returns a promise that is resolved with the result of the api. 
    // RETURNS THE FINAL TRUTH!!!
    unlockTheTruth() {
        const deferred = this._$q.defer();

        this._$timeout(() => {
            deferred.resolve('Great Job');
        }, 1000);

        return deferred.promise;
    }
}

export default TheRevealService;