import mockQuestions from './mockTrackData.json';

export default class QuestionTrackController {
    constructor($q, $timeout) {
        'ngInject';

        // Members
        this._$q = $q;
        this._$timeout = $timeout;
    }

    // Returns a promise that is resolved with the result of the api call. 
    // Returns the all of the available questions. 
    getQuestions() {
        const deferred = this._$q.defer();

        this._$timeout(() => {
            deferred.resolve(mockQuestions);
        }, 3000);
        
        return deferred.promise;
    }
}