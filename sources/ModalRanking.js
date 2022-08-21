class ModalRanking {
    constructor() {
        this.all = document.querySelector(".modal-ranking");
        this.content = document.querySelector(".modal-ranking-content");
        this.header = document.querySelector(".modal-ranking-content .header");
        this.noPlayers = document.querySelector(".modal-ranking-content .no-players");
        this.list = document.querySelector(".modal-ranking-content ul");
        this.callback = null;

        this.content.addEventListener("click", () => {this.clickEventModalRanking()}, true);
    }

    entryUsersModalRanking(users) {


        this.list.innerHTML = "";

        users.forEach((user, index) => {

            const newElement = document.createElement("li");

            newElement.innerHTML =
                `<span class='position'>${index + 1} </span><span class='name'> 🙋🏻‍♂️ ${user.nombre}</span><span class='points'> 🏆 ${user.puntuacion}</span><span class='hits'> 🟢 ${user.acertados}</span>`;

            this.list.appendChild(newElement);
        });

    };

    showModalRanking(users, nextFunction) {

        this.callback = nextFunction;

        this.all.style.display = "block";

        if (users.length === 0) {
            this.noPlayers.style.visibility = "visible";
            this.header.style.visibility = "hidden";
        }
        else {
            this.entryUsersModalRanking(users);
            this.noPlayers.style.visibility = "hidden";
            this.header.style.visibility = "visible";
        }
    };

    clickEventModalRanking() {
        this.hiddenModalRanking();
        this.callback();
    };

    hiddenModalRanking() {
        this.all.style.display = "none";
    };

}


