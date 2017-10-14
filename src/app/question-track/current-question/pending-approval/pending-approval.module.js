import angular from 'angular';
import pendingApprovalComponent from './pending-approval.component';

// Module which contains the pending approval component. 

const moduleName = 'unlock-the-truth.current-question.pending-approval';

angular
    .module(moduleName, [])
    .component('uttPendingApproval', pendingApprovalComponent);

export default moduleName;