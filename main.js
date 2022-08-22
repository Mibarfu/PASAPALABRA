const modalRanking = new ModalRanking();
const modalUser = new ModalUser();
const modalMarking = new ModalMarking();
let isEasterEgg = 0;
let level = 0;
let isInGame = false;

const newUser = () => {
  modalUser.showModalUser(verifyUserName);
};

const verifyUserName = (userName) => {
  userName = userName.trim();

  if (userName === "") {
    modalUser.showMsgUser("El campo no puede estar vacio");
    return;
  }

  if (userName.length > 15) {
    modalUser.showMsgUser("Nombre demasiado largo.(Max. 15 caracteres)");
    return;
  }

  if (usuarios.some(usuario => usuario.nombre.toLowerCase() === userName.toLowerCase())) {
    modalUser.showMsgUser("El usuario ya existe!");
  } else {
    usuarioEnJuego = {
      nombre: userName,
      puntuacion: 0,
      acertados: 0,
      fallidos: 0,
      tiempoSobrante: 0,
    };

    modalUser.hiddenModalUser();

    setPlayerName(usuarioEnJuego.nombre);
  }
};

const startGameButton = () => {
  enabledLevelChange(false);
  hiddenShowPlayButton(false);
  donutSelection();
  resetLetters();
  hiddenShowAnswerBox(true);
  hiddenShowpasapalabraInfo(false);
  clearDonut();
  if (isEasterEgg === 3) easterEgg(2, "a", "b", "j");
  showTurn();
  counters.startTimer();
  isInGame = true;
};

const endGame = () => {
  hitsCalculate();
  savePlayerInRanking(usuarioEnJuego);
  modalMarking.showModalMarking(usuarioEnJuego, newGame);
}

const newGame = () => {
  initializeGamePanel(160);
  modalRanking.showModalRanking(usuarios, newUser);
}


newGame();

