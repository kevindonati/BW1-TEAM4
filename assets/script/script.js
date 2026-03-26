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
      domanda:
        "In quale film i protagonisti seguono la 'strada di mattoni gialli'?",
      rispostaGiusta: "Il Mago di Oz",
      risposteSbagliate: [
        "Alice nel Paese delle Meraviglie",
        "Harry Potter",
        "Shrek",
      ],
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
      domanda:
        "Chi è il nemico giurato di Batman che ha le sembianze di un clown?",
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
      domanda:
        "In Matrix, Neo sceglie la pillola rossa per scoprire la verità?",
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
      domanda:
        "Quale attore interpreta Iron Man nel Marvel Cinematic Universe?",
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
      domanda:
        "Quale archeologo è famoso per la sua tecnica di combattimento con la frusta?",
      rispostaGiusta: "Indiana Jones",
      risposteSbagliate: ["Lara Croft", "Nathan Drake", "Rick O'Connell"],
      tipo: "risposta multipla",
    },
    {
      domanda:
        "In Guerre Stellari, Darth Vader rivela a Luke di essere suo padre?",
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
      domanda:
        "Chi è l'orco verde protagonista dell'omonimo film d'animazione?",
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
      domanda:
        "Qual è la specialità culinaria preferita delle Tartarughe Ninja?",
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
      domanda:
        "In quale anno è uscito nelle sale il primo film della saga di Star Wars?",
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
      domanda:
        "Chi interpreta il Joker nel film Il Cavaliere Oscuro di Christopher Nolan?",
      rispostaGiusta: "Heath Ledger",
      risposteSbagliate: ["Jared Leto", "Joaquin Phoenix", "Jack Nicholson"],
      tipo: "risposta multipla",
    },
    {
      domanda:
        "Qual è il nome dell'intelligenza artificiale in 2001: Odissea nello spazio?",
      rispostaGiusta: "HAL 9000",
      risposteSbagliate: ["JARVIS", "SKYNET", "DAVID"],
      tipo: "risposta multipla",
    },
    {
      domanda:
        "In quale città francese è ambientato il film Pixar Ratatouille?",
      rispostaGiusta: "Parigi",
      risposteSbagliate: ["Lione", "Marsiglia", "Nizza"],
      tipo: "risposta multipla",
    },
    {
      domanda:
        "Steven Spielberg ha diretto la trilogia de Il Signore degli Anelli?",
      rispostaGiusta: "Falso",
      risposteSbagliate: "Vero",
      tipo: "risposta booleana",
    },
    {
      domanda:
        "Per quale film Leonardo DiCaprio ha vinto il suo primo Oscar come Migliore Attore?",
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
      domanda:
        "Quale attrice interpreta Katniss Everdeen nella saga di Hunger Games?",
      rispostaGiusta: "Jennifer Lawrence",
      risposteSbagliate: ["Emma Watson", "Shailene Woodley", "Margot Robbie"],
      tipo: "risposta multipla",
    },
    {
      domanda:
        "Ennio Morricone ha composto la colonna sonora originale di Interstellar?",
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
      domanda:
        "La Città Incantata dello Studio Ghibli ha vinto l'Oscar nel 2003?",
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
      domanda:
        "Qual è il nome della terra immaginaria in cui è ambientato Avatar?",
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
      risposteSbagliate: [
        "Francis Ford Coppola",
        "Ridley Scott",
        "Brian De Palma",
      ],
      tipo: "risposta multipla",
    },
    {
      domanda:
        "Joaquin Phoenix ha vinto l'Oscar per la sua interpretazione di Joker?",
      rispostaGiusta: "Vero",
      risposteSbagliate: "Falso",
      tipo: "risposta booleana",
    },
    {
      domanda:
        "In quale anno è ambientato il futuro di 'Ritorno al Futuro - Parte II'?",
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
      domanda:
        "Il primo film del Marvel Cinematic Universe (MCU) è stato Captain America?",
      rispostaGiusta: "Falso",
      risposteSbagliate: "Vero",
      tipo: "risposta booleana",
    },
  ],
  difficile: [
    {
      domanda:
        "Qual è stato il primo lungometraggio animato a colori della storia (1937)?",
      rispostaGiusta: "Biancaneve e i sette nani",
      risposteSbagliate: ["Pinocchio", "Fantasia", "Bambi"],
      tipo: "risposta multipla",
    },
    {
      domanda:
        "Chi ha diretto il capolavoro del neorealismo italiano Ladri di biciclette?",
      rispostaGiusta: "Vittorio De Sica",
      risposteSbagliate: [
        "Federico Fellini",
        "Roberto Rossellini",
        "Luchino Visconti",
      ],
      tipo: "risposta multipla",
    },
    {
      domanda: "Il protagonista di Casablanca si chiama Rick Blaine?",
      rispostaGiusta: "Vero",
      risposteSbagliate: "Falso",
      tipo: "risposta booleana",
    },
    {
      domanda:
        "Quale film detiene il record di 11 Oscar vinti, insieme a Ben-Hur e Titanic?",
      rispostaGiusta: "Il Signore degli Anelli - Il ritorno del re",
      risposteSbagliate: [
        "Via col vento",
        "West Side Story",
        "La lista di Schindler",
      ],
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
      risposteSbagliate: [
        "David Cronenberg",
        "Darren Aronofsky",
        "Lars von Trier",
      ],
      tipo: "risposta multipla",
    },
    {
      domanda:
        "La famosa scena della doccia in 'Psycho' contiene esattamente 100 inquadrature?",
      rispostaGiusta: "Falso",
      risposteSbagliate: "Vero",
      tipo: "risposta booleana",
    },
    {
      domanda:
        "In 'Bastardi senza gloria', qual è il soprannome del personaggio interpretato da Christoph Waltz?",
      rispostaGiusta: "Il cacciatore di ebrei",
      risposteSbagliate: [
        "L'orso ebreo",
        "Il boia di Berlino",
        "Il lupo delle SS",
      ],
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
      domanda:
        "Quale film ha vinto la prima Palma d'Oro al Festival di Cannes nel 1939?",
      rispostaGiusta: "Via col vento",
      risposteSbagliate: ["Il mago di Oz", "Ombre rosse", "Regole di gioco"],
      tipo: "risposta multipla",
    },
    {
      domanda:
        "Bong Joon-ho, regista di Parasite, ha diretto anche il film 'Snowpiercer'?",
      rispostaGiusta: "Vero",
      risposteSbagliate: "Falso",
      tipo: "risposta booleana",
    },
    {
      domanda:
        "Chi ha composto la colonna sonora del film 'Il Gladiatore' insieme a Lisa Gerrard?",
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
      domanda:
        "Emmanuel Lubezki ha vinto 5 Oscar consecutivi per la fotografia?",
      rispostaGiusta: "Falso",
      risposteSbagliate: "Vero",
      tipo: "risposta booleana",
    },
    {
      domanda:
        "In quale film di Alfred Hitchcock la protagonista viene uccisa a metà pellicola?",
      rispostaGiusta: "Psycho",
      risposteSbagliate: [
        "La donna che visse due volte",
        "Gli uccelli",
        "La finestra sul cortile",
      ],
      tipo: "risposta multipla",
    },
    {
      domanda:
        "Brad Pitt rifiutò il ruolo di Neo in Matrix prima di Keanu Reeves?",
      rispostaGiusta: "Falso",
      risposteSbagliate: "Vero",
      tipo: "risposta booleana",
    },
    {
      domanda:
        "Chi ha scritto la sceneggiatura di Quarto Potere insieme a Orson Welles?",
      rispostaGiusta: "Herman J. Mankiewicz",
      risposteSbagliate: ["Billy Wilder", "John Huston", "Howard Hawks"],
      tipo: "risposta multipla",
    },
    {
      domanda:
        "Qual è l'ultimo film completato da Stanley Kubrick prima della sua morte?",
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
      domanda:
        "Chi interpreta il ruolo di 'Il Brutto' (Tuco) ne Il buono, il brutto, il cattivo?",
      rispostaGiusta: "Eli Wallach",
      risposteSbagliate: [
        "Clint Eastwood",
        "Lee Van Cleef",
        "Gian Maria Volonté",
      ],
      tipo: "risposta multipla",
    },
    {
      domanda: "Qual è il titolo del primo film sonoro della storia (1927)?",
      rispostaGiusta: "Il cantante di jazz",
      risposteSbagliate: [
        "Luci della città",
        "Metropolis",
        "Il gabinetto del dottor Caligari",
      ],
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
      domanda:
        "Il film I Sette Samurai di Kurosawa ha ispirato I magnifici sette?",
      rispostaGiusta: "Vero",
      risposteSbagliate: "Falso",
      tipo: "risposta booleana",
    },
  ],
}

