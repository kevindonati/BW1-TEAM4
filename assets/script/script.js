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
    tipo: "risposta multipla",
  },
  {
    domanda: "Darth Vader è il padre di Luke Skywalker?",
    rispostaGiusta: "Vero",
    risposteSbagliate: "Falso",
    tipo: "risposta booleana",
  },
  {
    domanda: "In quale film compare il personaggio di Jack Sparrow?",
    rispostaGiusta: "Pirati dei Caraibi",
    risposteSbagliate: ["Il Signore degli Anelli", "Harry Potter", "Avatar"],
    tipo: "risposta multipla",
  },
  {
    domanda: "Avatar è ambientato sul pianeta Pandora?",
    rispostaGiusta: "Vero",
    risposteSbagliate: "Falso",
    tipo: "risposta booleana",
  },
  {
    domanda: "Chi interpreta Iron Man nel Marvel Cinematic Universe?",
    rispostaGiusta: "Robert Downey Jr.",
    risposteSbagliate: ["Chris Evans", "Chris Hemsworth", "Mark Ruffalo"],
    tipo: "risposta multipla",
  },
  {
    domanda: "Il Gladiatore ha vinto l’Oscar come miglior film?",
    rispostaGiusta: "Vero",
    risposteSbagliate: "Falso",
    tipo: "risposta booleana",
  },
  {
    domanda: "In quale film troviamo il personaggio di Forrest Gump?",
    rispostaGiusta: "Forrest Gump",
    risposteSbagliate: [
      "Steven Spielberg",
      "Christopher Nolan",
      "Martin Scorsese",
    ],
    tipo: "risposta multipla",
  },
]

// DOMANDE MEDIO

const poolDomandeMedio = [
  {
    domanda: "Quale di questi film è diretto da Christopher Nolan?",
    rispostaGiusta: "Inception",
    risposteSbagliate: ["Pulp Fiction", "Titanic", "Jurassic Park"],
    tipo: "risposta multipla",
  },
  {
    domanda: "Harry Potter e la Pietra Filosofale è il primo film della saga?",
    rispostaGiusta: "Vero",
    risposteSbagliate: "Falso",
    tipo: "risposta booleana",
  },
  {
    domanda: "Jurassic Park parla di dinosauri clonati?",
    rispostaGiusta: "Vero",
    risposteSbagliate: "Falso",
    tipo: "risposta booleana",
  },
  {
    domanda: "In The Avengers, chi è il leader del gruppo?",
    rispostaGiusta: "Captain America",
    risposteSbagliate: ["Iron Man", "Thor", "Hulk"],
    tipo: "risposta multipla",
  },
  {
    domanda: "Chi interpreta il protagonista in The Wolf of Wall Street?",
    rispostaGiusta: "Leonardo DiCaprio",
    risposteSbagliate: ["Brad Pitt", "Matt Damon", "Tom Cruise"],
    tipo: "risposta multipla",
  },
]

// DOMANDE DIFFICILE

const poolDomandeDifficile = [
  {
    domanda: "Chi ha diretto Pulp Fiction?",
    rispostaGiusta: "Quentin Tarantino",
    risposteSbagliate: ["Guy Ritchie", "David Fincher", "Ridley Scott"],
    tipo: "risposta multipla",
  },
  {
    domanda: "Fight Club è basato su un romanzo?",
    rispostaGiusta: "Vero",
    risposteSbagliate: "Falso",
    tipo: "risposta booleana",
  },
  {
    domanda:
      "The Truman Show racconta la storia di un uomo che sa di essere osservato da telecamere?",
    rispostaGiusta: "Falso",
    risposteSbagliate: "Vero",
    tipo: "risposta booleana",
  },
]

// PESCA DOMANDE
// SALVO LE DOMANDE PESCATE IN QUESTO ARRAY, IN MODO CHE NON POSSANO USCIRE NUOVAMENTE
let domandePescate = []

// CONTEGGIO DOMANDA CORRENTE
let numeroDomandaCorrente = 1

// ESTRAZIONE DOMANDE

const estrazioneDomande = () => {
  // PESCO UNA DOMANDA
  const numeroCasualeFacile = Math.floor(
    Math.random() * poolDomandeFacile.length,
  )
  const numeroCasualeMedio = Math.floor(Math.random() * poolDomandeMedio.length)
  const numeroCasualeDifficile = Math.floor(
    Math.random() * poolDomandeDifficile.length,
  )

  // QUI è DOVE VA IL TESTO DELLA DOMANDA
  const h2 = document.getElementById("testo-domanda")
  h2.innerText = `${poolDomandeFacile[numeroCasualeFacile].domanda}`

  console.log(poolDomandeFacile[numeroCasualeFacile].risposteSbagliate.length)

  //   QUI ASSEGNO LE RISPOSTE AI BOTTONI
  const btn1 = document.getElementById("risposta-1")
  const btn2 = document.getElementById("risposta-2")
  const btn3 = document.getElementById("risposta-3")
  const btn4 = document.getElementById("risposta-4")

  if (poolDomandeFacile[numeroCasualeFacile].tipo === "risposta multipla") {
    btn1.innerText = `${poolDomandeFacile[numeroCasualeFacile].risposteSbagliate[1]}`
    btn2.innerText = `${poolDomandeFacile[numeroCasualeFacile].risposteSbagliate[0]}`
    btn3.classList.remove("no-display")
    btn4.classList.remove("no-display")
    btn3.innerText = `${poolDomandeFacile[numeroCasualeFacile].rispostaGiusta}`
    btn4.innerText = `${poolDomandeFacile[numeroCasualeFacile].risposteSbagliate[2]}`
  } else {
    btn1.innerText = `${poolDomandeFacile[numeroCasualeFacile].rispostaGiusta}`
    btn2.innerText = `${poolDomandeFacile[numeroCasualeFacile].risposteSbagliate}`
    btn3.classList.add("no-display")
    btn4.classList.add("no-display")
  }
  // AGGIORNAMENTO NUMERO DOMANDE BASE PAGINA

  questionsNum = document.querySelector("#numero-domande P")
  questionsNum.innerText = `QUESTION ${numeroDomandaCorrente}/10`
  numeroDomandaCorrente += 1
}

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

// Gestione form

const formSubmit = (e) => {
  e.preventDefault()
}

const form = document.querySelector("form")
form.addEventListener("submit", formSubmit)
