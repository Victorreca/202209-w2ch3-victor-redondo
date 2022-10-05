let wrong = 0;
let isPlaying = true;
let naturalEnd = false;
let index = 0;
let right = 0;
let goToRanking = false;
let ranking = [];
let duration = 0;
let user = "";
let timeIsOver = false;


const questions = [
    {
      letter: "a",
      answer: "abducir",
      status: 0,
      question:
        "CON LA A. Dicho de una supuesta criatura extraterrestre: Apoderarse de alguien",
    },
    {
      letter: "b",
      answer: "bingo",
      status: 0,
      question:
        "CON LA B. Juego que ha sacado de quicio a todos los 'Skylabers' en las sesiones de precurso",
    },
    {
      letter: "c",
      answer: "churumbel",
      status: 0,
      question: "CON LA C. Niño, crío, bebé",
    },
    {
      letter: "d",
      answer: "diarrea",
      status: 0,
      question:
        "CON LA D. Anormalidad en la función del aparato digestivo caracterizada por frecuentes evacuaciones y su consistencia líquida",
    },
    {
      letter: "e",
      answer: "ectoplasma",
      status: 0,
      question:
        "CON LA E. Gelatinoso y se encuentra debajo de la membrana plasmática. Los cazafantasmas medían su radiación",
    },
    {
      letter: "f",
      answer: "facil",
      status: 0,
      question: "CON LA F. Que no requiere gran esfuerzo, capacidad o dificultad",
    },
    {
      letter: "g",
      answer: "galaxia",
      status: 0,
      question:
        "CON LA G. Conjunto enorme de estrellas, polvo interestelar, gases y partículas",
    },
    {
      letter: "h",
      answer: "harakiri",
      status: 0,
      question: "CON LA H. Suicidio ritual japonés por desentrañamiento",
    },
    {
      letter: "i",
      answer: "iglesia",
      status: 0,
      question: "CON LA I. Templo cristiano",
    },
    {
      letter: "j",
      answer: "jabali",
      status: 0,
      question:
        "CON LA J. Variedad salvaje del cerdo que sale en la película 'El Rey León', de nombre Pumba",
    },
    {
      letter: "k",
      answer: "kamikaze",
      status: 0,
      question:
        "CON LA K. Persona que se juega la vida realizando una acción temeraria",
    },
    {
      letter: "l",
      answer: "licantropo",
      status: 0,
      question: "CON LA L. Hombre lobo",
    },
    {
      letter: "m",
      answer: "misantropo",
      status: 0,
      question:
        "CON LA M. Persona que huye del trato con otras personas o siente gran aversión hacia ellas",
    },
    {
      letter: "n",
      answer: "necedad",
      status: 0,
      question: "CON LA N. Demostración de poca inteligencia",
    },
    {
      letter: "ñ",
      answer: "señal",
      status: 0,
      question:
        "CONTIENE LA Ñ. Indicio que permite deducir algo de lo que no se tiene un conocimiento directo.",
    },
    {
      letter: "o",
      answer: "orco",
      status: 0,
      question:
        "CON LA O. Humanoide fantástico de apariencia terrible y bestial, piel de color verde creada por el escritor Tolkien",
    },
    {
      letter: "p",
      answer: "protoss",
      status: 0,
      question:
        "CON LA P. Raza ancestral tecnológicamente avanzada que se caracteriza por sus grandes poderes psíonicos del videojuego StarCraft",
    },
    {
      letter: "q",
      answer: "queso",
      status: 0,
      question:
        "CON LA Q. Producto obtenido por la maduración de la cuajada de la leche",
    },
    { letter: "r", answer: "raton", status: 0, question: "CON LA R. Roedor" },
    {
      letter: "s",
      answer: "stackoverflow",
      status: 0,
      question: "CON LA S. Comunidad salvadora de todo desarrollador informático",
    },
    {
      letter: "t",
      answer: "terminator",
      status: 0,
      question:
        "CON LA T. Película del director James Cameron que consolidó a Arnold Schwarzenegger como actor en 1984",
    },
    {
      letter: "u",
      answer: "unamuno",
      status: 0,
      question:
        "CON LA U. Escritor y filósofo español de la generación del 98 autor del libro 'Niebla' en 1914",
    },
    {
      letter: "v",
      answer: "vikingos",
      status: 0,
      question:
        "CON LA V. Nombre dado a los miembros de los pueblos nórdicos originarios de Escandinavia, famosos por sus incursiones y pillajes en Europa",
    },
    {
      letter: "w",
      answer: "sandwich",
      status: 0,
      question:
        "CONTIENE LA W. Emparedado hecho con dos rebanadas de pan entre las cuales se coloca jamón y queso",
    },
    {
      letter: "x",
      answer: "botox",
      status: 0,
      question: "CONTIENE LA X. Toxina bacteriana utilizada en cirujía estética",
    },
    {
      letter: "y",
      answer: "peyote",
      status: 0,
      question:
        "CONTIENE LA Y. Pequeño cáctus conocido por sus alcaloides psicoactivos utilizado de forma ritual y medicinal por indígenas americanos",
    },
    {
      letter: "z",
      answer: "zen",
      status: 0,
      question:
        "CON LA Z. Escuela de budismo que busca la experiencia de la sabiduría más allá del discurso racional",
    },
];

