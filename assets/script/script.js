//  POOL DOMANDE
const domande = {
  facile: [
    {
      domanda: "Chi interpreta Jack Dawson nel film Titanic?",
      rispostaGiusta: "Leonardo DiCaprio",
      risposteSbagliate: ["Brad Pitt", "Tom Cruise", "Matt Damon"],
      tipo: "risposta multipla",
    },
    {
      domanda: "Qual è il nome del pupazzo di neve in Frozen?",
      rispostaGiusta: "Olaf",
      risposteSbagliate: ["Sven", "Kristoff", "Hans"],
      tipo: "risposta multipla",
    },
    {
      domanda: "I nani nel classico Disney di Biancaneve sono dieci?",
      rispostaGiusta: "Falso",
      risposteSbagliate: "Vero",
      tipo: "risposta booleana",
    },
    {
      domanda:
        "Quale supereroe è noto per il motto 'Da un grande potere derivano grandi responsabilità'?",
      rispostaGiusta: "Spider-Man",
      risposteSbagliate: ["Batman", "Superman", "Iron Man"],
      tipo: "risposta multipla",
    },
    {
      domanda: "In quale film i protagonisti seguono la 'strada di mattoni gialli'?",
      rispostaGiusta: "Il Mago di Oz",
      risposteSbagliate: ["Alice nel Paese delle Meraviglie", "Harry Potter", "Shrek"],
      tipo: "risposta multipla",
    },
    {
      domanda:
        "Come si chiama il capitano interpretato da Johnny Depp nella saga Pirati dei Caraibi?",
      rispostaGiusta: "Jack Sparrow",
      risposteSbagliate: ["Barbossa", "Davy Jones", "Will Turner"],
      tipo: "risposta multipla",
    },
    {
      domanda: "Quale pesce dà il nome a un famoso film Pixar del 2003?",
      rispostaGiusta: "Nemo",
      risposteSbagliate: ["Dory", "Marlin", "Bruce"],
      tipo: "risposta multipla",
    },
    {
      domanda: "Chi è il nemico giurato di Batman che ha le sembianze di un clown?",
      rispostaGiusta: "Joker",
      risposteSbagliate: ["Pinguino", "Enigmista", "Due Facce"],
      tipo: "risposta multipla",
    },
    {
      domanda: "In Harry Potter, Harry viene smistato nella casa Serpeverde?",
      rispostaGiusta: "Falso",
      risposteSbagliate: "Vero",
      tipo: "risposta booleana",
    },
    {
      domanda: "In Matrix, Neo sceglie la pillola rossa per scoprire la verità?",
      rispostaGiusta: "Vero",
      risposteSbagliate: "Falso",
      tipo: "risposta booleana",
    },
    {
      domanda: "Chi ha diretto il film E.T. l'extra-terrestre?",
      rispostaGiusta: "Steven Spielberg",
      risposteSbagliate: ["George Lucas", "James Cameron", "Ridley Scott"],
      tipo: "risposta multipla",
    },
    {
      domanda: "Quale attore interpreta Iron Man nel Marvel Cinematic Universe?",
      rispostaGiusta: "Robert Downey Jr.",
      risposteSbagliate: ["Chris Evans", "Chris Hemsworth", "Mark Ruffalo"],
      tipo: "risposta multipla",
    },
    {
      domanda: "Il leone protagonista de Il Re Leone si chiama Mufasa?",
      rispostaGiusta: "Falso",
      risposteSbagliate: "Vero",
      tipo: "risposta booleana",
    },
    {
      domanda: "Quale archeologo è famoso per la sua tecnica di combattimento con la frusta?",
      rispostaGiusta: "Indiana Jones",
      risposteSbagliate: ["Lara Croft", "Nathan Drake", "Rick O'Connell"],
      tipo: "risposta multipla",
    },
    {
      domanda: "In Guerre Stellari, Darth Vader rivela a Luke di essere suo padre?",
      rispostaGiusta: "Vero",
      risposteSbagliate: "Falso",
      tipo: "risposta booleana",
    },
  ],
  medio: [
    {
      domanda: "Chi ha diretto il film Pulp Fiction?",
      rispostaGiusta: "Quentin Tarantino",
      risposteSbagliate: ["Martin Scorsese", "Guy Ritchie", "David Fincher"],
      tipo: "risposta multipla",
    },
    {
      domanda: "In quale anno è uscito nelle sale il primo film della saga di Star Wars?",
      rispostaGiusta: "1977",
      risposteSbagliate: ["1975", "1980", "1983"],
      tipo: "risposta multipla",
    },
    {
      domanda:
        "Parasite è stato il primo film non in lingua inglese a vincere l'Oscar come Miglior Film?",
      rispostaGiusta: "Vero",
      risposteSbagliate: "Falso",
      tipo: "risposta booleana",
    },
    {
      domanda: "Chi interpreta il Joker nel film Il Cavaliere Oscuro di Christopher Nolan?",
      rispostaGiusta: "Heath Ledger",
      risposteSbagliate: ["Jared Leto", "Joaquin Phoenix", "Jack Nicholson"],
      tipo: "risposta multipla",
    },
    {
      domanda: "Qual è il nome dell'intelligenza artificiale in 2001: Odissea nello spazio?",
      rispostaGiusta: "HAL 9000",
      risposteSbagliate: ["JARVIS", "SKYNET", "DAVID"],
      tipo: "risposta multipla",
    },
    {
      domanda: "In quale città francese è ambientato il film Pixar Ratatouille?",
      rispostaGiusta: "Parigi",
      risposteSbagliate: ["Lione", "Marsiglia", "Nizza"],
      tipo: "risposta multipla",
    },
    {
      domanda: "Steven Spielberg ha diretto la trilogia de Il Signore degli Anelli?",
      rispostaGiusta: "Falso",
      risposteSbagliate: "Vero",
      tipo: "risposta booleana",
    },
    {
      domanda: "Per quale film Leonardo DiCaprio ha vinto il suo primo Oscar come Migliore Attore?",
      rispostaGiusta: "Revenant - Redivivo",
      risposteSbagliate: ["The Wolf of Wall Street", "Inception", "Titanic"],
      tipo: "risposta multipla",
    },
    {
      domanda: "Come si chiama l'hotel infestato del film Shining?",
      rispostaGiusta: "Overlook Hotel",
      risposteSbagliate: ["Bates Motel", "Continental", "Grand Budapest Hotel"],
      tipo: "risposta multipla",
    },
    {
      domanda: "Quale attrice interpreta Katniss Everdeen nella saga di Hunger Games?",
      rispostaGiusta: "Jennifer Lawrence",
      risposteSbagliate: ["Emma Watson", "Shailene Woodley", "Margot Robbie"],
      tipo: "risposta multipla",
    },
    {
      domanda: "Ennio Morricone ha composto la colonna sonora originale di Interstellar?",
      rispostaGiusta: "Falso",
      risposteSbagliate: "Vero",
      tipo: "risposta booleana",
    },
    {
      domanda: "In Inception, quale oggetto usa Cobb come 'totem'?",
      rispostaGiusta: "Una trottola",
      risposteSbagliate: ["Una moneta", "Un dado", "Una chiave"],
      tipo: "risposta multipla",
    },
    {
      domanda: "La Città Incantata dello Studio Ghibli ha vinto l'Oscar nel 2003?",
      rispostaGiusta: "Vero",
      risposteSbagliate: "Falso",
      tipo: "risposta booleana",
    },
    {
      domanda: "Chi interpreta il protagonista nel film Forrest Gump?",
      rispostaGiusta: "Tom Hanks",
      risposteSbagliate: ["Richard Gere", "Harrison Ford", "Kevin Costner"],
      tipo: "risposta multipla",
    },
    {
      domanda: "Qual è il nome della terra immaginaria in cui è ambientato Avatar?",
      rispostaGiusta: "Pandora",
      risposteSbagliate: ["Naboo", "Asgard", "Arrakis"],
      tipo: "risposta multipla",
    },
  ],
  difficile: [
    {
      domanda: "Qual è stato il primo lungometraggio animato a colori della storia (1937)?",
      rispostaGiusta: "Biancaneve e i sette nani",
      risposteSbagliate: ["Pinocchio", "Fantasia", "Bambi"],
      tipo: "risposta multipla",
    },
    {
      domanda: "Chi ha diretto il capolavoro del neorealismo italiano Ladri di biciclette?",
      rispostaGiusta: "Vittorio De Sica",
      risposteSbagliate: ["Federico Fellini", "Roberto Rossellini", "Luchino Visconti"],
      tipo: "risposta multipla",
    },
    {
      domanda: "Il protagonista di Casablanca si chiama Rick Blaine?",
      rispostaGiusta: "Vero",
      risposteSbagliate: "Falso",
      tipo: "risposta booleana",
    },
    {
      domanda: "Quale film detiene il record di 11 Oscar vinti, insieme a Ben-Hur e Titanic?",
      rispostaGiusta: "Il Signore degli Anelli - Il ritorno del re",
      risposteSbagliate: ["Via col vento", "West Side Story", "La lista di Schindler"],
      tipo: "risposta multipla",
    },
    {
      domanda: "Emmanuel Lubezki ha vinto 5 Oscar consecutivi per la fotografia?",
      rispostaGiusta: "Falso",
      risposteSbagliate: "Vero",
      tipo: "risposta booleana",
    },
    {
      domanda: "In quale film di Alfred Hitchcock la protagonista viene uccisa a metà pellicola?",
      rispostaGiusta: "Psycho",
      risposteSbagliate: ["La donna che visse due volte", "Gli uccelli", "La finestra sul cortile"],
      tipo: "risposta multipla",
    },
    {
      domanda: "Brad Pitt rifiutò il ruolo di Neo in Matrix prima di Keanu Reeves?",
      rispostaGiusta: "Falso",
      risposteSbagliate: "Vero",
      tipo: "risposta booleana",
    },
    {
      domanda: "Chi ha scritto la sceneggiatura di Quarto Potere insieme a Orson Welles?",
      rispostaGiusta: "Herman J. Mankiewicz",
      risposteSbagliate: ["Billy Wilder", "John Huston", "Howard Hawks"],
      tipo: "risposta multipla",
    },
    {
      domanda: "Qual è l'ultimo film completato da Stanley Kubrick prima della sua morte?",
      rispostaGiusta: "Eyes Wide Shut",
      risposteSbagliate: ["Full Metal Jacket", "Shining", "Arancia Meccanica"],
      tipo: "risposta multipla",
    },
    {
      domanda: "Come si chiama il protagonista del film Memento?",
      rispostaGiusta: "Leonard Shelby",
      risposteSbagliate: ["Teddy Gammell", "John Doe", "Guy Pearce"],
      tipo: "risposta multipla",
    },
    {
      domanda: "Il primo Festival del Cinema di Venezia si è svolto nel 1950?",
      rispostaGiusta: "Falso",
      risposteSbagliate: "Vero",
      tipo: "risposta booleana",
    },
    {
      domanda: "Chi interpreta il ruolo di 'Il Brutto' (Tuco) ne Il buono, il brutto, il cattivo?",
      rispostaGiusta: "Eli Wallach",
      risposteSbagliate: ["Clint Eastwood", "Lee Van Cleef", "Gian Maria Volonté"],
      tipo: "risposta multipla",
    },
    {
      domanda: "Qual è il titolo del primo film sonoro della storia (1927)?",
      rispostaGiusta: "Il cantante di jazz",
      risposteSbagliate: ["Luci della città", "Metropolis", "Il gabinetto del dottor Caligari"],
      tipo: "risposta multipla",
    },
    {
      domanda:
        "Meryl Streep detiene il record assoluto per il maggior numero di Oscar vinti come attrice?",
      rispostaGiusta: "Falso",
      risposteSbagliate: "Vero",
      tipo: "risposta booleana",
    },
    {
      domanda: "Il film I Sette Samurai di Kurosawa ha ispirato I magnifici sette?",
      rispostaGiusta: "Vero",
      risposteSbagliate: "Falso",
      tipo: "risposta booleana",
    },
  ],
}