// IMPOSTO LA SECONDA PARTE DI OGNI DOMANDA IN GRASSETTO
for (let livello in domande) {
  // ARRAY PRINCIPALE
  let listaDomande = domande[livello]

  for (let i = 0; i < listaDomande.length; i++) {
    // RIFERIMENTO ALLA DOMANDA CORRENTE
    let singolaDomanda = listaDomande[i]
    let testoIniziale = singolaDomanda.domanda

    // LA DOMANDA VIENE DIVISA PAROLA PER PAROLA
    let parole = testoIniziale.split(" ")
    // METÀ ESATTA DI OGNI DOMANDA
    let meta = Math.ceil(parole.length / 2)

    // IL TESTO DELLA SECONDA PARTE DELLA DOMANDA DIVENTA IN GRASSETTO
    let primaParte = parole.slice(0, meta).join(" ")
    let secondaParte = parole.slice(meta).join(" ")
    singolaDomanda.domanda =
      primaParte +
      "<span class='text-bold' style='display:block; margin-top:10px;'>" +
      secondaParte +
      "</span>"
  }
}

// SALVO LE DOMANDE PESCATE IN QUESTO ARRAY, PER POTERLE USARE DOPO NELLA COREZIONE
let domandePescate = []
// SALVO INDICE DELLE DOMANDE PESCATE IN QUESTO ARRAY, IN MODO CHE NON POSSANO USCIRE NUOVAMENTE
let indiceDomandePescate = []
// PARTENZA DI BASE DEL PUNTEGGIO
let punteggio = 0
// CONTEGGIO DOMANDA CORRENTE
let numeroDomandaCorrente = 1
// DIFFICOLTÀ  BASE
// LET DIFFICOLTÀ = "FACILE"

