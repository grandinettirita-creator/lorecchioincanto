document.getElementById("commentForm").addEventListener("submit", function(event){

    event.preventDefault();

    const nome = document.getElementById("nome").value;
    const messaggio = document.getElementById("messaggio").value;

    const lista = document.getElementById("listaCommenti");

    if(lista.innerHTML.includes("Non ci sono ancora commenti.")){
        lista.innerHTML = "";
    }

    lista.innerHTML += `
        <div class="commento">
            <strong>${nome}</strong><br>
            <p>${messaggio}</p>
            <hr>
        </div>
    `;

    document.getElementById("commentForm").reset();

});
