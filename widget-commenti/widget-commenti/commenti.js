document.getElementById("commentForm").addEventListener("submit", async function(event){

    event.preventDefault();

    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const messaggio = document.getElementById("messaggio").value.trim();

    if(nome === "" || email === "" || messaggio === ""){
        alert("Compila tutti i campi.");
        return;
    }

    const risposta = await fetch("/.netlify/functions/salva-commento",{

        method:"POST",

        headers:{
            "Content-Type":"application/json"
        },

        body:JSON.stringify({
            nome:nome,
            email:email,
            messaggio:messaggio
        })

    });

    if(!risposta.ok){
        alert("Errore durante l'invio del commento.");
        return;
    }

    const lista = document.getElementById("listaCommenti");

    if(lista.innerHTML.includes("Non ci sono ancora commenti.")){
        lista.innerHTML = "";
    }

    const data = new Date();

    const dataOra =
        data.toLocaleDateString("it-IT") +
        " " +
        data.toLocaleTimeString("it-IT",{
            hour:"2-digit",
            minute:"2-digit"
        });

    lista.innerHTML += `
        <div class="commento">
            <strong>${nome}</strong><br>
            <small>${dataOra}</small>
            <p>${messaggio}</p>
            <hr>
        </div>
    `;

    document.getElementById("commentForm").reset();

});