// FUNZIONE ESTRAZIONE DOMANDE
const estrazioneDomande = () => {
  // SELEZIONO TUTTI GLI ELEMENTI CHE MI SERVONO
  const h2 = document.querySelector("#testo-domanda h2")
  const btn1 = document.getElementById("risposta-1")
  const btn2 = document.getElementById("risposta-2")
  const btn3 = document.getElementById("risposta-3")
  const btn4 = document.getElementById("risposta-4")
  const btnNext = document.getElementById("prossima-domanda")
  const btnRisultati = document.querySelector("#numero-domande button")
  const containerTimer = document.querySelector(".timer-container")
  const pNumeroDomande = document.getElementById("question-count")
  const divForm = document.getElementById("contenitore-form-bottoni")
  const formDifficoltà = document.getElementById("form-difficoltà")
  const pSpiegaione = document.getElementById("spiegazione-progressiva")

  // RIMUOVO ELEMENTI APPENA PARTE LA PRIMA DOMANDA
  formDifficoltà.innerHTML = ""
  pSpiegaione.innerHTML = ""

  // COSA SUCCEDE DOPO L'ULTIMA DOMANDA
  // NASCONDO IL FORM CON I BOTTONI E FACCIO USCIRE BOTTONE PER VEDERE RISULTATI
  if (numeroDomandaCorrente > 10) {
    h2.innerText = `Controlla i tuoi risultati`
    divForm.classList.add("no-display")
    btnRisultati.classList.remove("no-display")
    pNumeroDomande.classList.add("no-display")
    containerTimer.innerHTML = ""
    return
  }

  // MODALITà PROGRESSIVA
  let isProgressiva
  if (difficoltà === "progressiva") {
    isProgressiva = true
    if (punteggio < 3) {
      difficoltà = "facile"
    } else if (punteggio < 7) {
      difficoltà = "medio"
    } else {
      difficoltà = "difficile"
    }
  }

  // ESTRAE INDICE DELLA DOMADA
  const numeroCasualeDomande = Math.floor(
    Math.random() * domande[difficoltà].length,
  )
  // CONTROLLO CHE NON SIA GIÀ USCITA
  if (indiceDomandePescate.includes(numeroCasualeDomande)) {
    return estrazioneDomande()
  }

  // METTO L'INDICE DENTRO IL SUO ARRAY, E DOMANDA DENTRO IL. SUO ARRAY
  domandePescate.push(domande[difficoltà][numeroCasualeDomande])
  indiceDomandePescate.push(numeroCasualeDomande)
  console.log(indiceDomandePescate)

  // TROVO L'OGGETTO DELLA DOMANDA ESTRATTA
  const oggettoDomandaEstratta = domande[difficoltà][numeroCasualeDomande]
  // ASSEGNO LA DOMANDA DALL'OGGETTO TROVATO SOPRA
  h2.innerHTML = oggettoDomandaEstratta.domanda

  // FACCIO APPARRIRE CONTEGGIO DOMANDE E FORM CON BOTTONI
  pNumeroDomande.classList.remove("no-display")
  divForm.classList.remove("no-display")
  // CENTRO IL TESTO DELLA DOMANDA
  h2.style.textAlign = "center"

  //   QUI ASSEGNO LE RISPOSTE AI BOTTONI
  if (oggettoDomandaEstratta.tipo === "risposta multipla") {
    btn1.classList.remove("no-display")
    btn2.classList.remove("no-display")
    btn3.classList.remove("no-display")
    btn4.classList.remove("no-display")
    // MISCHIO LE RISPOSTE IN ORDINE CASUALE
    const risposteMischiate = [
      oggettoDomandaEstratta.rispostaGiusta,
      ...oggettoDomandaEstratta.risposteSbagliate,
    ].sort(() => Math.random() - 0.5)

    btn1.innerText = risposteMischiate[0]
    btn2.innerText = risposteMischiate[1]
    btn3.innerText = risposteMischiate[2]
    btn4.innerText = risposteMischiate[3]
  } else {
    btn1.classList.remove("no-display")
    btn2.classList.remove("no-display")
    btn1.innerText = oggettoDomandaEstratta.rispostaGiusta
    btn2.innerText = oggettoDomandaEstratta.risposteSbagliate
    btn3.classList.add("no-display")
    btn4.classList.add("no-display")
  }

  //  CONTROLLO SE LA RISPOSTA È GIUSTA E IN CASO ASSEGNO I PUNTI.
  // SE è GIUSTA DIVENTA VERDE, AALTRIMENTI ROSSA
  const risposta1 = document.getElementById("risposta-1")
  risposta1.onclick = function () {
    if (risposta1.innerText === oggettoDomandaEstratta.rispostaGiusta) {
      punteggio += 1
      btn1.classList.add("risposta-corretta")
    } else {
      btn1.classList.add("risposta-errata")
    }
    //  DISABILITO TUTTI I BOTTONI PER EVITARE ALTRI CLICK
    btn1.setAttribute("disabled", "")
    btn2.setAttribute("disabled", "")
    btn3.setAttribute("disabled", "")
    btn4.setAttribute("disabled", "")
    // MOSTRO IL BOTTONE PROSSIMA DOMANDA
    btnNext.classList.remove("no-display")

    // CONTROLLO TUTTE LE RISPOSTE ED EVIDENZIO LA RISPOSTA CORRETTA
    if (btn2.innerText === oggettoDomandaEstratta.rispostaGiusta) {
      btn2.classList.add("risposta-corretta")
    } else if (btn3.innerText === oggettoDomandaEstratta.rispostaGiusta) {
      btn3.classList.add("risposta-corretta")
    } else if (btn4.innerText === oggettoDomandaEstratta.rispostaGiusta) {
      btn4.classList.add("risposta-corretta")
    }
    // FERMO IL TIMER QUANDO L'UTENTE RISPONDE (PULSANTE CLICCATO)
    clearInterval(contoAllaRovescia)
  }

  //  CONTROLLO SE LA RISPOSTA È GIUSTA E IN CASO ASSEGNO I PUNTI
  // SE è GIUSTA DIVENTA VERDE, AALTRIMENTI ROSSA
  const risposta2 = document.getElementById("risposta-2")
  risposta2.onclick = function () {
    if (risposta2.innerText === oggettoDomandaEstratta.rispostaGiusta) {
      punteggio += 1
      btn2.classList.add("risposta-corretta")
      console.log("cioa")
    } else {
      btn2.classList.add("risposta-errata")
    }
    //  DISABILITO TUTTI I BOTTONI PER EVITARE ALTRI CLICK
    btn1.setAttribute("disabled", "")
    btn2.setAttribute("disabled", "")
    btn3.setAttribute("disabled", "")
    btn4.setAttribute("disabled", "")
    btnNext.classList.remove("no-display")

    // CONTROLLO TUTTE LE RISPOSTE ED EVIDENZIO LA RISPOSTA CORRETTA
    if (btn1.innerText === oggettoDomandaEstratta.rispostaGiusta) {
      btn1.classList.add("risposta-corretta")
    } else if (btn3.innerText === oggettoDomandaEstratta.rispostaGiusta) {
      btn3.classList.add("risposta-corretta")
    } else if (btn4.innerText === oggettoDomandaEstratta.rispostaGiusta) {
      btn4.classList.add("risposta-corretta")
    }
    // FERMO IL TIMER QUANDO L'UTENTE RISPONDE (PULSANTE CLICCATO)
    clearInterval(contoAllaRovescia)
  }

  //  CONTROLLO SE LA RISPOSTA È GIUSTA E IN CASO ASSEGNO I PUNTI
  // SE è GIUSTA DIVENTA VERDE, AALTRIMENTI ROSSA
  const risposta3 = document.getElementById("risposta-3")
  risposta3.onclick = function () {
    if (risposta3.innerText === oggettoDomandaEstratta.rispostaGiusta) {
      punteggio += 1
      btn3.classList.add("risposta-corretta")
    } else {
      btn3.classList.add("risposta-errata")
    }
    // DISABILITO TUTTI I BOTTONI PER EVITARE ALTRI CLICK
    btn1.setAttribute("disabled", "")
    btn2.setAttribute("disabled", "")
    btn3.setAttribute("disabled", "")
    btn4.setAttribute("disabled", "")
    btnNext.classList.remove("no-display")

    // CONTROLLO TUTTE LE RISPOSTE ED EVIDENZIO LA RISPOSTA CORRETTA
    if (btn1.innerText === oggettoDomandaEstratta.rispostaGiusta) {
      btn1.classList.add("risposta-corretta")
    } else if (btn2.innerText === oggettoDomandaEstratta.rispostaGiusta) {
      btn2.classList.add("risposta-corretta")
    } else if (btn4.innerText === oggettoDomandaEstratta.rispostaGiusta) {
      btn4.classList.add("risposta-corretta")
    }
    // FERMO IL TIMER QUANDO L'UTENTE RISPONDE (PULSANTE CLICCATO)
    clearInterval(contoAllaRovescia)
  }
  //  CONTROLLO SE LA RISPOSTA È GIUSTA E IN CASO ASSEGNO I PUNTI
  // SE è GIUSTA DIVENTA VERDE, AALTRIMENTI ROSSA
  const risposta4 = document.getElementById("risposta-4")
  risposta4.onclick = function () {
    if (risposta4.innerText === oggettoDomandaEstratta.rispostaGiusta) {
      punteggio += 1
      btn4.classList.add("risposta-corretta")
    } else {
      btn4.classList.add("risposta-errata")
    }
    // DISABILITO TUTTI I BOTTONI PER EVITARE ALTRI CLICK
    btn1.setAttribute("disabled", "")
    btn2.setAttribute("disabled", "")
    btn3.setAttribute("disabled", "")
    btn4.setAttribute("disabled", "")
    btnNext.classList.remove("no-display")

    // CONTROLLO TUTTE LE RISPOSTE ED EVIDENZIO LA RISPOSTA CORRETTA
    if (btn1.innerText === oggettoDomandaEstratta.rispostaGiusta) {
      btn1.classList.add("risposta-corretta")
    } else if (btn2.innerText === oggettoDomandaEstratta.rispostaGiusta) {
      btn2.classList.add("risposta-corretta")
    } else if (btn3.innerText === oggettoDomandaEstratta.rispostaGiusta) {
      btn3.classList.add("risposta-corretta")
    }
    // FERMO IL TIMER QUANDO L'UTENTE RISPONDE (PULSANTE CLICCATO)
    clearInterval(contoAllaRovescia)
  }

  // DECIDO COSA SUCCEDE QUANDO SCHIACCIO IL BOTTONE PROSSIMA DOMANDA
  btnNext.onclick = function () {
    // TOLGO SFONDO VERDE A RISPOSTA CORRETTA
    btn1.classList.remove("risposta-corretta")
    btn2.classList.remove("risposta-corretta")
    btn3.classList.remove("risposta-corretta")
    btn4.classList.remove("risposta-corretta")
    // TOLGO SFONDO ROSSO A RISPOSTA ERRATA
    btn1.classList.remove("risposta-errata")
    btn2.classList.remove("risposta-errata")
    btn3.classList.remove("risposta-errata")
    btn4.classList.remove("risposta-errata")
    // NASCONDO IL PULSANTE PROSSIMA DOMANDA
    btnNext.classList.add("no-display")
    // RIABILITA TUTTI I BOTTONI DELLE RISPOSTE PER LA DOMANDA NUOVA
    btn1.disabled = false
    btn2.disabled = false
    btn3.disabled = false
    btn4.disabled = false
    // ESTRAZIONE DELLA PROSSIMA DOMANDA, RIAVVIO CONTO ALLA ROVESCIA
    estrazioneDomande()
    inizioContoRovescia()
  }

  // AGGIORNAMENTO NUMERO DOMANDE BASE PAGINA

  const questionsNum = document.querySelector("#numero-domande P")
  questionsNum.innerHTML = `QUESTION ${numeroDomandaCorrente}<span> / 10</span>`
  numeroDomandaCorrente += 1

  // SERVE PER FAR FUNZIONARE MODALITà PROGRESSIVA
  if (isProgressiva) {
    difficoltà = "progressiva"
  }
}

