import template from './collapsible-panel.html';
import controller from './collapsible-panel.controller';
import './collapsible-panel.css';

// Component which defines a collapsible panel. Uses transclusion to simplify markup. 
// Allows user to lock the panel so it cannot be expanded. 
// Used by question track components to consistently display various questions.  

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