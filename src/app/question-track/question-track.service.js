import mockQuestions from './mockTrackData.json';
import {
   apiRoutes 
} from './question-track.constants';

// Service which wraps API calls relating to the question track component.  

export default class QuestionTrackService {
    constructor($q, $resource, $timeout) {
        'ngInject';

        // Members
        this._$q = $q;
        this._getQuestionsEndpoint = $resource(API_ADDRESS + apiRoutes.getQuestions);
        this._$timeout = $timeout;
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
                console.error(error);
                deferred.reject('Failed to get questions!');
            });

        return deferred.promise;
    }

    // Returns a promise that is resolved with the result of the api call. 
    // Returns the result of answering the question. 
    answerQuestion(questionId, answer) {
        const deferred = this._$q.defer();

        console.log(`You asked to answer question: ${questionId} with answer:`, answer);

        this._$timeout(() => {
            const currentQuestion = mockQuestions.currentQuestion;

            // Make a dummy previous question object. 
            const previousQuestion = {
                id: questionId,
                title: 'A great previous question',
                body: 'Blah blah blah',
                answer: 'Bob',
                failedAttempts: 69,
                answeredBy: 'Jim',
                timeToAnswer: '6 hours',
                number: currentQuestion.number
            };

            let newQuestion = null;

            const locked = mockQuestions.lockedQuestions[0];

            if (locked) {
                // Make a dummy new question object. 
                newQuestion = {
                    id: locked.id,
                    title: 'Sint dolor aliqua cillum voluptate culpa nostrud consectetur anim.',
                    body: 'Who is cool?',
                    type: 'text',
                    number: locked.number
                };
            }


            deferred.resolve({
                correct: true,
                nextQuestion: newQuestion,
                previousQuestion: previousQuestion
            });
        }, 2000);

        return deferred.promise;
    }
}