// TIMER
// ANIMAZIONE DEL TIMER
const tempoTimer = 10 // DURATA DEL TIMER

let tempoRimanente = tempoTimer
let contoAllaRovescia

// SELEZIONA SPECIFICAMENTE LO SPAN DEL NUMERO
const numeriTimer = document.querySelector("#countdown-numero")
const progressoTimer = document.querySelector(".progresso-timer")
const lineaCountdown = 283

const updateCountdown = () => {
  // ORA AGGIUNGO IL NUMERO , LE SCRITTE RIMANGONO INTATTE
  if (numeriTimer) {
    numeriTimer.innerText = tempoRimanente
  }

  // AGGIORNA LA BARRA DEL TIMER IN BASE AL TEMPO RIMASTO
  const updateLinea =
    lineaCountdown - (tempoRimanente / tempoTimer) * lineaCountdown
  progressoTimer.style.strokeDashoffset = updateLinea
}

// COSA SUCCEDE SE SCADE IL TEMPO E NON RISPONDO
const tempoFinito = () => {
  console.log("cicci")

  // PRENDI TUTTI I BOTTONI E LA DOMANDA
  const btn1 = document.getElementById("risposta-1")
  const btn2 = document.getElementById("risposta-2")
  const btn3 = document.getElementById("risposta-3")
  const btn4 = document.getElementById("risposta-4")
  const btnNext = document.getElementById("prossima-domanda")
  const h2 = document.querySelector("#testo-domanda h2")

  //  DISABILITO TUTTI I BOTTONI PER EVITARE ALTRI CLICK
  btn1.setAttribute("disabled", "")
  btn2.setAttribute("disabled", "")
  btn3.setAttribute("disabled", "")
  btn4.setAttribute("disabled", "")
  btnNext.classList.remove("no-display")
}

