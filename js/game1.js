var animalitos = [
    { nombre: "Animalito 1", imagen: "animalito1.png", sonido: "animalito1.mp3", sonidoNombre: "nombre1.mp3" },
    { nombre: "Animalito 2", imagen: "animalito2.png", sonido: "animalito2.mp3", sonidoNombre: "nombre2.mp3" },
    // Agregar información de los otros 7 animalitos
    // ...
    { nombre: "Animalito 9", imagen: "animalito9.png", sonido: "animalito9.mp3", sonidoNombre: "nombre9.mp3" }
];

// Función para seleccionar aleatoriamente 3 animalitos no repetidos
function seleccionarAnimalitosAleatorios() {
    var animalitosAleatorios = [];
    var indices = [];

    // Generar 3 índices aleatorios únicos
    while (indices.length < 3) {
        var indice = Math.floor(Math.random() * 9);
        if (!indices.includes(indice)) {
            indices.push(indice);
        }
    }

    // Agregar los animalitos correspondientes a los índices generados
    indices.forEach(function (indice) {
        animalitosAleatorios.push(animalitos[indice]);
    });

    return animalitosAleatorios;
}

// Función para posicionar los animalitos y sus casas en lugares diferentes
function posicionarAnimalitosYCasas(pantalla, animalitos) {
    var animalitosDiv = document.getElementById("animalitos" + pantalla);
    var casasDiv = document.getElementById("casas" + pantalla);

    // Posicionar animalitos
    animalitos.forEach(function (animalito, index) {
        var animalitoDiv = document.createElement("img");
        animalitoDiv.src = "imágenes/" + animalito.imagen;
        animalitoDiv.className = "animalito";
        animalitoDiv.draggable = true;
        animalitoDiv.dataset.nombre = animalito.nombre;
        animalitoDiv.dataset.sonido = animalito.sonido;
        animalitoDiv.dataset.sonidoNombre = animalito.sonidoNombre;
        animalitosDiv.appendChild(animalitoDiv);
    });

    // Posicionar casas
    for (var i = 0; i < 3; i++) {
        var casaDiv = document.createElement("div");
        casaDiv.className = "casa";
        casaDiv.dataset.casaIndex = i;
        casasDiv.appendChild(casaDiv);
    }
}

// Llamadas a las funciones para iniciar el juego
posicionarAnimalitosYCasas(1, seleccionarAnimalitosAleatorios());
posicionarAnimalitosYCasas(2, seleccionarAnimalitosAleatorios());

// Agregar eventos de arrastrar y soltar
document.querySelectorAll(".animalito").forEach(function (animalito) {
    animalito.addEventListener("dragstart", function (event) {
        event.dataTransfer.setData("text/plain", animalito.dataset.nombre);
    });
});

document.querySelectorAll(".casa").forEach(function (casa) {
    casa.addEventListener("dragover", function (event) {
        event.preventDefault();
    });

    casa.addEventListener("drop", function (event) {
        event.preventDefault();
        var nombreAnimalito = event.dataTransfer.getData("text/plain");
        var casaIndex = casa.dataset.casaIndex;
        var animalito = document.querySelector('[data-nombre="' + nombreAnimalito + '"]');
        if (verificarCasaAnimalito(nombreAnimalito, casaIndex)) {
            alert("¡Correcto! El animalito ha sido colocado en su casa.");
            animalito.style.display = "none"; // Ocultar el animalito después de colocarlo correctamente
        } else {
            alert("Incorrecto. El animalito no pertenece a esta casa.");
        }
    });
});

// Función para verificar si el animalito pertenece a la casa correspondiente
function verificarCasaAnimalito(nombreAnimalito, casaIndex) {
    // Implementa la lógica para verificar si el animalito pertenece a la casa
    // Aquí puedes comparar el nombre del animalito con la casa correspondiente, por ejemplo:
    // return nombreAnimalito === "Nombre de la casa correspondiente";
    return true; // Solo para este ejemplo, siempre retorna true
}
