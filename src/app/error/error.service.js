// Allows components to raise errors globally. 

class ErrorService {
    constructor() {
        this.error = null;
    }

    // Returns the error object 
    get error() {
        return this.error;
    }

    // Set the error object. 
    set error(error) {
        this.error = error;
    }
}

export default ErrorService;