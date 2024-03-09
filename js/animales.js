
var animalitos = [
    { nombre: "Hipopótamo", sonido: "hipopotamo.mp3", sonidoNombre: "nombre_hipopotamo.mp3" },
    { nombre: "Rinoceronte", sonido: "rinoceronte.mp3", sonidoNombre: "nombre_rinoceronte.mp3" },
    { nombre: "Elefante", sonido: "elefante.mp3", sonidoNombre: "nombre_elefante.mp3" },
    { nombre: "León", sonido: "leon.mp3", sonidoNombre: "nombre_leon.mp3" },
    { nombre: "Antílope", sonido: "antilope.mp3", sonidoNombre: "nombre_antilope.mp3" },
    { nombre: "Avestruz", sonido: "avestruz.mp3", sonidoNombre: "nombre_avestruz.mp3" },
    { nombre: "Jirafa", sonido: "jirafa.mp3", sonidoNombre: "nombre_jirafa.mp3" },
    { nombre: "Tucán", sonido: "tucan.mp3", sonidoNombre: "nombre_tucan.mp3" },
    { nombre: "Cebra", sonido: "cebra.mp3", sonidoNombre: "nombre_cebra.mp3" }
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
function posicionarAnimalitosYCasas() {
    // Implementa la lógica para posicionar los animalitos y sus casas en lugares diferentes en la pantalla
}

// Función para verificar si el lugar donde se suelta el animalito corresponde a su casa
function verificarCasaAnimalito(animalito, casa) {
    // Implementa la lógica para verificar si el animalito pertenece a la casa
}

// Llamadas a las funciones para iniciar el juego
var animalitosPantalla1 = seleccionarAnimalitosAleatorios();
var animalitosPantalla2 = seleccionarAnimalitosAleatorios();

posicionarAnimalitosYCasas();

// Ahora puedes usar las listas de animalitos seleccionados y la lógica de posicionamiento y verificación en tu interfaz de juego.
