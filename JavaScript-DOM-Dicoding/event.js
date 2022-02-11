function increment(){
    document.getElementById("count").innerText++;

    if (document.getElementById("count").innerText % 7==0) {
        const hiddenMessage = document.createElement("h4");
        hiddenMessage.innerText = "Selamat! Anda Menemukan Hadiah Tersembunyi";
        const image = document.createElement("img");
        image.setAttribute("src", "https://i.ibb.co/0V49VRZ/catto.jpg");
        const content = document.querySelector(".contents");
        content.appendChild(hiddenMessage).appendChild(image);
    };
};
console.log(increment)

function welcome (){
    alert("Sim salabim muncullah element HTML");
    const content = document.querySelector(".contents");
    content.removeAttribute("hidden");
};

window.addEventListener("load", welcome);
document.getElementById("incrementButton").addEventListener("click", increment)
//document.getElementById("incrementButton").onclick = increment;
//document.body.onload = welcome;