// FA PARTIRE IL TIMER
const inizioContoRovescia = () => {
  tempoRimanente = tempoTimer
  updateCountdown()

  contoAllaRovescia = setInterval(() => {
    // setInterval ESEGUE UNA FUNZIONE A INTERVALLI REGOLARI (1000 MS = 1 SECONDO)
    tempoRimanente--
    updateCountdown()

    if (tempoRimanente <= 0) {
      clearInterval(contoAllaRovescia)
      tempoFinito()
    }
  }, 1000)
}

// SELEZIONA DIFFICOLTÀ E INIZIA IL QUIZ
const form = document.querySelector("#form-difficoltà")
const select = document.querySelector("#scelta")

form.addEventListener("submit", function (e) {
  // EVITO RESET DELLA PAGINA
  e.preventDefault()
  // ASSEGNO LA DIFFICOLTà IN BASE A QUELLA SCELTA DALL'UTENTE
  difficoltà = select.value

  // SVUOTO EVENTUALI DOMANDE ESTRATTE, RESETTO IL PUNTEGGIO E CONTEGGIO NUMERO DOMANDE, FACCIO PARTIRE LA PRIMA DOMANDA
  domandePescate = []
  punteggio = 0
  numeroDomandaCorrente = 1
  estrazioneDomande()
})

