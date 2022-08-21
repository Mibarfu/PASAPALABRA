
let letras = [
    {
      letra: "a",
      palabra: ["abducir", "anticuario", "alcachofa"],
      estado: 1,
      preguntas:[
        "Alejar un miembro o una región del cuerpo del plano medio que divide imaginariamente el organismo en dos partes simétricas",
        "Persona que colecciona o negocia con antigüedades",
        "Planta comestible con tallos blancos y hojas verdes. También está en la ducha"
      ]
    },
    {
      letra: "b",
      palabra: ["bingo", "biberon", "botiquin"],
      estado: 0,
      preguntas:[
        "Juego que ha sacado de quicio a todos los 'Skylabers' en las sesiones de precurso",
        "Utensilio para la lactancia artificial que consiste en una botella pequeña con una tetina de goma",
        "Caja en la que se guardan medicinas"
      ]
    },
    {
      letra: "c",
      palabra: ["churumbel", "capo", "camilla"],
      estado: 0,
      preguntas: [
        "Niño, crío, bebé",
        "Jefe de la mafia, especialmente de narcotraficantes",
        "Cama en la que se llevan de un lado a otro heridos o enfermos"
      ]
    },
    {
      letra: "d",
      palabra: ["diarrea", "desodorante", "dedicatoria"],
      estado: 0,
      preguntas: [
        "Anormalidad en la función del aparato digestivo caracterizada por frecuentes evacuaciones y su consistencia líquida",
        "Producto que se utiliza para suprimir el olor corporal o de algún recinto",
        "Palabras que se escriben y se dicen como regalo a alguien"
      ]
    },
    {
      letra: "e",
      palabra: ["ectoplasma", "efimero", "empañar"],
      estado: 0,
      preguntas: [
        "Gelatinoso y se encuentra debajo de la membrana plasmática", 
        "Pasajero, de corta duración",
        "Mancharse un cristal con el vapor de agua"
      ]
    },
    {
      letra: "f",
      palabra: ["facil", "faja", "fabula"],
      estado: 0,
      preguntas: [
        "Que no requiere gran esfuerzo, capacidad o dificultad",
        "Prenda interior elástica que ciñe la cintura, o la cintura y las caderas",
        "Cuento en el que los personajes son animales, con el que se aprende algo a través de una moraleja"
      ]
    },
    {
      letra: "g",
      palabra: ["galaxia" , "gominola", "guisar"],
      estado: 0,
      preguntas:[
        "Conjunto enorme de estrellas, polvo interestelar, gases y partículas",
        "Golosina blanca masticable, generalmente recubierta de azúcar",
        "Preparar alimentos cocinándolos con calor"
      ]
    },
    {
      letra: "h",
      palabra: ["harakiri", "historia", "hamaca"],
      estado: 0,
      preguntas: [
        "Suicidio ritual japonés por desentrañamiento",
        "Conjunto de todos los hechos ocurridos en tiempos pasados",
        "Tela resistente que se cuelga de sus extremos y se utiliza como cama"
      ]
    },
    {
      letra: "i",
      palabra: ["iglesia", "ilves", "imperdible"],
      estado: 0,
      preguntas: [
        "Templo cristiano, casa de dios",
        "Apellido del político que fue presidente de Estonia entre los años 2006 y 2016",
        "Alfiler que se abrocha quedando su punta dentro de un gancho"
      ]
    },
    {
      letra: "j",
      palabra: ["jabali", "judion", "jinete"],
      estado: 0,
      preguntas: [
        "Variedad salvaje del cerdo, personaje de la película 'El Rey León', de nombre Pumba",
        "Variedad de judía de vainas anchas y semilla grande",
        "Persona que monta a caballo"
        
      ]
    },
    {
      letra: "l",
      palabra: ["linterna", "linaje", "litera"],
      estado: 0,
      preguntas: [
        "Aparato nomalmente de mano usado para alumbrar",
        "Ascendencia o descendencia de una familia, especialmente noble",
        "Mueble formado por dos camas puestas una encima de la otra"
      ]
    },
    {
      letra: "m",
      palabra: ["martillo", "madriguera", "mayonesa"],
      estado: 0,
      preguntas: [
        "Herramienta para golpear",
        "Cueva en la que habitan ciertos animales, especialmente los conejos",
        "Salsa que se hace batiendo huevo y aceite"
      ]
    },
    {
      letra: "n",
      palabra: ["necedad", "navato", "nuca"],
      estado: 0,
      preguntas: [
        "Demostración de poca inteligencia",
        "Espinazo de los vertebrados",
        "Parte posterior de la cabeza situada encima del cuello"
      ]
    },
    {
      letra: "ñ",
      palabra: ["señal", "acuñar", "teñir"],
      estado: 0,
      preguntas: [
        "Indicio que permite deducir algo de lo que no se tiene un conocimiento directo.",
        "Hacer o fabricar moneda",
        "Dar color al pelo con un tinte especial, permanente o que se va tras algunos lavados"
      ]
    },
    {
      letra: "o",
      palabra: ["ojo", "onirico", "orilla"],
      estado: 0,
      preguntas: [
        "Puedes cerrar uno y no pierdes el sentido",
        "Perteneciente o relativo a los sueños",
        "Borde del mar, de un lago o de un río"
      ]
    },
    {
      letra: "p",
      palabra: ["petardo", "piolet", "planchar"],
      estado: 0,
      preguntas: [
        "Usado en fiestas donde se usa para pirotecnia",
        "Instrumento con forma de pico que utilizan los alpinistas para asegurar sus movimientos sobre la nieve o el hielo",
        "Quitar las arrugar a una prenda"
      ]
    },
    {
      letra: "q",
      palabra: ["queso", "equilatero", "quitamanchas"],
      estado: 0,
      preguntas: [
        "Producto obtenido por la maduración de la cuajada de la leche",
        "Triángulo que tiene todos sus lados iguales",
        "Producto natural o preparado que sirve para quitar manchas"
      ]
    },
    { 
      letra: "r",
      palabra: ["raton","risaralda", "racimo"],
      estado: 0,
      preguntas: [
        "Roedor",
        "Departamento de Colombia con capital en la ciudad de Pereira",
        "Conjunto de uvas sostenidas en un mismo tallo"
      ]
    },
    {
      letra: "s",
      palabra: ["stackoverflow", "sentar", "sembrar"],
      estado: 0,
      preguntas: [
        "Comunidad salvadora de todo desarrollador informático",
        "Poner o colocar a alguien en una silla o banco, de manera que quede apoyado y descansando sobre las nalgas",
        "Enterrar semillas en la tierra para que crezcan"
      ]
    },
    {
      letra: "t",
      palabra: ["terminator", "tipi", "taburete"],
      estado: 0,
      preguntas: [
        "Película del director James Cameron que consolidó a Arnold Schwarzenegger como actor en 1984",
        "Tienda de piel de forma cónica que utilizaban como vivienda los indios de las praderas de América del Norte",
        "Asiento sin respaldo"
      ]
    },
    {
      letra: "u",
      palabra: ["unamuno", "unilateral", "untar"],
      estado: 0,
      preguntas: [
        "Escritor y filósofo español de la generación del 98 autor del libro 'Niebla' en 1914",
        "Que se refiere o se circunscribe solamente a una parte o a un aspecto de algo",
        "Extender mantequilla sobre una rebanada de pan"
      ]
    },
    {
      letra: "v",
      palabra: ["vikingos", "vilano", "vecino"],
      estado: 0,
      preguntas: [
        "Nombre dado a los miembros de los pueblos nórdicos originarios de Escandinavia, famosos por sus incursiones y pillajes en Europa",
        "Flor del cardo",
        "Persona que vive en el mismo barrio o edificio que otra"
      ]
    },
    {
      letra: "x",
      palabra: ["botox", "dux", "fenix"],
      estado: 0,
      preguntas: [
        "Toxina bacteriana utilizada en cirujía estética",
        "En las repúblicas de Venecia o Génova, príncipe o magistrado supremo",
        "Ave fabulosa que los antiguos creyeron que era única y renacía de sus cenizas"
      ]
    },
    {
      letra: "y",
      palabra: ["popeye", "ensayar", "yunque"],
      estado: 0,
      preguntas: [
        "Conocido por comer muchas espinacas",
        "Preparar el montaje y ejecución de un espectáculo antes de ofrecerlo al público",
        "Hueso que se encuentra dentro del oído, situado entre el martillo y el estribo"
      ]
    },
    {
      letra: "z",
      palabra: ["zen", "zumbado", "zumbido"],
      estado: 0,
      preguntas: [
        "Escuela de budismo que busca la experiencia de la sabiduría más allá del discurso racional",
        "Participio del verbo zumbar",
        "Sonido que producen algunos insectos como la abeja o el mosquito"
      ]
    },
  ];


