const changeStyle = (n) => {
  const img = document.querySelectorAll("#stelline path")

  for (let i = 0; i < n; i++) {
    img[i].setAttribute("fill", "#202139")
  }
  for (let i = 9; i > n - 1; i--) {
    img[i].setAttribute("fill", "#00FFFF")
  }
}
// }
