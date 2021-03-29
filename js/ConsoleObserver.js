class ConsoleObserver {
    constructor(){}

    update(model){
        console.log('Current Number and Color are: ' + model.value + ' & ' + model.color.toUpperCase());
    }
}