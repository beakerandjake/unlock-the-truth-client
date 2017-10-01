class CollapsiblePanelController {
    constructor() {}

    $onInit() {
        this.isCollapsed = !this.startExpanded;
    }

    // Toggle this from collapsed to expanded. Only allowed if this is not locked. 
    toggle() {
        if (this.locked) {
            return;
        }

        this.isCollapsed = !this.isCollapsed;
    }
}

export default CollapsiblePanelController;