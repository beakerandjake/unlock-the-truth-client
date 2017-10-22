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
            deferred.resolve({
                token:'asdf',
                username:'jennic'
            });
        }, 1000);

        return deferred.promise;
    }
}

export default AuthenticationService;