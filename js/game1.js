var animalitos = [
    { nombre: "Hipopótamo", imagen: "media/hipopotamo.png", sonido: "../media/sonidos/hipopotamo.mp3", sonidoNombre: "../media/sonidos/nombre_hipopotamo.mp3", habitat: ""},
    { nombre: "Rinoceronte", imagen: "media/rinoceronte.png", sonido: "../media/sonidos/rinoceronte.mp3", sonidoNombre: "../media/sonidos/nombre_rinoceronte.mp3", habitat: ""},
    { nombre: "Elefante", imagen: "media/Elefante.png", sonido: "../media/sonidos/elefante.mp3", sonidoNombre: "../media/sonidos/nombre_elefante.mp3", habitat: ""},
    { nombre: "León", imagen: "media/leon.png", sonido: "../media/sonidos/leon.mp3", sonidoNombre: "../media/sonidos/nombre_leon.mp3", habitat: "" },
    { nombre: "Antílope", imagen: "media/Antilope.png", sonido: "../media/sonidos/antilope.mp3", sonidoNombre: "../media/sonidos/nombre_antilope.mp3", habitat: "" },
    { nombre: "Avestruz", imagen: "media/Avestruz.png", sonido: "../media/sonidos/avestruz.mp3", sonidoNombre: "../media/sonidos/nombre_avestruz.mp3", habitat: "" },
    { nombre: "Jirafa", imagen: "media/Jirafa.png", sonido: "../media/sonidos/jirafa.mp3", sonidoNombre: "../media/sonidos/nombre_jirafa.mp3", habitat: "" },
    { nombre: "Tucán", imagen: "media/tucan.png", sonido: "../media/sonidos/tucan.mp3", sonidoNombre: "../media/sonidos/nombre_tucan.mp3", habitat: "" },
    { nombre: "Cebra", imagen: "media/cebra.png", sonido: "../media/sonidos/cebra.mp3", sonidoNombre: "../media/sonidos/nombre_cebra.mp3", habitat: "" },
    ];

    var count = 0;
    var tiempoInicio; // Variable para el tiempo de inicio global
    var puntuacion = 0; // Variable para la puntuación global
    function iniciar() {

        tiempoInicio = Date.now(); // Establecer el tiempo de inicio al iniciar el juego
        iniciarCronometro();

        var game1 = document.getElementById('game1');
        game1.style.display = 'block';

        var but1 = document.getElementById('cont1');
        but1.style.display = 'none';

        var but2 = document.getElementById('cont2');
        but2.style.display = 'none';

        var game2 = document.getElementById('game2');
        game2.style.display = 'none';

        var game3 = document.getElementById('game3');
        game3.style.display = 'none';

        var but3 = document.getElementById('cont3');
        but3.style.display = 'none';

        var puntuacion=0;
        var alias = localStorage.getItem("alias");
        var time = 0;

        var array = animalitos;
        shuffleArray(array);
        console.log(array);

        var rand1 = [0, 1, 2].sort(() => Math.random() - 0.5);
        var rand2 = [3, 4, 5].sort(() => Math.random() - 0.5);
        var rand3 = [6, 7, 8].sort(() => Math.random() - 0.5);

        var img1 = document.getElementById('cajaimagenes1');
        img1.innerHTML = 
        `<img id="img1" data-value="${array[0].nombre}" src="${array[0].imagen}" draggable="true">
        <img id="img2" data-value="${array[1].nombre}" src="${array[1].imagen}" draggable="true">
        <img id="img3" data-value="${array[2].nombre}" src="${array[2].imagen}" draggable="true">`;

        var img2 = document.getElementById('cajaimagenes2');
        img2.innerHTML = 
        `<img id="img4" data-value="${array[3].nombre}" src="${array[3].imagen}" draggable="true">
        <img id="img5" data-value="${array[4].nombre}" src="${array[4].imagen}" draggable="true">
        <img id="img6" data-value="${array[5].nombre}" src="${array[5].imagen}" draggable="true">`;

        var img3 = document.getElementById('cajaimagenes3');
        img3.innerHTML = 
        `<img id="img7" data-value="${array[6].nombre}" src="${array[6].imagen}" draggable="true">
        <img id="img8" data-value="${array[7].nombre}" src="${array[7].imagen}" draggable="true">
        <img id="img9" data-value="${array[8].nombre}" src="${array[8].imagen}" draggable="true">`;


        for (var i = 0; i < 3; i++) {
            var seccion = document.getElementById('cajasoltar' + (i + 1));
            seccion.innerHTML = `<p>${array[rand1[i]].nombre}</p><canvas data-value="${array[rand1[i]].nombre}" id="lienzo${i+1}" width="500" height="500"></canvas>`;
        }

        for (var i = 0; i < 3; i++){
            var seccion = document.getElementById('cajasoltar' + (i + 4));
            seccion.innerHTML = `<p>${array[rand2[i]].nombre}</p><canvas data-value="${array[rand2[i]].nombre}" id="lienzo${i + 4}" width="500" height="500"></canvas>`;
        }

        for (var i = 0; i <3; i++) {
            var seccion = document.getElementById('cajasoltar' + (i + 7));
            seccion.innerHTML = `<p>${array[rand3[i]].nombre}</p><canvas data-value="${array[rand3[i]].nombre}" id="lienzo${i + 7}" width="500" height="500"></canvas>`;
        }


        var imagenes = document.querySelectorAll('#cajaimagenes1 > img');
        for (var i = 0; i < imagenes.length; i++) {
            imagenes[i].addEventListener('dragstart', arrastrado, false);
            imagenes[i].addEventListener('dragend', finalizado, false);
        }
    
        soltar1 = document.getElementById('lienzo1');
        lienzo1 = soltar1.getContext('2d');

        soltar2 = document.getElementById('lienzo2');
        lienzo2 = soltar2.getContext('2d');

        soltar3 = document.getElementById('lienzo3');
        lienzo3 = soltar3.getContext('2d');
    
        soltar1.addEventListener('dragenter', eventoEnter, false);
        soltar1.addEventListener('dragover', eventoOver, false);
        soltar1.addEventListener('drop', soltado, false);

        soltar2.addEventListener('dragenter', eventoEnter, false);
        soltar2.addEventListener('dragover', eventoOver, false);
        soltar2.addEventListener('drop', soltado, false);

        soltar3.addEventListener('dragenter', eventoEnter, false);
        soltar3.addEventListener('dragover', eventoOver, false);
        soltar3.addEventListener('drop', soltado, false);

        var imagenes = document.querySelectorAll('#cajaimagenes2 > img');
        for (var i = 0; i < imagenes.length; i++) {
            imagenes[i].addEventListener('dragstart', arrastrado, false);
            imagenes[i].addEventListener('dragend', finalizado, false);
        }
    
        soltar4 = document.getElementById('lienzo4');
        lienzo4 = soltar4.getContext('2d');

        soltar5 = document.getElementById('lienzo5');
        lienzo5 = soltar5.getContext('2d');

        soltar6 = document.getElementById('lienzo6');
        lienzo6 = soltar6.getContext('2d');
    
        soltar4.addEventListener('dragenter', eventoEnter, false);
        soltar4.addEventListener('dragover', eventoOver, false);
        soltar4.addEventListener('drop', soltado, false);

        soltar5.addEventListener('dragenter', eventoEnter, false);
        soltar5.addEventListener('dragover', eventoOver, false);
        soltar5.addEventListener('drop', soltado, false);

        soltar6.addEventListener('dragenter', eventoEnter, false);
        soltar6.addEventListener('dragover', eventoOver, false);
        soltar6.addEventListener('drop', soltado, false);

        var imagenes = document.querySelectorAll('#cajaimagenes3 > img');
        for (var i = 0; i < imagenes.length; i++) {
            imagenes[i].addEventListener('dragstart', arrastrado, false);
            imagenes[i].addEventListener('dragend', finalizado, false);
        }
    
        soltar7 = document.getElementById('lienzo7');
        lienzo7 = soltar7.getContext('2d');

        soltar8 = document.getElementById('lienzo8');
        lienzo8 = soltar8.getContext('2d');

        soltar9 = document.getElementById('lienzo9');
        lienzo9 = soltar9.getContext('2d');
    
        soltar7.addEventListener('dragenter', eventoEnter, false);
        soltar7.addEventListener('dragover', eventoOver, false);
        soltar7.addEventListener('drop', soltado, false);

        soltar8.addEventListener('dragenter', eventoEnter, false);
        soltar8.addEventListener('dragover', eventoOver, false);
        soltar8.addEventListener('drop', soltado, false);

        soltar9.addEventListener('dragenter', eventoEnter, false);
        soltar9.addEventListener('dragover', eventoOver, false);
        soltar9.addEventListener('drop', soltado, false);

        if (tiempoInicio === undefined) {
            tiempoInicio = Date.now();
            iniciarCronometro();
        }

    }
    
    function eventoEnter(e) {
        console.log("soy el evento dragenter");
        e.preventDefault();
    }
    
    function eventoOver(e) {
        console.log("soy el evento dragover");
        e.preventDefault();
    }
    
    function finalizado(e) {
        elemento = e.target;
    }
    
    function arrastrado(e) {
        elemento = e.target;
        e.dataTransfer.setData('Text', elemento.getAttribute('id'));
        e.dataTransfer.setDragImage(e.target, 0, 0);
    }
    
    function soltado(e) {
    e.preventDefault();
    var id = e.dataTransfer.getData('Text');
    var elemento = document.getElementById(id);
    var nombreAnimal = elemento.getAttribute('data-value');
    var punt = document.getElementById('puntuacion');

    var offsetX = e.offsetX;
    var offsetY = e.offsetY;

    var canvasDestino;
    var canvasValorDestino;

    if (e.target.nodeName === 'CANVAS') {
        canvasDestino = e.target;
        canvasValorDestino = canvasDestino.getAttribute('data-value');
    }

    if (nombreAnimal === canvasValorDestino) {
        var ctx = canvasDestino.getContext('2d');
        ctx.drawImage(elemento, offsetX, offsetY);

        // Encontrar el objeto animal correspondiente en el array animalitos
        var animal = animalitos.find(a => a.nombre === nombreAnimal);

        // Reproducir el sonido del animal
        var sonidoAnimal = new Audio(animal.sonido);
        sonidoAnimal.play();

        puntuacion += 10; // o -= 5 si es incorrecto
        var puntuacionHTML = document.getElementById('puntuacion');
        puntuacionHTML.innerHTML = `Puntuación: ${puntuacion}`;

        count++;

        if (count == 3) {
            var but1 = document.getElementById('cont1');
            but1.style.display = 'block';
        } else if (count == 6) {
            var but2 = document.getElementById('cont2');
            but2.style.display = 'block';
        } else if (count == 9) {
            var but3 = document.getElementById('cont3');
            but3.style.display = 'block';
        }

        alert(`¡Correcto! ${nombreAnimal} fue colocado en su hábitat correcto.`);
        elemento.style.visibility = 'hidden';
    } else {
        alert(`Lo siento, debes soltar el ${nombreAnimal} en su hábitat correcto.`);
        puntuacion -= 5;
        var puntuacionHTML = document.getElementById('puntuacion');
        puntuacionHTML.innerHTML = `Puntuación: ${puntuacion}`;
    }
}

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]]; // intercambio de elementos
        }
    }

    function iniciarCronometro() {
        intervaloCronometro = setInterval(actualizarCronometro, 1000);
    }
    
    function detenerCronometro() {
        clearInterval(intervaloCronometro);
    }
    
    function actualizarCronometro() {
        var tiempoTranscurrido = Math.floor((Date.now() - tiempoInicio) / 1000);
        var tiempoHTML = document.getElementById('time');
        tiempoHTML.innerHTML = `Tiempo transcurrido: ${tiempoTranscurrido} segundos`;
    }
    
    function gameover1() {
        var game1 = document.getElementById('game1');
        game1.style.display = 'none';
    
        var game2 = document.getElementById('game2');
        game2.style.display = 'block';
    }
    
    function gameover2() {
        var game2 = document.getElementById('game2');
        game2.style.display = 'none';
    
        var game3 = document.getElementById('game3');
        game3.style.display = 'block';
    }
    
    function gameover3() {
        // Aquí puedes agregar el código necesario para cuando se termine el juego
        detenerCronometro(); // Detener el cronómetro
    }
    
    
    window.addEventListener('load', iniciar, false);
    
