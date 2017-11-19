import {
    tokenKey
} from './authentication.constants';

class AuthenticationTokenService {
    constructor(localStorageService, jwtHelper) {
        'ngInject';

        // Members
        this._localStorageService = localStorageService;
        this._jwtHelper = jwtHelper;
    }

    // Store the token from the API in the users local storage. 
    storeToken(token) {
        this._localStorageService.set(tokenKey, token);
    }

    // Clear the token from local storage. 
    clearToken() {
        this._localStorageService.remove(tokenKey);
    }

    // Returns true if the user is logged into the application. 
    userLoggedIn() {
        return !!this.getToken();
    }

    // Returns the auth token, if exists null otherwise. 
    getToken() {
        return this._localStorageService.get(tokenKey);
    }
}

export default AuthenticationTokenService;