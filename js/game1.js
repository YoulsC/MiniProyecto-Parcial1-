var animalitos = [
    { nombre: "Hipopótamo", imagen: "hipopotamo.png", sonido: "hipopotamo.mp3", sonidoNombre: "nombre_hipopotamo.mp3" },
    { nombre: "Rinoceronte", imagen: "rinoceronte.png", sonido: "rinoceronte.mp3", sonidoNombre: "nombre_rinoceronte.mp3" },
    { nombre: "Elefante", imagen: "elefante.png", sonido: "elefante.mp3", sonidoNombre: "nombre_elefante.mp3" },
    { nombre: "León", imagen: "leon.png", sonido: "leon.mp3", sonidoNombre: "nombre_leon.mp3" },
    { nombre: "Antílope", imagen: "antilope.png", sonido: "antilope.mp3", sonidoNombre: "nombre_antilope.mp3" },
    { nombre: "Avestruz", imagen: "avestruz.png", sonido: "avestruz.mp3", sonidoNombre: "nombre_avestruz.mp3" },
    { nombre: "Jirafa", imagen: "jirafa.png", sonido: "jirafa.mp3", sonidoNombre: "nombre_jirafa.mp3" },
    { nombre: "Tucán", imagen: "tucan.png", sonido: "tucan.mp3", sonidoNombre: "nombre_tucan.mp3" },
    { nombre: "Cebra", imagen: "cebra.png", sonido: "cebra.mp3", sonidoNombre: "nombre_cebra.mp3" }
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
        animalitoDiv.src = "../media/" + animalito.imagen;
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
