const changeStyle = (event) => {
  const img = document.querySelectorAll("#stelline img")

  for (let i = 0; i < event.length; i++) {
    img[i].classlist.add("stella-scura")
  }
}