let usuarios = [];

let letraEnJuego = {};

let usuarioEnJuego = {};

let roscoEnJuego;
    
let estadoRespuesta;

let isFullDonut = false;



const easterEgg = (estadoLetra, ...letrasNo) => {

    letras.forEach ((letra, i) => {
      
      if (!letrasNo.some(letraBusc => letraBusc === letra.letra)) {
        letras[i].estado = estadoLetra;
        donut.setLetterState(letra.letra, estadoLetra);
        
        if (estadoLetra === 2)
          usuarioEnJuego.acertados++;
        if (estadoLetra === 3)
          usuarioEnJuego.fallidos++;


      } else {
        letras[i].estado = 0;
        letraEnJuego = letras[i];
        letraEnJuego.indice = i;
      }
  });
  
  isEasterEgg = 0;
}

const clearDonut = () => {
  letras.forEach(letra => letra.estado = 0)
  letras[0].estado = 1;
  letraEnJuego = letras[0];
  letraEnJuego.indice = 0;
  isFullDonut = false;
}

const savePlayerInRanking = (usuario) => {
  usuarios.push(usuario);
}

const resetLetters = () => {
  letras.forEach((noUse, indice) => indice === 0 ? letras[0].estado = 1 : letras[indice].estado = 0);

  letraEnJuego = letras[0];
  letraEnJuego.indice = 0;
};