// SALVO LE DOMANDE PESCATE IN QUESTO ARRAY, IN MODO CHE NON POSSANO USCIRE NUOVAMENTE
let domandePescate = []
// DIFFICOLTà DOMANDE (BISOGNA AGGIUNGERE INPUT CHE FA SELEZIONARE DIFFICOLTà)
let difficoltà = "facile"
// PARTENZA DI BASE DEL PUNTEGGIO
let punteggio = 0
// CONTEGGIO DOMANDA CORRENTE
let numeroDomandaCorrente = 1

// FUNZIONE ESTRAZIONE DOMANDE

const estrazioneDomande = () => {
  // SELEZIONO BOTTONI
  const btn1 = document.getElementById("risposta-1")
  const btn2 = document.getElementById("risposta-2")
  const btn3 = document.getElementById("risposta-3")
  const btn4 = document.getElementById("risposta-4")

  // FINE QUIZ
  if (numeroDomandaCorrente > 10) {
    // MESSO ALERT MOMENTANEAMENTE, VEDIAMO POI COSA AGGIUNGERCI
    alert(`Quiz finito! Punteggio: ${punteggio}/10`)
    return
  }

  // PESCO UNA DOMANDA
  const numeroCasualeDomande = Math.floor(Math.random() * domande[difficoltà].length)
  // CONTROLLO CHE NON SIA GIà USCITA
  if (domandePescate.includes(numeroCasualeDomande)) {
    return estrazioneDomande()
  }
  domandePescate.push(numeroCasualeDomande)

  // ASSEGNAZIONE DOMANDA ALL'H2 E RISPOSTE AI BOTTONI
  if (difficoltà === "facile") {
    // QUI è DOVE VA IL TESTO DELLA DOMANDA
    const h2 = document.getElementById("testo-domanda")
    h2.innerText = `${domande.facile[numeroCasualeDomande].domanda}`

    //   QUI ASSEGNO LE RISPOSTE AI BOTTONI
    if (domande.facile[numeroCasualeDomande].tipo === "risposta multipla") {
      btn1.innerText = `${domande.facile[numeroCasualeDomande].risposteSbagliate[1]}`
      btn2.innerText = `${domande.facile[numeroCasualeDomande].risposteSbagliate[0]}`
      btn3.classList.remove("no-display")
      btn4.classList.remove("no-display")
      btn3.innerText = `${domande.facile[numeroCasualeDomande].rispostaGiusta}`
      btn4.innerText = `${domande.facile[numeroCasualeDomande].risposteSbagliate[2]}`
    } else {
      btn1.innerText = `${domande.facile[numeroCasualeDomande].rispostaGiusta}`
      btn2.innerText = `${domande.facile[numeroCasualeDomande].risposteSbagliate}`
      btn3.classList.add("no-display")
      btn4.classList.add("no-display")
    }

    //   CONTROLLO SE RISPOSTA è GIUSTA E IN CASO ASSEGNO I PUNTI
    const risposta1 = document.getElementById("risposta-1")
    risposta1.onclick = function () {
      if (risposta1.innerText === domande.facile[numeroCasualeDomande].rispostaGiusta) {
        punteggio += 1
        console.log(punteggio)
      }
    }

    const risposta2 = document.getElementById("risposta-2")
    risposta2.onclick = function () {
      if (risposta2.innerText === domande.facile[numeroCasualeDomande].rispostaGiusta) {
        punteggio += 1
        console.log(punteggio)
      }
    }

    const risposta3 = document.getElementById("risposta-3")
    risposta3.onclick = function () {
      if (risposta3.innerText === domande.facile[numeroCasualeDomande].rispostaGiusta) {
        punteggio += 1
        console.log(punteggio)
      }
    }

    const risposta4 = document.getElementById("risposta-4")
    risposta4.onclick = function () {
      if (risposta4.innerText === domande.facile[numeroCasualeDomande].rispostaGiusta) {
        punteggio += 1
        console.log(punteggio)
      }
    }
  }

  // AGGIORNAMENTO NUMERO DOMANDE BASE PAGINA

  const questionsNum = document.querySelector("#numero-domande P")
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
