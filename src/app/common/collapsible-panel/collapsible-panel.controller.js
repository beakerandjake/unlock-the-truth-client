class CollapsiblePanelController {
    constructor() {
        this.isCollapsed = true;
    }

    $onInit() {

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