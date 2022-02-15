const submitAction = document.getElementById("formDataDiri");
    submitAction.addEventListener("submit", function(){
        const inputName = document.getElementById("nama").value;
        console.log(inputName)
        const inputDomisili = document.getElementById("domisili").value;
        const hidenMessage = `Halo ${inputName} Bagaimana Cuaca di ${inputDomisili} ?`;
        document.getElementById("messageAfterSubmit").innerText = hidenMessage;
        event.preventDefault();
    });
