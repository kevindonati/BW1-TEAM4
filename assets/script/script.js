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

// AGGIORNAMENTO NUMERO DOMANDE BASE PAGINA
let numeri = 1
const updateNumDomande = () => {
  questionsNum = document.querySelector("#numero-domande P")
  questionsNum.innerText = `QUESTION ${numeri}/10`
  numeri += 1
}
// Gestione form

const formSubmit = (e) => {
  e.preventDefault()
}

const form = document.querySelector("form")
form.addEventListener("submit", formSubmit)
