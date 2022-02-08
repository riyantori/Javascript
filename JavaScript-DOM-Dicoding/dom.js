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

const links = document.getElementById("links");
console.log(links)
console.log(links.innerHTML)
console.log(links.innerText)

const dicoding = document.getElementById("dicodingLink");
console.log(dicoding)
dicoding.innerText = "Belajar Programming di Dicoding";
dicoding.innerHTML = "<i>Belajar Programming di Dicoding</i>"

const google = document.getElementById("googleLink");
google.innerText = "Belajar Programming di Google";
google.innerHTML = "<i>Belajar Programming di Google</i>"

const buttonBaru = document.getElementsByClassName("button");

for (button of buttonBaru) {
    console.log(button.childNodes[0])
    button.childNodes[0].style.borderRadius = "10px";
}