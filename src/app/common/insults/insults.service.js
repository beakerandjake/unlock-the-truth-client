import insults from './insults.json';
import {
    sample
} from 'lodash';

// Service handles mocking the user and insulting them. 

class InsultsService {
    constructor() {

    }

    // Returns a hard hitting insult.  
    getInsult() {
        return sample(insults);
    }

}

export default InsultsService;