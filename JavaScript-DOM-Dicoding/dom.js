const gambar = document.getElementById("gambar");
gambar.setAttribute("width", "300");
gambar.setAttribute("height", "215");

const buttons = document.querySelectorAll(".button");
console.log(buttons)
const playButton = buttons[3];
console.log(playButton)
const playButtonElement = playButton.childNodes[0];
console.log(playButtonElement)
playButtonElement.setAttribute("disabled", "button dimatikan");