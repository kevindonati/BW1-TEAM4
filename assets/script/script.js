//  POOL DOMANDE
const domande = {
  facile: [
    {
      domanda: "Chi ha diretto Titanic?",
      rispostaGiusta: "James Cameron",
      risposteSbagliate: ["Steven Spielberg", "Christopher Nolan", "Martin Scorsese"],
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
      risposteSbagliate: ["Steven Spielberg", "Christopher Nolan", "Martin Scorsese"],
      tipo: "risposta multipla",
    },
  ],
  medio: [
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
  ],
  difficile: [
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
  ],
}

// PESCA DOMANDE
// SALVO LE DOMANDE PESCATE IN QUESTO ARRAY, IN MODO CHE NON POSSANO USCIRE NUOVAMENTE
let domandePescate = []

// CONTEGGIO DOMANDA CORRENTE
let numeroDomandaCorrente = 1

// FUNZIONE CHE PERMETTE DI ESEGUIRE SOLO 10 DOMANDE
const checkNumeroDomande = () => {
  if (numeroDomandaCorrente > 11) {
    alert("TEST FINITO")
    // Reindirizza alla pagina dei risultati
    window.location.href = "pagina-risultati-risposte.html"
  }
}

// ESTRAZIONE DOMANDE

const estrazioneDomande = () => {
  // PESCO UNA DOMANDA
  const numeroCasualeFacile = Math.floor(Math.random() * domande.facile.length)
  const numeroCasualeMedio = Math.floor(Math.random() * domande.medio.length)
  const numeroCasualeDifficile = Math.floor(Math.random() * domande.difficile.length)

  // QUI è DOVE VA IL TESTO DELLA DOMANDA
  const h2 = document.getElementById("testo-domanda")
  h2.innerText = `${domande.facile[numeroCasualeFacile].domanda}`

  //   QUI ASSEGNO LE RISPOSTE AI BOTTONI
  const btn1 = document.getElementById("risposta-1")
  const btn2 = document.getElementById("risposta-2")
  const btn3 = document.getElementById("risposta-3")
  const btn4 = document.getElementById("risposta-4")

  if (domande.facile[numeroCasualeFacile].tipo === "risposta multipla") {
    btn1.innerText = `${domande.facile[numeroCasualeFacile].risposteSbagliate[1]}`
    btn2.innerText = `${domande.facile[numeroCasualeFacile].risposteSbagliate[0]}`
    btn3.classList.remove("no-display")
    btn4.classList.remove("no-display")
    btn3.innerText = `${domande.facile[numeroCasualeFacile].rispostaGiusta}`
    btn4.innerText = `${domande.facile[numeroCasualeFacile].risposteSbagliate[2]}`
  } else {
    btn1.innerText = `${domande.facile[numeroCasualeFacile].rispostaGiusta}`
    btn2.innerText = `${domande.facile[numeroCasualeFacile].risposteSbagliate}`
    btn3.classList.add("no-display")
    btn4.classList.add("no-display")
  }
  // AGGIORNAMENTO NUMERO DOMANDE BASE PAGINA

  questionsNum = document.querySelector("#numero-domande P")
  questionsNum.innerText = `QUESTION ${numeroDomandaCorrente}/10`
  numeroDomandaCorrente += 1

  checkNumeroDomande()
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

  const updateLinea = lineaCountdown - (tempoRimanente / tempoTimer) * lineaCountdown
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

const starsN = 10 // Numero di stelle desiderate

// Creazione dinamica linea delle stelle
const svgInjection = () => {
  let divStar = document.getElementById("stelline")

  for (let i = 0; i < starsN; i++) {
    divStar.innerHTML += divStar.innerHTML = `<span class="stelle" onclick="changeStyle(${i + 1})">
        <svg
          width="47"
          height="46"
          viewBox="0 0 47 46"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M22.2044 1.55551C22.6143 0.569963 24.0104 0.569964 24.4203 1.55552L29.9874 14.9402C30.1602 15.3557 30.5509 15.6396 30.9994 15.6756L45.4494 16.834C46.5134 16.9193 46.9448 18.2471 46.1341 18.9415L35.1248 28.3722C34.7831 28.6649 34.6338 29.1242 34.7382 29.5619L38.1018 43.6626C38.3494 44.7009 37.2199 45.5215 36.309 44.9651L23.9379 37.4089C23.5538 37.1743 23.0709 37.1743 22.6868 37.4089L10.3157 44.9651C9.40478 45.5215 8.27528 44.7009 8.52295 43.6626L11.8865 29.5619C11.9909 29.1242 11.8416 28.6649 11.4999 28.3722L0.490575 18.9415C-0.320069 18.2471 0.111362 16.9193 1.17535 16.834L15.6253 15.6756C16.0738 15.6396 16.4645 15.3557 16.6374 14.9402L22.2044 1.55551Z"
            fill="#00FFFF" />
        </svg>
      </span>`
  }
}
svgInjection()

// Prima stella già con fill scuro
const primaStella = document.querySelector("#stelline path")
primaStella.setAttribute("fill", "#202139")

// cicli per cambiare dinamicamente il fill delle stelle
const changeStyle = (n) => {
  const img = document.querySelectorAll("#stelline path")

  for (let i = 0; i < n; i++) {
    img[i].setAttribute("fill", "#202139")
  }
  for (let i = starsN - 1; i > n - 1; i--) {
    img[i].setAttribute("fill", "#00FFFF")
  }
}

// Gestione form

const formSubmit = (e) => {
  e.preventDefault()
}

const form = document.querySelector("form")
form.addEventListener("submit", formSubmit)
