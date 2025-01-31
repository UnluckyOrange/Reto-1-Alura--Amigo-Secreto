// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let nombres = [];

// Función para agregar nombres de amigo
function agregarAmigo() {
    var nombre = document.getElementById('amigo').value;
    if (nombre === '') {
        alert('Por favor, ingresa un nombre válido.');
    } else {
        nombres.push(nombre); 
        actualizarLista(); 
        document.getElementById('amigo').value = ''; 
    }
}

// Función para actualizar la lista visual
function actualizarLista() {
    let listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = '';
    for (var i = 0; i < nombres.length; i++) {
        var nombre = nombres[i]; 
        listaAmigos.innerHTML += '<li>' + nombre + '</li>'; 
    }
}

// Función para sortear un amigo
function sortearAmigo() {
    if (nombres.length === 0) {
        alert('No hay nombres en la lista.');
    } else {
        let indiceAleatorio = Math.floor(Math.random() * nombres.length);
        let amigoSecreto = nombres[indiceAleatorio];
        document.getElementById('resultado').innerHTML = 'El amigo secreto es: ' + amigoSecreto;
    }
}