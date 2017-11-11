import {
    apiRoutes
} from './question-track.constants';
import {
    get
} from 'lodash';

// Service which wraps API calls relating to the question track component.  

export default class QuestionTrackService {
    constructor($q, $resource) {
        'ngInject';

        // Members
        this._$q = $q;
        this._getQuestionsEndpoint = $resource(API_ADDRESS + apiRoutes.getQuestions);
        this._answerQuestionEndpoint = $resource(API_ADDRESS + apiRoutes.answerQuestion);
    }

    // Returns a promise that is resolved with the result of the api call. 
    // Returns the all of the available questions. 
    getQuestions() {
        const deferred = this._$q.defer();

        // Query API. 
        var query = this._getQuestionsEndpoint.get({}).$promise;

        // Handle result
        query
            .then(result => {
                deferred.resolve(result);
            })
            .catch(error => {
                const message = get(error, 'data.message') || 'Failed to load questions';
                deferred.reject(message);
            });

        return deferred.promise;
    }

    // Returns a promise that is resolved with the result of the api call. 
    // Returns the result of answering the question. 
    answerCurrentQuestion(answer) {
        const deferred = this._$q.defer();

        const body = {
            answer: answer
        };

        // Post the answer to the endpoint. 
        var query = this._answerQuestionEndpoint.save({}, body).$promise;

        // Handle result
        query
            .then(result => {
                deferred.resolve(result);
            })
            .catch(error => {
                const message = get(error, 'data.message') || 'Failed to answer question';
                deferred.reject(message);
            });

        return deferred.promise;
    }
}