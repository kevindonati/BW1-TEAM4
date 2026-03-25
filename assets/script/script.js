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
    {
      domanda: "Quale animale è il protagonista del film Ratatouille?",
      rispostaGiusta: "Un topo",
      risposteSbagliate: ["Un gatto", "Un cane", "Un criceto"],
      tipo: "risposta multipla",
    },
    {
      domanda: "Il film 'Lo Squalo' è stato diretto da Steven Spielberg?",
      rispostaGiusta: "Vero",
      risposteSbagliate: "Falso",
      tipo: "risposta booleana",
    },
    {
      domanda: "Chi è l'orco verde protagonista dell'omonimo film d'animazione?",
      rispostaGiusta: "Shrek",
      risposteSbagliate: ["Ciuchino", "Gatto con gli stivali", "Lord Farquaad"],
      tipo: "risposta multipla",
    },
    {
      domanda:
        "In 'Mamma, ho perso l'aereo', il protagonista viene dimenticato a casa durante le vacanze di Pasqua?",
      rispostaGiusta: "Falso",
      risposteSbagliate: "Vero",
      tipo: "risposta booleana",
    },
    {
      domanda: "Qual è la specialità culinaria preferita delle Tartarughe Ninja?",
      rispostaGiusta: "Pizza",
      risposteSbagliate: ["Sushi", "Hamburger", "Pasta"],
      tipo: "risposta multipla",
    },
    {
      domanda: "Il Grinch odia profondamente il Natale?",
      rispostaGiusta: "Vero",
      risposteSbagliate: "Falso",
      tipo: "risposta booleana",
    },
    {
      domanda: "Chi interpreta il pirata Jack Sparrow?",
      rispostaGiusta: "Johnny Depp",
      risposteSbagliate: ["Orlando Bloom", "Brad Pitt", "Tom Cruise"],
      tipo: "risposta multipla",
    },
    {
      domanda: "Woody e Buzz Lightyear sono i protagonisti di Toy Story?",
      rispostaGiusta: "Vero",
      risposteSbagliate: "Falso",
      tipo: "risposta booleana",
    },
    {
      domanda: "In quale città vive il supereroe Batman?",
      rispostaGiusta: "Gotham City",
      risposteSbagliate: ["Metropolis", "Central City", "New York"],
      tipo: "risposta multipla",
    },
    {
      domanda: "Cenerentola perde una scarpetta d'oro?",
      rispostaGiusta: "Falso",
      risposteSbagliate: "Vero",
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
    {
      domanda: "Quale attore interpreta il protagonista in 'The Truman Show'?",
      rispostaGiusta: "Jim Carrey",
      risposteSbagliate: ["Robin Williams", "Adam Sandler", "Ben Stiller"],
      tipo: "risposta multipla",
    },
    {
      domanda:
        "Il film 'La La Land' ha vinto l'Oscar come Miglior Film dopo un errore durante la premiazione?",
      rispostaGiusta: "Falso",
      risposteSbagliate: "Vero",
      tipo: "risposta booleana",
    },
    {
      domanda: "Chi ha diretto il film 'The Departed'?",
      rispostaGiusta: "Martin Scorsese",
      risposteSbagliate: ["Francis Ford Coppola", "Ridley Scott", "Brian De Palma"],
      tipo: "risposta multipla",
    },
    {
      domanda: "Joaquin Phoenix ha vinto l'Oscar per la sua interpretazione di Joker?",
      rispostaGiusta: "Vero",
      risposteSbagliate: "Falso",
      tipo: "risposta booleana",
    },
    {
      domanda: "In quale anno è ambientato il futuro di 'Ritorno al Futuro - Parte II'?",
      rispostaGiusta: "2015",
      risposteSbagliate: ["2010", "2020", "2025"],
      tipo: "risposta multipla",
    },
    {
      domanda: "Il film 'La Vita è Bella' di Benigni ha vinto 3 premi Oscar?",
      rispostaGiusta: "Vero",
      risposteSbagliate: "Falso",
      tipo: "risposta booleana",
    },
    {
      domanda: "Qual è il vero nome di Black Panther?",
      rispostaGiusta: "T'Challa",
      risposteSbagliate: ["Killmonger", "M'Baku", "Okoye"],
      tipo: "risposta multipla",
    },
    {
      domanda:
        "Il regista Wes Anderson è famoso per le sue inquadrature perfettamente simmetriche?",
      rispostaGiusta: "Vero",
      risposteSbagliate: "Falso",
      tipo: "risposta booleana",
    },
    {
      domanda: "Chi interpreta l'agente 007 nel film 'Skyfall'?",
      rispostaGiusta: "Daniel Craig",
      risposteSbagliate: ["Pierce Brosnan", "Roger Moore", "Sean Connery"],
      tipo: "risposta multipla",
    },
    {
      domanda: "Il primo film del Marvel Cinematic Universe (MCU) è stato Captain America?",
      rispostaGiusta: "Falso",
      risposteSbagliate: "Vero",
      tipo: "risposta booleana",
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
      domanda:
        "Quale attore ha interpretato il ruolo principale in 'Il petroliere' (There Will Be Blood)?",
      rispostaGiusta: "Daniel Day-Lewis",
      risposteSbagliate: ["Joaquin Phoenix", "Christian Bale", "Sean Penn"],
      tipo: "risposta multipla",
    },
    {
      domanda:
        "Il film 'Arancia Meccanica' è stato bandito dal Regno Unito per volere dello stesso Kubrick?",
      rispostaGiusta: "Vero",
      risposteSbagliate: "Falso",
      tipo: "risposta booleana",
    },
    {
      domanda: "Chi ha diretto il film 'Mulholland Drive'?",
      rispostaGiusta: "David Lynch",
      risposteSbagliate: ["David Cronenberg", "Darren Aronofsky", "Lars von Trier"],
      tipo: "risposta multipla",
    },
    {
      domanda: "La famosa scena della doccia in 'Psycho' contiene esattamente 100 inquadrature?",
      rispostaGiusta: "Falso",
      risposteSbagliate: "Vero",
      tipo: "risposta booleana",
    },
    {
      domanda:
        "In 'Bastardi senza gloria', qual è il soprannome del personaggio interpretato da Christoph Waltz?",
      rispostaGiusta: "Il cacciatore di ebrei",
      risposteSbagliate: ["L'orso ebreo", "Il boia di Berlino", "Il lupo delle SS"],
      tipo: "risposta multipla",
    },
    {
      domanda:
        "Il film 'Birdman' è stato girato interamente in un unico vero piano sequenza senza tagli digitali?",
      rispostaGiusta: "Falso",
      risposteSbagliate: "Vero",
      tipo: "risposta booleana",
    },
    {
      domanda: "Quale film ha vinto la prima Palma d'Oro al Festival di Cannes nel 1939?",
      rispostaGiusta: "Via col vento",
      risposteSbagliate: ["Il mago di Oz", "Ombre rosse", "Regole di gioco"],
      tipo: "risposta multipla",
    },
    {
      domanda: "Bong Joon-ho, regista di Parasite, ha diretto anche il film 'Snowpiercer'?",
      rispostaGiusta: "Vero",
      risposteSbagliate: "Falso",
      tipo: "risposta booleana",
    },
    {
      domanda: "Chi ha composto la colonna sonora del film 'Il Gladiatore' insieme a Lisa Gerrard?",
      rispostaGiusta: "Hans Zimmer",
      risposteSbagliate: ["John Williams", "James Horner", "Howard Shore"],
      tipo: "risposta multipla",
    },
    {
      domanda:
        "Il film 'Quarto Potere' di Orson Welles è ispirato alla vita di William Randolph Hearst?",
      rispostaGiusta: "Vero",
      risposteSbagliate: "Falso",
      tipo: "risposta booleana",
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
let indiceDomandePescate = []
// PARTENZA DI BASE DEL PUNTEGGIO
let punteggio = 0
// CONTEGGIO DOMANDA CORRENTE
let numeroDomandaCorrente = 1
// DIFFICOLTà BASE
// let difficoltà = "facile"

// FUNZIONE ESTRAZIONE DOMANDE

const estrazioneDomande = () => {
  // SELEZIONO BOTTONI
  const h2 = document.querySelector("#testo-domanda h2")
  const btn1 = document.getElementById("risposta-1")
  const btn2 = document.getElementById("risposta-2")
  const btn3 = document.getElementById("risposta-3")
  const btn4 = document.getElementById("risposta-4")
  const btnRisultati = document.querySelector("#numero-domande button")
  const containerTimer = document.querySelector(".timer-container")

  // RIMUOVO ELEMENTI APPENA PARTE LA PRIMA DOMANDA
  const formDifficoltà = document.getElementById("form-difficoltà")
  const pSpiegaione = document.getElementById("spiegazione-progressiva")
  formDifficoltà.innerHTML = ""
  pSpiegaione.innerHTML = ""

  // FINE QUIZ
  if (numeroDomandaCorrente > 10) {
    h2.innerText = `Controlla i tuoi risultati`
    btn1.classList.add("no-display")
    btn2.classList.add("no-display")
    btn3.classList.add("no-display")
    btn4.classList.add("no-display")
    btnRisultati.classList.remove("no-display")
    containerTimer.innerHTML = ""
    return
  }

  let isProgressiva

  if (difficoltà === "progressiva") {
    isProgressiva = true
    if (punteggio <= 3) {
      difficoltà = "facile"
    } else if (punteggio < 7) {
      difficoltà = "medio"
    } else {
      difficoltà = "difficile"
    }
  }

  // PESCO UNA DOMANDA
  const numeroCasualeDomande = Math.floor(Math.random() * domande[difficoltà].length)
  // CONTROLLO CHE NON SIA GIà USCITA
  if (indiceDomandePescate.includes(numeroCasualeDomande)) {
    return estrazioneDomande()
  }
  domandePescate.push(domande[difficoltà][numeroCasualeDomande])
  indiceDomandePescate.push(numeroCasualeDomande)
  console.log(indiceDomandePescate)

  // ASSEGNAZIONE DOMANDA ALL'H2 E RISPOSTE AI BOTTONI
  const domandaInBaseADifficoltà = domande[difficoltà][numeroCasualeDomande]
  // QUI è DOVE VA IL TESTO DELLA DOMANDA
  h2.innerText = domandaInBaseADifficoltà.domanda

  //   QUI ASSEGNO LE RISPOSTE AI BOTTONI
  if (domandaInBaseADifficoltà.tipo === "risposta multipla") {
    btn1.classList.remove("no-display")
    btn2.classList.remove("no-display")
    btn3.classList.remove("no-display")
    btn4.classList.remove("no-display")
    // MISCHIO LE RISPOSTE IN ORDINE CASUALE
    const risposteMischiate = [
      domandaInBaseADifficoltà.rispostaGiusta,
      ...domandaInBaseADifficoltà.risposteSbagliate,
    ].sort(() => Math.random() - 0.5)

    btn1.innerText = risposteMischiate[0]
    btn2.innerText = risposteMischiate[1]
    btn3.innerText = risposteMischiate[2]
    btn4.innerText = risposteMischiate[3]
  } else {
    btn1.classList.remove("no-display")
    btn2.classList.remove("no-display")
    btn1.innerText = domandaInBaseADifficoltà.rispostaGiusta
    btn2.innerText = domandaInBaseADifficoltà.risposteSbagliate
    btn3.classList.add("no-display")
    btn4.classList.add("no-display")
  }

  //   CONTROLLO SE RISPOSTA è GIUSTA E IN CASO ASSEGNO I PUNTI
  const risposta1 = document.getElementById("risposta-1")
  risposta1.onclick = function () {
    if (risposta1.innerText === domandaInBaseADifficoltà.rispostaGiusta) {
      punteggio += 1
    }
    estrazioneDomande()
    clearInterval(contoAllaRovescia)
    inizioContoRovescia()
  }

  const risposta2 = document.getElementById("risposta-2")
  risposta2.onclick = function () {
    if (risposta2.innerText === domandaInBaseADifficoltà.rispostaGiusta) {
      punteggio += 1
    }
    estrazioneDomande()
    clearInterval(contoAllaRovescia)
    inizioContoRovescia()
  }

  const risposta3 = document.getElementById("risposta-3")
  risposta3.onclick = function () {
    if (risposta3.innerText === domandaInBaseADifficoltà.rispostaGiusta) {
      punteggio += 1
    }
    estrazioneDomande()
    clearInterval(contoAllaRovescia)
    inizioContoRovescia()
  }

  const risposta4 = document.getElementById("risposta-4")
  risposta4.onclick = function () {
    if (risposta4.innerText === domandaInBaseADifficoltà.rispostaGiusta) {
      punteggio += 1
    }
    estrazioneDomande()
    clearInterval(contoAllaRovescia)
    inizioContoRovescia()
  }

  // AGGIORNAMENTO NUMERO DOMANDE BASE PAGINA

  const questionsNum = document.querySelector("#numero-domande P")
  questionsNum.innerText = `QUESTION ${numeroDomandaCorrente}/10`
  numeroDomandaCorrente += 1

  // inizioContoRovescia()
  if (isProgressiva) {
    difficoltà = "progressiva"
  }
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
  if (numeroDomandaCorrente > 9) return
  estrazioneDomande()
  inizioContoRovescia()

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
// inizioContoRovescia() //decommentare per vedere il timer partire

// SELEZIONA DIFFICOLTà E INIZIA IL QUIZ
const form = document.querySelector("#form-difficoltà")
const select = document.querySelector("#scelta")

form.addEventListener("submit", function (e) {
  e.preventDefault()
  difficoltà = select.value

  domandePescate = []
  punteggio = 0
  numeroDomandaCorrente = 1
  estrazioneDomande()
  // inizioContoRovescia()
})

// Gestione form

// const formSubmit = (e) => {
//   e.preventDefault()
// }

// GRAFICO

// CAMBIA PAGINA IN MOSTRA RISULTATI

const mostraRisultati = function () {
  const contenitore = document.getElementById("cambia-pagina")
  contenitore.innerHTML = ""
  contenitore.innerHTML = `<div class ="results-page"><header>
        <div class="logo">
          <img src="./assets/img/epicode_logo.png" />
        </div>
      </header>

      <main >
        <section class="titolo">
          <h1>Results</h1>
          <p>The summary of your answers:</p>
        </section>

        <section class="content">
          <div class="side side-left">
            <h2>Correct</h2>
            <div class="percent">${(punteggio / 10) * 100}%</div>
            <p>${punteggio}/10 questions</p>
          </div>

          <div class="grafico">
          <div class="chart-inner">
            <h3>Congratulations!</h3>
            <p class="highlight">You passed the exam.</p>
            <p>We'll send you the certificate in few minutes.</p>
            <p>Check your email (including promotions / spam folder)</p>
          </div>
            <canvas id="grafico-a-torta" style="width: 100%; max-width: 600px">
            </canvas>
          </div>

          <div class="side side-right">
            <h2>Wrong</h2>
            <div class="percent">${((10 - punteggio) / 10) * 100}%</div>
            <p>${10 - punteggio}/10 questions</p>
          </div>
        </section>

        <div class="button-wrapper">
          <a href="./paginafeedback.html"><button>RATE US</button></a>
        </div>
      </main>
      
      <section>
          <h2>Correzione domande</h2>
        </section>

        <section>
          <div>
            <h4>Corrette</h4>
            <h2>${punteggio}</h2>
          </div>
          <div>
            <h4>Sbagliate</h4>
            <h2>${10 - punteggio}</h2>
          </div>
          <div>
            <h4>Totali</h4>
            <h2>${10}</h2>
          </div>
        </section>

        <section id="box-domande-correzione">
        </section>
      </div>
      `
  riempiCorrezioneDomande()
}

const riempiCorrezioneDomande = () => {
  for (let x = 0; x < 10; x++) {
    const section = document.getElementById("box-domande-correzione")
    const div = document.createElement("div")
    const p = document.createElement("p")
    const i = document.createElement("i")
    const divRisultati = document.createElement("div")
    const pRisultati = document.createElement("p")
    section.appendChild(div)
    div.appendChild(p)
    div.appendChild(i)
    div.appendChild(divRisultati)
    divRisultati.appendChild(pRisultati)
    console.log(domandePescate[x].domanda)
    p.innerText = `Domanda ${x + 1}: ${domandePescate[x].domanda}`

    if (domandePescate[x].tipo === "risposta multipla") {
      divRisultati.innerHTML = `
      <ol>
        <li>${domandePescate[x].rispostaGiusta} <i class="fas fa-check"></i></li>
        <li>${domandePescate[x].risposteSbagliate[0]}</li>
        <li>${domandePescate[x].risposteSbagliate[1]}</li>
        <li>${domandePescate[x].risposteSbagliate[2]}</li>
      </ol>
   `
    } else {
      divRisultati.innerHTML = `
      <ol>
        <li>${domandePescate[x].rispostaGiusta} <i class="fas fa-check"></i></li>
        <li>${domandePescate[x].risposteSbagliate}</li>
      </ol>
   `
    }
  }
  // GRAFICO TORTA
  const xValues = ["Correct", "Wrong"]
  const yValues = [punteggio, 10 - punteggio]
  const barColors = ["#00ffff", "#d20094"]

  const ctx = document.getElementById("grafico-a-torta")

  new Chart(ctx, {
    type: "doughnut",
    data: {
      labels: xValues,
      datasets: [
        {
          backgroundColor: barColors,
          data: yValues,
          borderWidth: 0,
          cutout: "70%",
        },
      ],
    },
    options: {
      plugins: {
        legend: { display: false },
      },
    },
  })
}
