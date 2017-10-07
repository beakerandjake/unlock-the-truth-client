import './question-number.css';

// Component which handles displaying a questions number 

const questionNumberComponent = {
  bindings: {
      number: '<qnNumber'
  },
  template: `<span ng-if="$ctrl.number" class="question-number">{{$ctrl.number}}</span>`
};

export default questionNumberComponent;