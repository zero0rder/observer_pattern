class HistoryObserver {
    constructor(){
        this.colorHistory = [];
    }

    update(model){
        let msg = '5 Most recent colors ==> ';
        this.colorHistory.unshift(model.color[0].toUpperCase());

        for (var i=0; i < 5; i++){
            if (this.colorHistory[i]){
                msg += this.colorHistory[i] + ' ';
            }
        }

        console.log(msg);
    }
}