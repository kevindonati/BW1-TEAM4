const audio = new Audio("./assets/audio/ssstik.io_1774525065642.mp3");

const inizioAudio = () => {
  document.addEventListener(
    "click",
    () => {
      audio.play();
    },
    { once: true },
  );

  const foto = document.querySelectorAll(".foto");

  foto.forEach((img, index) => {
    setTimeout(
      () => {
        img.classList.add("show");
      },
      2500 + index * 2700,
    ); // 500ms tra una foto e l'altra
  });
  const didascalia = document.querySelectorAll("figcaption");
  const frasi = [
    "me cumpari u MAMMUT",
    "u TRICHECO, me cugnato",
    "me cuginu, franco u DEMOLITORE",
    "u signor Napoli ",
    "me cugino u MASSONE",
  ];

  didascalia.forEach((did, index) => {
    setTimeout(
      () => {
        did.innerText = frasi[index];

        did.classList.add("show");
      },
      2500 + index * 2700,
    ); // 500ms tra una foto e l'altra
  });
};
