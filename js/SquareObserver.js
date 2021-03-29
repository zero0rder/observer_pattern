class SquareObserver {
    constructor(elemId){
        this.element = document.getElementById(elemId);
    }

    update(model){
        this.element.innerHTML = model.value;
        this.element.style.backgroundColor = model.color;
    }
}