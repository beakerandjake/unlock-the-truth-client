// Service which wraps API methods relating to the reveal. 

class TheRevealService {
    constructor($q, $timeout) {
        'ngInject';

        // Members
        this._$q = $q;
        this._$timeout = $timeout;
    }

    // Returns a promise that is resolved with the result of the api. 
    // Returns the final truth if it's unlocked, otherwise returns nothing..
    unlockTheTruth() {
        const deferred = this._$q.defer();

        this._$timeout(() => {
            deferred.resolve({
                unlocked: false
            });
        }, 1000);

        return deferred.promise;
    }
}

export default TheRevealService;