import {
    tokenKey
} from './authentication.constants';

// Service which handles authentication.  

class AuthenticationService {
    constructor($q, $timeout, localStorageService) {
        'ngInject';

        // Members
        this._$q = $q;
        this._$timeout = $timeout;
        this._localStorageService = localStorageService;
    }

    // Attempt to log into the API.  
    login(username, password) {
        console.log('USER', username, 'PASSWORD', password);

        const deferred = this._$q.defer();

        this._$timeout(() => {
            this._storeToken('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWV9.TJVA95OrM7E2cBab30RMHrHDcEfxjoYZgeFONFh7HgQ');
            deferred.resolve({});
        }, 1000);

        return deferred.promise;
    }

    // Store the token from the API in the users local storage. 
    _storeToken(token) {
        this._localStorageService.set(tokenKey, token);
    }

    // Returns true if the user is logged into the application. 
    userLoggedIn() {
        return !!this._localStorageService.get(tokenKey);
    }
}

export default AuthenticationService;