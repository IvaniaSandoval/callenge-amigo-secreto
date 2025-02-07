// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Array para almacenar los nombres de los amigos
let amigos = [];

function agregarAmigo() {
    let input = document.getElementById("amigoIngresadoXusuario"); 
    let nombre = input.value.trim();

    if (nombre === "") {
        alert("Error: Por favor, inserte un nombre.");
        return;
    }

    amigos.push(nombre);
    actualizarLista(); 

    input.value = ""; 
}

function actualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; 

    for (let i = 0; i < amigos.length; i++) { 
        let li = document.createElement("li");
        li.textContent = amigos[i]; 
        lista.appendChild(li);
    }
}

function sortearAmigo() {
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = ""; 

    if (amigos.length === 0) {
        alert("Agrega al menos un amigo antes de sortear.");
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSecreto = amigos[indiceAleatorio];

    let li = document.createElement("li");
    li.innerHTML = `🎁 Amigo Secreto: <strong>${amigoSecreto}</strong>`;
    
    resultado.appendChild(li);
}


    

