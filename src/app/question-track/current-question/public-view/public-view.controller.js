class PublicViewController {
    constructor() {
        
    }

    $onInit() {
        console.log(this.question.timeUnlocked);
        this.startTime = new Date(this.question.timeUnlocked);
    }
}

export default PublicViewController;