import angular from 'angular';
import angularAnimate from 'angular-animate';
import collapse from 'angular-ui-bootstrap/src/collapse';
import collapsiblePanelComponent from './collapsible-panel.component';

// Module which contains the collapsible panel component.  

const moduleName = 'unlock-the-truth.collapsible-panel';

angular
    .module(moduleName, [
        angularAnimate,
        collapse
    ])
    .component('uttCollapsiblePanel', collapsiblePanelComponent);

export default moduleName;