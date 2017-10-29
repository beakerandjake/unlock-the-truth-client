// Create an Interceptor https://docs.angularjs.org/api/ng/service/$http#interceptors
// This sits in the request / response pipeline 
// Attaches our Auth token to each $http request

function tokenInterceptor($q, uttAuthenticationService) {
    'ngInject';

    //Fired before any $http request is sent away to the API.
    function request(config) {
        const defer = $q.defer();

        const token = uttAuthenticationService.getToken();

        if (token) {
            config.headers.Authorization = token;
        }

        defer.resolve(config);

        return defer.promise;
    }

    return {
        request: request
    };
}

export default tokenInterceptor;