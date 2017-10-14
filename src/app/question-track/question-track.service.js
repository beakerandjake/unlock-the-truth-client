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
                correct: true,
                nextQuestion: {
                    id: '59d130dbacb56a7f0f108f6c',
                    title: 'Sint dolor aliqua cillum voluptate culpa nostrud consectetur anim.',
                    body: 'Take a picture of your cat',
                    type: 'manual',
                    number: 5
                },
                previousQuestion: {
                    id: '59d130dbc7f9e91360f20d27',
                    title: 'Dolore aliquip irure nulla tempor.',
                    body: 'Who was the first President of the United States of America?',
                    answer: 'Bob',
                    failedAttempts: 69,
                    answeredBy: 'Molina',
                    timeToAnswer: '4 hours',
                    number: 4
                }
            });
        });

        return deferred.promise;
    }
}