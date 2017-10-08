import mockQuestions from './mockTrackData.json';

// Service which wraps API calls relating to the question track component.  

export default class QuestionTrackService {
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
        });

        return deferred.promise;
    }

    // Returns a promise that is resolved with the result of the api call. 
    // Returns the result of answering the question. 
    answerQuestion(questionId, answer) {
        const deferred = this._$q.defer();

        console.log(`You asked to answer question: ${questionId} with answer:`, answer);

        this._$timeout(() => {
            deferred.resolve({
                correct: true
            });
        });

        return deferred.promise;
    }
}