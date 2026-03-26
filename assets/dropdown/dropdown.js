const buttonDropdownMenu = document.getElementById("dropbtn")
const changeDifficulty = (event) => {
  const arrayOfLinks = document.getElementsByClassName("single-difficulty")
  buttonDropdownMenu.innerHTML = `${arrayOfLinks[event].innerText} &#9660;`
}