const getUserName = () =>{
    user = prompt(`Bienvenido al juego de Pasapalabra. \n ¿Nos puede indicar su nombre? `)
    if(user === null || user === ""){
        alert("⛔️ Escriba su nombre para continuar");
        return getUserName();
    }
    else{
        console.log(`Bienvenido ${user} al Pasapalabra`);
        if (user) {
            if(confirm(`El juego consiste en responder cada pregunta con la referencia de la letra para adivinar la palabra.
            Tendrás solo un intento para adivinar la respuesta y en caso de no saber la respuesta puedes decir "pasapalabra" y pasará a la siguiente pregunta y letra.
            Tienes 130 segundos para completar el rosco. En caso de no querer continuar jugando escribe END, te diremos el resultado pero no entrarás en el ranking.`))
            {
            // isPlaying = true;
            playPasapalabra();   
            } else {
            isPlaying = false;
            endGame();
            }
        }
    }
    return user;
};

const gameRules = () => {
    
};

const playPasapalabra = () => {
    time = startTimer();
    askQuestions();
    
    
  
   if(naturalEnd){
         endGame();
 }

  }



const askQuestions = () => {
  do {
      
    if(questions[index].status === 0){
        if (time < Date.now()) {
            alert("Se ha acabado el tiempo!!");
            timeIsOver = true;
            isPlaying = false;
            naturalEnd = true;
            goToRanking = true;
            endGame();
            
        }
        else {
       // si no está acertada
        let answer = prompt(questions[index].question);
          
        if(answer !== null){
            switch (answer.toLowerCase()) {
                case questions[index].answer:
                    alert("¡¡CORRECTO!!")
                    questions[index].status = 1;
                    right++;
                    break;
                    
                case "pasapalabra":
                    alert("La siguiente pregunta es:")
                    break;

                case "end":
                    isPlaying = false;
                    naturalEnd = true;
                    break;

                default:
                    alert(`Fallaste... La respuesta correcta era ${questions[index].answer}`)
                    questions[index].status = 2;
                    wrong++;
                    break;
            }
        continuePlaying();
        }
        else{
            isPlaying = false;
            endGame();
        }
    }
  
    }
  }
   while (isPlaying)

}

const continuePlaying = () => {
    if (questions.find(question => question.status === 0)) { // cambiado por some
      // si alguna respuesta con 0 es decir q ha indicado pasapalabra 
      // o no se ha contestado  
      index++
    }
    else {
        isPlaying = false;
        naturalEnd = true;
        goToRanking = true;
    }
    
    if (index > 26) {
        index = 0
    }
    
}

const endGame = () => {
    if (naturalEnd) {
        console.log(`${user} has conseguido ${right} aciertos y ${wrong} fallos.`);
        playAgain();

    }
    else {
        console.log("Esperemos que la próxima vez pueda acabar la partida.");
        playAgain();
    }
}

const playAgain = () => {

    if(goToRanking){
        
        let newPlayer = {};
        newPlayer.user = user;
        newPlayer.score = right;
        ranking.push(newPlayer);
        sortRanking();
    }
    showRanking()
    let continuePlaying = confirm("Deseamos que se haya divertido, quiere jugar de nuevo?");

    if (continuePlaying) {      
        resetVaribales();
        pasapalabra();

    }
    else {
        showRanking();
        console.log("Hasta la próxima!!");
        return;
    }
}

const sortRanking = () =>{
  ranking.sort((a, b) => b.score - a.score);
}

const showRanking = () => {
    let position = 1;
    console.log("***********************");
      console.log("Ranking Pasapalabra")
      console.log("***********************");
    ranking.forEach(ranking => {
      
      console.log(`Posición: ${position} | Jugador: ${ranking.user} | Aciertos: ${ranking.score}`)
      position++
    });

}
const resetVaribales = () => {
    questions.forEach(question => {
        question.status = 0;
    });
    user = "";
    difficulty = 0;
    duration = 0;
    index = 0;
    right = 0;
    wrong = 0;
    isPlaying = true;
    naturalEnd = false;
    goToRanking = false;
    timeIsOver = false;
}


const startTimer = () => {
    let seconds = 130000;
    const startTime = new Date().getTime(); //hora d inicio
    const endTime = startTime + seconds // hora final
    return endTime;
}


const pasapalabra = () => {
    
    getUserName();
    
}


pasapalabra();
