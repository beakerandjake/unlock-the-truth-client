// Create an Interceptor https://docs.angularjs.org/api/ng/service/$http#interceptors
// This sits in the request / response pipeline 
// Attaches our Auth token to each $http request

function tokenInterceptor($q, uttAuthenticationTokenService) {
    'ngInject';

    //Fired before any $http request is sent away to the API.
    function request(config) {
        const defer = $q.defer();

        const token = uttAuthenticationTokenService.getToken();

        if (token) {
            config.headers.Authorization = 'Bearer ' + token;
        }

        defer.resolve(config);

        return defer.promise;
    }

    // Fired whenever we get an error.
    function responseError(response) {
        // Clear our token if we get unauthorized
        if (response.status === 401) {
            uttAuthenticationTokenService.clearToken();
        }
        return $q.reject(response);
    }

    return {
        request: request,
        responseError: responseError
    };
}

export default tokenInterceptor;