var animalitos = [
    { nombre: "Hipopótamo", imagen: "../media/hipopotamo.png", sonido: "../media/sonidos/hipopotamo.mp3", sonidoNombre: "../media/sonidos/nombre_hipopotamo.mp3" },
    { nombre: "Rinoceronte", imagen: "../media/rinoceronte.png", sonido: "../media/sonidos/rinoceronte.mp3", sonidoNombre: "../media/sonidos/nombre_rinoceronte.mp3" },
    { nombre: "Elefante", imagen: "../media/elefante.png", sonido: "../media/sonidos/elefante.mp3", sonidoNombre: "../media/sonidos/nombre_elefante.mp3" },
    { nombre: "León", imagen: "../media/leon.png", sonido: "../media/sonidos/leon.mp3", sonidoNombre: "../media/sonidos/nombre_leon.mp3" },
    { nombre: "Antílope", imagen: "../media/antilope.png", sonido: "../media/sonidos/antilope.mp3", sonidoNombre: "../media/sonidos/nombre_antilope.mp3" },
    { nombre: "Avestruz", imagen: "../media/avestruz.png", sonido: "../media/sonidos/avestruz.mp3", sonidoNombre: "../media/sonidos/nombre_avestruz.mp3" },
    { nombre: "Jirafa", imagen: "../media/jirafa.png", sonido: "../media/sonidos/jirafa.mp3", sonidoNombre: "../media/sonidos/nombre_jirafa.mp3" },
    { nombre: "Tucán", imagen: "../media/tucan.png", sonido: "../media/sonidos/tucan.mp3", sonidoNombre: "../media/sonidos/nombre_tucan.mp3" },
    { nombre: "Cebra", imagen: "../media/cebra.png", sonido: "../media/sonidos/cebra.mp3", sonidoNombre: "../media/sonidos/nombre_cebra.mp3" }
    ];

// Modificamos la función posicionarAnimalitosYCasas para que muestre los animales arriba y las casas abajo.
function posicionarAnimalitosYCasas(pantalla, animalitos) {
    var animalitosDiv = document.getElementById("animalitos" + pantalla);
    var casasDiv = document.getElementById("casas" + pantalla);

    // Posicionar casas
    for (var i = 0; i < 3; i++) {
        var casaDiv = document.createElement("div");
        casaDiv.className = "casa";
        casaDiv.dataset.casaIndex = i;
        casasDiv.appendChild(casaDiv);
    }

    // Posicionar animalitos
    animalitos.forEach(function (animalito, index) {
        var animalitoDiv = document.createElement("img");
        animalitoDiv.src = animalito.imagen;
        animalitoDiv.className = "animalito";
        animalitoDiv.draggable = true;
        animalitoDiv.dataset.nombre = animalito.nombre;
        animalitoDiv.dataset.sonido = animalito.sonido;
        animalitoDiv.dataset.sonidoNombre = animalito.sonidoNombre;
        animalitosDiv.appendChild(animalitoDiv);
    });
}

// Creamos una función para verificar si todos los animales están en sus casas
function todosEnSusCasas(pantalla) {
    var casas = document.querySelectorAll("#casas" + pantalla + " .casa");
    var animalitos = document.querySelectorAll("#animalitos" + pantalla + " .animalito");

    for (var i = 0; i < casas.length; i++) {
        var casa = casas[i];
        var animalitoEnCasa = false;

        for (var j = 0; j < animalitos.length; j++) {
            var animalito = animalitos[j];
            if (animalito.dataset.nombre === casa.dataset.nombre) {
                animalitoEnCasa = true;
                break;
            }
        }

        if (!animalitoEnCasa) {
            return false;
        }
    }

    return true;
}

// Modificamos la función verificarCasaAnimalito para que reproduzca los sonidos y gestione el movimiento de los animales.
function verificarCasaAnimalito(nombreAnimalito, casaIndex, pantalla) {
    var animalito = document.querySelector('[data-nombre="' + nombreAnimalito + '"]');
    var casa = document.querySelector('#casas' + pantalla + ' [data-casa-index="' + casaIndex + '"]');

    if (casa.dataset.nombre === nombreAnimalito) {
        alert("¡Correcto! El animalito ha sido colocado en su casa.");
        var sonido = new Audio(animalito.dataset.sonido);
        sonido.play();
        animalito.style.display = "none"; // Ocultar el animalito después de colocarlo correctamente
        if (todosEnSusCasas(pantalla)) {
            alert("¡Todos los animales están en sus casas! Pasando a la siguiente pantalla.");
            // Lógica para pasar a la siguiente pantalla
        }
    } else {
        alert("Incorrecto. El animalito no pertenece a esta casa.");
        var errorSound = new Audio("sonidos/error.mp3");
        errorSound.play();
    }
}

// Modificamos la función posicionarAnimalitosYCasas para mostrar los nombres de los animales en la segunda pantalla.
function posicionarAnimalitosYCasasSegundaPantalla(pantalla, animalitos) {
    var animalitosDiv = document.getElementById("animalitos" + pantalla);
    var nombresDiv = document.getElementById("nombres" + pantalla);

    // Posicionar nombres de animalitos
    animalitos.forEach(function (animalito, index) {
        var nombreDiv = document.createElement("div");
        nombreDiv.textContent = animalito.nombre;
        nombreDiv.className = "nombre";
        nombresDiv.appendChild(nombreDiv);
    });

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
}

// Llamadas a las funciones para iniciar el juego en la primera pantalla
posicionarAnimalitosYCasas(1, seleccionarAnimalitosAleatorios());

// Agregar eventos de arrastrar y soltar en la primera pantalla
document.querySelectorAll("#animalitos1 .animalito").forEach(function (animalito) {
    animalito.addEventListener("dragstart", function (event) {
        event.dataTransfer.setData("text/plain", animalito.dataset.nombre);
    });
});

document.querySelectorAll("#casas1 .casa").forEach(function (casa) {
    casa.addEventListener("dragover", function (event) {
        event.preventDefault();
    });

    casa.addEventListener("drop", function (event) {
        event.preventDefault();
        var nombreAnimalito = event.dataTransfer.getData("text/plain");
        var casaIndex = casa.dataset.casaIndex;
        verificarCasaAnimalito(nombreAnimalito, casaIndex, 1);
    });
});

// Llamadas a las funciones para iniciar el juego en la segunda pantalla
posicionarAnimalitosYCasasSegundaPantalla(2, seleccionarAnimalitosAleatorios());

// Agregar eventos de arrastrar y soltar en la segunda pantalla
document.querySelectorAll("#animalitos2 .animalito").forEach(function (animalito) {
    animalito.addEventListener("dragstart", function (event) {
        event.dataTransfer.setData("text/plain", animalito.dataset.nombre);
    });
});

document.querySelectorAll("#nombres2 .nombre").forEach(function (nombre) {
    nombre.addEventListener("dragover", function (event) {
        event.preventDefault();
    });

    nombre.addEventListener("drop", function (event) {
        event.preventDefault();
        var nombreAnimalito = event.dataTransfer.getData("text/plain");
        var animalito = document.querySelector('[data-nombre="' + nombreAnimalito + '"]');
        var sonidoNombre = new Audio(animalito.dataset.sonidoNombre);
        sonidoNombre.play();
    });
});
