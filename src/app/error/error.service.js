// Allows components to raise errors globally. 

class ErrorService {
    constructor() {
        this.error = null;
    }

    // Returns the error object 
    getError() {
        return this.error;
    }

    // Set the error object. 
    setError(error) {
        this.error = error;
    }
}

export default ErrorService;