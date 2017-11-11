import img from './error.jpg';

// Controller for the error display component. 

class ErrorDisplayController {
    constructor() {
        this.pathToErrorImage = img;
    }

    $onInit() {
        // Grab error that can be injected into our state.
        this.error = this.$transition$.params().error;
    }
}

export default ErrorDisplayController;