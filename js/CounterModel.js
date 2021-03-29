class CounterModel {
    constructor() {
        this.value = 0;
        this.color = 'green';
        this.observers = [];
    }

    increment(){
        var colors = ['blue', 'red', 'purple', 'orange', 'green'];
        this.value++;
        this.color = colors[Math.floor(Math.random() * colors.length)];
        this.notifyObservers();
    }

    //Add Observers to the CounterModel Object
    addObserver(o){
        this.observers.push(o);
    }

    //Notify Observers of updates inside CounterModel Object
    notifyObservers(){
        for(let o of this.observers){
            //Pass in CounterModel Object as param to each observer's update function
            o.update(this);
        }
    }

}