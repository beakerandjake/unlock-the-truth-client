import {
    loginRoute
} from './authentication.constants';

// Service which handles authentication.  

class AuthenticationService {
    constructor($q, $resource, uttAuthenticationTokenService) {
        'ngInject';

        // Members
        this._$q = $q;
        this._loginEndpoint = $resource(API_ADDRESS + loginRoute);
        this._tokenService = uttAuthenticationTokenService;
    }

    // Attempt to log into the API.  
    login(username, password) {
        const deferred = this._$q.defer();

        // Query API. 
        const query = this._loginEndpoint.save({}, {
            username: username,
            password: password
        }).$promise;

        // Handle result.
        query
            .then(result => {
                this._tokenService.storeToken(result.token);
                deferred.resolve(true);
            })
            .catch(() => {
                deferred.reject('Username or password was incorrect');
            });

        return deferred.promise;
    }

    // Returns a promise that is resolved with the result of the API call. 
    // Logs the user out of the current session. 
    logout() {
        const deferred = this._$q.defer();
        this._tokenService.clearToken();
        deferred.resolve({});
        return deferred.promise;
    }
}

export default AuthenticationService;