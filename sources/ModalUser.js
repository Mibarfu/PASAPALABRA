class ModalUser {

    constructor() {
        this.all = document.querySelector(".modal-user");
        this.content = document.querySelector(".modal-user-content");
        this.name = document.querySelector(".name-user-button input");
        this.button = document.querySelector(".name-user-button button");
        this.msg = document.querySelector(".msg-user-name");
        this.callback = null;

        this.button.addEventListener("click", () => {this.eventClickButtonModalUser()}, true);
        
        this.name.addEventListener("keydown", (evnt) => {this.eventEnterInTextModalUser(evnt)},
        true);
    }

    eventClickButtonModalUser() {
        this.callback(this.name.value);
    };

    eventEnterInTextModalUser(evnt) {
        if (evnt.key === "Enter") {
            this.callback(this.name.value);
        }
    };

    showModalUser(nextFunction) {
        this.callback = nextFunction;

        this.all.style.display = "block";

        this.name.value = "";
        this.msg.textContent = "";

        this.name.focus();
    };

    hiddenModalUser() {
        this.all.style.display = "none";
    };

    showMsgUser(msg) {
        this.msg.textContent = msg;
    };

}






