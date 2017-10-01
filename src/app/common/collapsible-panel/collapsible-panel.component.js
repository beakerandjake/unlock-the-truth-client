import template from './collapsible-panel.html';
import controller from './collapsible-panel.controller';
import './collapsible-panel.css';

const CollapsiblePanelComponent = {
    transclude: {
        title: 'cpTitle',
        body: 'cpBody'
    },
    bindings: {
        locked: '<cpLocked'
    },
    template,
    controller
};

export default CollapsiblePanelComponent;