// CAMBIA PAGINA IN MOSTRA RISULTATI
const mostraRisultati = function () {
  const contenitore = document.getElementById("cambia-pagina")
  // SVUOTO LA PAGINA
  contenitore.innerHTML = ""
  // RIEMPO LA PAGINA CON I RISULTATI
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
              <h3></h3>
              <p class="highlight"></p>
              <p id="secondo-par"></p>
              <p id="terzo-par"></p>
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
          <h2 class="text-center">Correzione domande</h2>
        </section>

        <section class="punteggio-domande">
          <div>
            <h4>Corrette</h4>
            <h2>${punteggio}</h2>
          </div>
          <div>
            <h4>Sbagliate</h4>
            <h2>${10 - punteggio}</h2>
          </div>
          <div >
            <h4>Totali</h4>
            <h2>${10}</h2>
          </div>
        </section>

        <section id="box-domande-correzione">
        </section>
      </div>
      `
  riempiCorrezioneDomande()
  riempiScritteGrafico()
}

// SVUOTA LA SEZIONE PER INSERIRE LE DOMANDE CORRETTE
const riempiCorrezioneDomande = () => {
  const section = document.getElementById("box-domande-correzione")
  section.innerHTML = ""

  // RIPETE 10 VOLTE LA CREAZIONE E IL POPOLAMENTO DEL DIV CON LE DOMANDE CORRETTE
  for (let x = 0; x < 10; x++) {
    const div = document.createElement("div")
    const p = document.createElement("p")
    const divRisultati = document.createElement("div")

    // DOMANDA SCRITTA IN MODO SBAGLIATO
    let domandaConTag = domandePescate[x].domanda

    // PULIZIA DELLA DOMANDA
    let testoSistemato = domandaConTag.replace("<span", " <span")

    let pulitore = document.createElement("div")
    pulitore.innerHTML = testoSistemato
    let testoVeramentePulito = pulitore.innerText

    p.innerText = `Domanda ${x + 1}: ${testoVeramentePulito}`

    // CREA ELEMENTI HTML E LI AGGIUNGE ALLA SEZIONE
    section.appendChild(div)
    div.appendChild(p)
    div.appendChild(divRisultati)

    let contenutoRisposte = ""
    // CONTROLLA IL TIPO DI DOMANDA. SE È A RISPOSTA MULTIPLA , CREA UNA LISTA CON 4 OPZIONI
    if (domandePescate[x].tipo === "risposta multipla") {
      contenutoRisposte = `
        <ol>
          <li>${domandePescate[x].rispostaGiusta} <i class="green fas fa-check"></i></li> 
          <li>${domandePescate[x].risposteSbagliate[0]}</li>
          <li>${domandePescate[x].risposteSbagliate[1]}</li>
          <li>${domandePescate[x].risposteSbagliate[2]}</li>
        </ol>`

      //  SE NON È MULTIPLA , CREA UNA LISTA CON 2 OPZIONI (GIUSTA/SBAGLIATA)
    } else {
      contenutoRisposte = `
        <ol>
          <li>${domandePescate[x].rispostaGiusta} <i class="green fas fa-check"></i></li>
          <li>${domandePescate[x].risposteSbagliate}</li>
        </ol>`
    }
    // MOSTRA LE RISPOSTE NEL DIV
    divRisultati.innerHTML = contenutoRisposte
  }

  const xValues = ["Wrong", "Correct"] // ETICHETTE DELLE SEZIONI DEL GRAFICO
  const yValues = [10 - punteggio, punteggio] // RISPOSTE SBAGLIATE O CORRETTE
  const barColors = ["#d20094", "#00ffff"] // COLORIN DELLE SEZIONI DEL GRAFICO

  const ctx = document.getElementById("grafico-a-torta")

  // CREA GRAFICO A CIAMBELLA
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
// RIEMPIMENTO GRAFICO
const riempiScritteGrafico = () => {
  const h3 = document.querySelector(".chart-inner h3")
  const primoP = document.querySelector(".highlight")
  const secondoP = document.getElementById("secondo-par")
  const terzoP = document.getElementById("terzo-par")

  // CONTROLLA SE HAI SUPERATO L'ESAME
  if (punteggio >= 6) {
    // SE L'HAI SUPERATO , APPARIRÀ QUESTO:
    h3.innerText = "Congratulations!"
    primoP.innerText = "You passed the exam."
    secondoP.innerText = "We'll send you the certificate in few minutes."
    terzoP.innerText = "Check your email (including promotions / spam folder)"
    lanciaConfetti()
    // SE NON L HAI SUPERATO , APPARIRÀ QUESTO:
  } else {
    h3.innerText = "Exam not passed"
    primoP.classList.replace("highlight", "highlight-bocciato")
    primoP.innerText = "Unfortunately, you did not reach the required score."
    secondoP.innerText = "We recommend reviewing the topics."
    terzoP.innerText = "You can retake the exam anytime."
  }
}

// CORIANDOLI

const colori = [
  "#00ffff",
  "#d20094",
  "#ffe400",
  "#ff4747",
  "#4dff91",
  "#a855f7",
]
let coriandoli = []
let animazione = null

function lanciaConfetti() {
  const canvas = document.getElementById("confetti-canvas")
  const ctx = canvas.getContext("2d")
  canvas.width = window.innerWidth
  canvas.height = window.innerHeight

  coriandoli = []
  for (let i = 0; i < 150; i++) {
    coriandoli.push({
      x: Math.random() * canvas.width,
      y: -Math.random() * 300,
      w: Math.random() * 10 + 6,
      h: Math.random() * 5 + 4,
      colore: colori[Math.floor(Math.random() * colori.length)],
      velocitàY: Math.random() * 3 + 2,
      velocitàX: (Math.random() - 0.5) * 2,
      rotazione: Math.random() * Math.PI * 2,
      velocitàRotazione: (Math.random() - 0.5) * 0.2,
      fase: Math.random() * Math.PI * 2,
    })
  }

  if (animazione) cancelAnimationFrame(animazione)

  function anima() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    coriandoli.forEach((c) => {
      c.y += c.velocitàY
      c.x += c.velocitàX + Math.sin(c.fase) * 0.8
      c.rotazione += c.velocitàRotazione
      c.fase += 0.05
      ctx.save()
      ctx.translate(c.x, c.y)
      ctx.rotate(c.rotazione)
      ctx.fillStyle = c.colore
      ctx.fillRect(-c.w / 2, -c.h / 2, c.w, c.h)
      ctx.restore()
    })
    coriandoli = coriandoli.filter((c) => c.y < canvas.height + 20)
    if (coriandoli.length > 0) {
      animazione = requestAnimationFrame(anima)
    } else {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
    }
  }
  anima()
}
