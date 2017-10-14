import template from './manual-question.html';

// Component which represents a "manual" question. That is a question in which the user must text the answer to an administrator.
// This is mainly intended to allows us to do questions which require a picture to be submitted by the user as proof of question completion. 
// Submitting the answer via text, then having the question manually unlocked by an administrator shaves off development time which would be required
// for image upload / submission, and the various flows around that such as editing a submitted answer or re-submitting.    

const ManualQuestionController = {
    bindings: {
        question: '<mqQuestion'
    },
    template
};

export default ManualQuestionController;