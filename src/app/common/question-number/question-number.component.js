import './question-number.css';

// Component which handles displaying a questions number 

const questionNumberComponent = {
  bindings: {
      number: '<qnNumber'
  },
  template: `<span class='question-number'>{{number}}</span>`
};

export default questionNumberComponent;