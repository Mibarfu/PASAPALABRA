class ModalMarking {
    
    constructor() {
        this.all = document.querySelector(".modal-marking");
        this.content = document.querySelector(".modal-marking-content");
        this.name = document.querySelector(".modal-marking-content #name-marking");
        this.pointsCol = document.querySelector(".modal-marking-content #points-col");
        this.hitsCol = document.querySelector(".modal-marking-content #hits-col");
        this.failsCol = document.querySelector(".modal-marking-content #fails-col");
        this.timeCol = document.querySelector(".modal-marking-content #time-col");
        this.callback = null
        
        this.content.addEventListener("click", () => {this.clickEventModalMarking()}, true);
    }

    showModalMarking(userDates, nextFunction) {
        this.callback = nextFunction;
        this.all.style.display = "block";
        this.name.textContent = userDates.nombre;
        this.pointsCol.textContent = userDates.puntuacion + " puntos";
        this.hitsCol.textContent = userDates.acertados + " aciertos";
        this.failsCol.textContent = userDates.fallidos + " fallos";
        this.timeCol.textContent = userDates.tiempoSobrante + " segundos";
    }

    clickEventModalMarking() {
        this.hiddenModalMarking();
        this.callback();
    }

    hiddenModalMarking()  {
        this.all.style.display = "none";  
    }


}



