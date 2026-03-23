//  POOL DOMANDE

// DOMANDE FACILI

const poolDomandeFacile = [
  {
    domanda: "Chi ha diretto Titanic?",
    rispostaGiusta: "James Cameron",
    risposteSbagliate: [
      "Steven Spielberg",
      "Christopher Nolan",
      "Martin Scorsese",
    ],
  },
  {
    domanda: "Darth Vader è il padre di Luke Skywalker?",
    rispostaGiusta: "Vero",
    risposteSbagliate: "Falso",
  },
  {
    domanda: "In quale film compare il personaggio di Jack Sparrow?",
    rispostaGiusta: "Pirati dei Caraibi",
    risposteSbagliate: ["Il Signore degli Anelli", "Harry Potter", "Avatar"],
  },
  {
    domanda: "Avatar è ambientato sul pianeta Pandora?",
    rispostaGiusta: "Vero",
    risposteSbagliate: "Falso",
  },
  {
    domanda: "Chi interpreta Iron Man nel Marvel Cinematic Universe?",
    rispostaGiusta: "Robert Downey Jr.",
    risposteSbagliate: ["Chris Evans", "Chris Hemsworth", "Mark Ruffalo"],
  },
  {
    domanda: "Il Gladiatore ha vinto l’Oscar come miglior film?",
    rispostaGiusta: "Vero",
    risposteSbagliate: "Falso",
  },
  {
    domanda: "In quale film troviamo il personaggio di Forrest Gump?",
    rispostaGiusta: "Forrest Gump",
    risposteSbagliate: [
      "Steven Spielberg",
      "Christopher Nolan",
      "Martin Scorsese",
    ],
  },
]

// DOMANDE MEDIO

const poolDomandeMedio = [
  {
    domanda: "Quale di questi film è diretto da Christopher Nolan?",
    rispostaGiusta: "Inception",
    risposteSbagliate: ["Pulp Fiction", "Titanic", "Jurassic Park"],
  },
  {
    domanda: "Harry Potter e la Pietra Filosofale è il primo film della saga?",
    rispostaGiusta: "Vero",
    risposteSbagliate: "Falso",
  },
  {
    domanda: "Jurassic Park parla di dinosauri clonati?",
    rispostaGiusta: "Vero",
    risposteSbagliate: "Falso",
  },
  {
    domanda: "In The Avengers, chi è il leader del gruppo?",
    rispostaGiusta: "Captain America",
    risposteSbagliate: ["Iron Man", "Thor", "Hulk"],
  },
  {
    domanda: "Chi interpreta il protagonista in The Wolf of Wall Street?",
    rispostaGiusta: "Leonardo DiCaprio",
    risposteSbagliate: ["Brad Pitt", "Matt Damon", "Tom Cruise"],
  },
]

// DOMANDE DIFFICILE

const poolDomandeDifficile = [
  {
    domanda: "Chi ha diretto Pulp Fiction?",
    rispostaGiusta: "Quentin Tarantino",
    risposteSbagliate: ["Guy Ritchie", "David Fincher", "Ridley Scott"],
  },
  {
    domanda: "Fight Club è basato su un romanzo?",
    rispostaGiusta: "Vero",
    risposteSbagliate: "Falso",
  },
  {
    domanda:
      "The Truman Show racconta la storia di un uomo che sa di essere osservato da telecamere?",
    rispostaGiusta: "Falso",
    risposteSbagliate: "Vero",
  },
]

// ANIMAZIONE DEL TIMER

const tempoTimer = 10 // Durata del timer

let tempoRimanente = tempoTimer
let contoAllaRovescia

const numeriTimer = document.querySelector(".numeri-timer")
const progressoTimer = document.querySelector(".progresso-timer")
const lineaCountdown = 283 // numero per fare la diminuire la linea in maniera giusta

const updateCountdown = () => {
  // costante che cambia il numero e il colore della linea quando viene cambiata
  numeriTimer.innerText = tempoRimanente

  const updateLinea =
    lineaCountdown - (tempoRimanente / tempoTimer) * lineaCountdown
  progressoTimer.style.strokeDashoffset = updateLinea
  // Formula matematica che server per far diminure la linea in modo giusto. NON CHIEDERE mi fido di chi l'ha scritta
}

const tempoFinito = () => {
  alert("tempo scaduto!")
  // qui andranno inseriti i comportamenti di quello che succederà una volta che il timer sarà scaduto
} // alert che avverte che il timer è scaduto

const inizioContoRovescia = () => {
  tempoRimanente = tempoTimer
  updateCountdown()

  contoAllaRovescia = setInterval(() => {
    tempoRimanente--
    updateCountdown()

    if (tempoRimanente <= 0) {
      clearInterval(contoAllaRovescia)
      tempoFinito()
    }
  }, 1000) //setInterval è un medtodo che richiama la funzione ogni tot secondi. va per millisecondi, 1000 = 1 secondo
}

// window.addEventListener("load", inizioContoRovescia)
// inizioContoRovescia() decommentare per vedere il timer partire
