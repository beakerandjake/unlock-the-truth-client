import template from './collapsible-panel.html';
import controller from './collapsible-panel.controller';

const CollapsiblePanelComponent = {
    transclude: {
        title: 'cpTitle',
        body: 'cpBody'
    },
    bindings: {},
    template,
    controller
};

export default CollapsiblePanelComponent;