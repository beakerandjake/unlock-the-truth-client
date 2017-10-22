

// Service which handles authentication.  

class AuthenticationService {
    constructor($q, $timeout) {
        'ngInject';

        // Members
        this._$q = $q;
        this._$timeout = $timeout;
    }

    // Attempt to log into the API.  
    login(username, password) {
        console.log('USER', username, 'PASSWORD', password);

        const deferred = this._$q.defer();

        this._$timeout(() => {
            deferred.reject('The username or password was incorrect.');
        }, 1000);

        return deferred.promise;
    }

    // Store the token from the API in the users local storage. 
    _storeToken(token) {
        console.log('asked to store token', token);
    }
}

export default AuthenticationService;