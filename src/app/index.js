import _ from 'lodash';

import '../style/app.css';

var words = ['Hello', 'World!!'].map(word => word.toUpperCase());

var message = _.join(words, ' ');

console.log(message);