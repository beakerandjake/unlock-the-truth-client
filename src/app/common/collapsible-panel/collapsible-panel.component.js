import template from './collapsible-panel.html';
import controller from './collapsible-panel.controller';
import './collapsible-panel.css';

const CollapsiblePanelComponent = {
    transclude: {
        title: 'cpTitle',
        body: 'cpBody'
    },
    bindings: {
        locked: '<cpLocked', // If truthy, panel will default to collapsed and not allow expansion
        panelNgClass: '@cpNgClass', // Passed to ng class, allows you to style the main panel with custom classes (defaults to panel-default if not provided)
        startExpanded: '<cpStartExpanded' // If truthy will default the panel to expanded. 
    },
    template,
    controller
};

export default CollapsiblePanelComponent;