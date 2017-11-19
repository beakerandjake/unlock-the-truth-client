// Service which wraps API calls relating to creating questions

class CreateQuestionService {
    constructor($resource, $q) {
        'ngInject';

        // Members
        this._$q = $q;
        this._createQuestionEndpoint = $resource(API_ADDRESS + '/questions/');
    }

    // Returns a promise that is resolved with the result of the api. 
    createQuestion(question) {
        const deferred = this._$q.defer();
        
        const query = this._createQuestionEndpoint.save({}, question).$promise;

        query
            .then(result => {
                deferred.resolve(result);
            })
            .catch(error => {
                deferred.reject(error);
            });

        return deferred.promise;
    }
}

export default CreateQuestionService;