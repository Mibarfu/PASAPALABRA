
const donut = new Donut();
const counters = new Counters();

const okButton = document.querySelector("#ok-button");
const introTextBoxResponse = document.querySelector("#answer");
const playButton = document.querySelector(".play-button");
const player = document.querySelector("#player");
const pasapalabraInfo = document.querySelector(".pasapalabra-info");
const easterEggWind = document.querySelector("#u");
const modalUserExitElemt = document.querySelector("#user-close");
const exitButtonElemt = document.querySelector("#exit-button");
const levelSelector = document.querySelectorAll(".level");
const borderLevel = document.querySelector(".border-level");


const clickButtonOk = () => {
    hiddenShowButtonOk(false);
    nextletter("fallo");
    if (isFullDonut) {
        fullDonut();
    }else{
        showTurn();
        counters.blinking(false);
        counters.startTimer();
        hiddenShowAnswerBox(true);
    }
};

const hiddenShowButtonOk = (state) => {
    if (state) {
        okButton.style.visibility = "visible";
    }
    else {
        okButton.style.visibility = "hidden";
    }
}

const enterPressInputAnswer = (event) => {
    if (event.key === "Enter") { 
        responseControl(introTextBoxResponse.value);
        introTextBoxResponse.value ="";
   }

}

const hiddenShowAnswerBox = (state) => {
    if (state) {
        introTextBoxResponse.style.visibility = "visible";
        introTextBoxResponse.focus();
    } else 
        introTextBoxResponse.style.visibility = "hidden";
}

const eventClickPlayButton = () => {
    startGameButton();
}

const hiddenShowPlayButton = (state) => {
    if (state) {
        playButton.style.visibility = "visible";
    }
    else {
        playButton.style.visibility = "hidden";
    }
}

const setMessage = (message, type) => {
    const element = document.querySelector("#space-circle #question");

    if (type) {
        element.style.color = "yellow";
        element.style.fontStyle = "italic";
    } else {
        element.style.color = "rgba(255, 255, 255, 0.8)";
        element.style.fontStyle = "normal";
    }


    element.innerHTML = message;
}

const setLetterPosition = (message,type) => {
    const element = document.querySelector("#space-circle #letter-position");
    
    if (!type) {
        element.style.color = "yellow";
        element.style.fontStyle = "nomal";
    } else {
        element.style.color = "#0e67e9";
        element.style.fontStyle = "italic";
    }


    element.textContent = message;
}

const setPlayerName = (playerName) => {
    player.textContent = playerName;
}

const cleanBoxResponse = () => {
    introTextBoxResponse.value = "";
}

const hiddenShowpasapalabraInfo = (state) => {
    if (state) 
        pasapalabraInfo.style.opacity = "1";
    else
        pasapalabraInfo.style.opacity = "0";
        
}

const initializeGamePanel = (time) => {
    isInGame = false;
    donut.generateRosco(0.95);
    counters.resetTimeGame(time);
    counters.setTimerGame();
    counters.setHits(0);
    hiddenShowButtonOk(false);
    hiddenShowAnswerBox(false);
    setMessage("", false)
    setLetterPosition("",false)
    hiddenShowPlayButton(true);
    donut.cleanRosco();
    hiddenShowpasapalabraInfo(true);
    cleanBoxResponse();
    counters.restartColor();
    levelChange(0);
}

const eventLevelChange = (element) => {
    switch (element.target.id) {
        case "easy":
            levelChange(0);
            break;
        case "middle":
            levelChange(1);
            break;
        case "hard":
            levelChange(2);
            break;
    }
}

const levelChange = (element) => {

    if (!isInGame) {

        levelSelector.forEach(level => {
            level.style.color = "white";
        })

        level = element;

        borderLevel.style.left = (levelSelector[element].offsetLeft - 1) + "px";
        levelSelector[element].style.color = "yellow";
    } else {
        
    }
    
}


modalUserExitElemt.addEventListener("click", () => {
    modalUser.hiddenModalUser();
    modalRanking.showModalRanking(usuarios, newUser);
});

exitButtonElemt.addEventListener("click", () => {
    counters.stopTimer();
    hitsCalculate();
    modalMarking.showModalMarking(usuarioEnJuego, newGame);
});

okButton.addEventListener("click", clickButtonOk, true);

introTextBoxResponse.addEventListener("keyup", enterPressInputAnswer, true);

playButton.addEventListener("click", eventClickPlayButton, true );

easterEggWind.addEventListener("click", () => {
    isEasterEgg++;
}, true );

levelSelector.forEach((selector) => {
    selector.addEventListener("click", eventLevelChange, true);
})