const donutSelection = () => {
  roscoEnJuego = level;
}
  
const showTurn = () => {

  donut.setLetterState(letraEnJuego.letra, 1);
  
  let text = (letraEnJuego.palabra[roscoEnJuego][0].toLowerCase() === letraEnJuego.letra ?
  " Con la " : " Contiene la ") + `"${letraEnJuego.letra.toUpperCase()}"`;
  setLetterPosition(text, false);
  
  setMessage(letraEnJuego.preguntas[roscoEnJuego], false);

  introTextBoxResponse.focus();
  
};

const nextletter = (estado) => {

  let indice = letraEnJuego.indice;

  switch (estado) {
    case "pasapalabra":
      letras[indice].estado = 0;
      break;
    case "acierto":
      letras[indice].estado = 2;
      break;
    case "fallo":
      letras[indice].estado = 3;
      break;
  }

  if (letras.every(letra => letra.estado > 1)) 
    isFullDonut = true;

  if (!isFullDonut) {
    do {
      if (letraEnJuego.letra === "z") {
        letraEnJuego = letras[0];
        letraEnJuego.indice = 0;
        indice = 0;
      } else {
        indice ++;
        letraEnJuego = letras[indice];
        letraEnJuego.indice = indice;
      }
    } while (letras[letraEnJuego.indice].estado !== 0)
  
    letras[letraEnJuego.indice].estado = 1;

    donut.setLetterState(letraEnJuego.letra, 1);
  }

};

const noooFaild = () => {
  setLetterPosition("noooo!",true);
  setMessage(
    letraEnJuego.preguntas[roscoEnJuego] +
    "...es: <span>" + letraEnJuego.palabra[roscoEnJuego].toUpperCase() + "</span>"
  , 1);
  hiddenShowButtonOk(true);
  hiddenShowAnswerBox(false);
};
  
const responseControl = (response) => {
  response = response.trim().toLowerCase();

  if (response === "pasapalabra" || response === "") {
    donut.setLetterState(letraEnJuego.letra, 0);    
    nextletter("pasapalabra");
    showTurn();
  }
  else {
    if (response === letraEnJuego.palabra[roscoEnJuego]) {
      usuarioEnJuego.acertados ++;
      donut.setLetterState(letraEnJuego.letra, 2);
      nextletter("acierto");
      if (isFullDonut) {
        fullDonut(); 
      }else {
        showTurn();
        counters.setHits(usuarioEnJuego.acertados);
      }
    }
    else {
      usuarioEnJuego.fallidos ++;
      counters.stopTimer();
      counters.blinking(true);
      donut.setLetterState(letraEnJuego.letra, 3);
      noooFaild();
    }
  }

};

const hitsCalculate = () => {
  usuarioEnJuego.tiempoSobrante = counters.time;
  usuarioEnJuego.puntuacion = usuarioEnJuego.tiempoSobrante === 0 ?
  (usuarioEnJuego.acertados * 10) :
  ((usuarioEnJuego.acertados * 10) * usuarioEnJuego.tiempoSobrante);
}

const fullDonut = () => {
  if (letras.every(letra => letra.estado === 2)){ 
    counters.stopTimer();
    counters.blinking(true);
    setLetterPosition("",false);
    savePlayerInRanking(usuarioEnJuego);
    setMessage("¡¡ ENHORABUENA !!", false);
    hiddenShowAnswerBox(false);
  } else {
    counters.stopTimer();
    endGame()
  }
}