var animalitos = [
    { nombre: "Hipopótamo", imagen: "media/hipopotamo.png", sonido: "../media/sonidos/hipopotamo.mp3", sonidoNombre: "../media/sonidos/nombre_hipopotamo.mp3", habitat: "media/HipopotamoFondo.png"},
    { nombre: "Rinoceronte", imagen: "media/rinoceronte.png", sonido: "../media/sonidos/rinoceronte.mp3", sonidoNombre: "../media/sonidos/nombre_rinoceronte.mp3", habitat: "media/RinoceronteFondo.png"},
    { nombre: "Elefante", imagen: "media/Elefante.png", sonido: "../media/sonidos/elefante.mp3", sonidoNombre: "../media/sonidos/nombre_elefante.mp3", habitat: "media/ElefanteFondo.png"},
    { nombre: "León", imagen: "media/leon.png", sonido: "../media/sonidos/leon.mp3", sonidoNombre: "../media/sonidos/nombre_leon.mp3", habitat: "media/LeonFondo.png"},
    { nombre: "Antílope", imagen: "media/Antilope.png", sonido: "../media/sonidos/antilope.mp3", sonidoNombre: "../media/sonidos/nombre_antilope.mp3", habitat: "media/AntilopeFondo.png"},
    { nombre: "Avestruz", imagen: "media/Avestruz.png", sonido: "../media/sonidos/avestruz.mp3", sonidoNombre: "../media/sonidos/nombre_avestruz.mp3", habitat: "media/AvestruzFondo.png"},
    { nombre: "Jirafa", imagen: "media/Jirafa.png", sonido: "../media/sonidos/jirafa.mp3", sonidoNombre: "../media/sonidos/nombre_jirafa.mp3", habitat: "media/JirafaFondo.png"},
    { nombre: "Tucán", imagen: "media/tucan.png", sonido: "../media/sonidos/tucan.mp3", sonidoNombre: "../media/sonidos/nombre_tucan.mp3", habitat: "media/TucanFondo.png"},
    { nombre: "Cebra", imagen: "media/cebra.png", sonido: "../media/sonidos/cebra.mp3", sonidoNombre: "../media/sonidos/nombre_cebra.mp3", habitat: "media/CebraFondo.png"},
];


var count = 0;
var tiempoInicio; 
var puntuacion = 0; 
var alias; 

function iniciar() {

    var name = document.getElementById('name');

    tiempoInicio = Date.now(); 
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

    puntuacion = 0; 


    var datosRecompensaJSON = localStorage.getItem('datosRecompensa');
    var datosRecompensa = JSON.parse(datosRecompensaJSON);

  
    alias = datosRecompensa.alias;

   
    var aliasHTML = document.getElementById('alias');
    aliasHTML.innerHTML = ` ${alias}`;

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
            seccion.innerHTML = `<p id="names" style="display: none;">${array[rand1[i]].nombre}</p>
                                    <canvas class="canva" style="background-image: url(${array[rand1[i]].habitat});" data-value="${array[rand1[i]].nombre}" id="lienzo${i+1}" ></canvas>`;
        }

        for (var i = 0; i < 3; i++){
            var seccion = document.getElementById('cajasoltar' + (i + 4));
            seccion.innerHTML = `<p id="names" style="display: none;">${array[rand2[i]].nombre}</p><canvas class="canva" style="background-image: url(${array[rand2[i]].habitat});" data-value="${array[rand2[i]].nombre}" id="lienzo${i + 4}" ></canvas>`;
        }

        for (var i = 0; i <3; i++) {
            var seccion = document.getElementById('cajasoltar' + (i + 7));
            seccion.innerHTML = `<p id="names" style="display: none;">${array[rand3[i]].nombre}</p><canvas class="canva" style="background-image: url(${array[rand3[i]].habitat});" data-value="${array[rand3[i]].nombre}" id="lienzo${i + 7}" ></canvas>`;
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


        var animal = animalitos.find(a => a.nombre === nombreAnimal);

        var sonidoAnimal = new Audio(animal.sonido);
        sonidoAnimal.play();

        var sonidoNombreAnimal = new Audio(animal.sonidoNombre);

        setTimeout(function() {
            sonidoNombreAnimal.play();
        }, 2000);

        var parrafoAnterior = canvasDestino.previousElementSibling;


        if (parrafoAnterior && parrafoAnterior.nodeName === 'P') {
            parrafoAnterior.style.display = 'block';
        }

        puntuacion += 10; 
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

        
        elemento.style.visibility = 'hidden';
    } else {
        
        puntuacion -= 5;
        var error = new Audio(["../media/sonidos/error.mp3"]);
        error.play();
        var puntuacionHTML = document.getElementById('puntuacion');
        puntuacionHTML.innerHTML = `Puntuación: ${puntuacion}`;
    }
}

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]]; 
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
        tiempoHTML.innerHTML = `Tiempo: ${tiempoTranscurrido} seg`;
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
        
        detenerCronometro();

        
        var tiempoTranscurrido = Math.floor((Date.now() - tiempoInicio) / 1000);
        
    var datosRecompensaJSON = localStorage.getItem('datosRecompensa');
    var datosRecompensa = JSON.parse(datosRecompensaJSON);

    
    var alias = datosRecompensa.alias;


        var mejorTiempo = tiempoTranscurrido;
        var puntos = puntuacion;

       
        guardarDatosRecompensa(alias, mejorTiempo, puntos);
    }

    function guardarDatosRecompensa(alias, mejorTiempo, puntos) {
        console.log("Guardando datos de recompensa...");
    
        
        var datosPreviosAliasJSON = localStorage.getItem(alias);
    
        if (datosPreviosAliasJSON) {
            console.log("Datos previos encontrados para el alias " + alias);
    
            
            var datosPreviosAlias = JSON.parse(datosPreviosAliasJSON);
    
            
            if (puntos > datosPreviosAlias.puntos || (puntos === datosPreviosAlias.puntos && mejorTiempo < datosPreviosAlias.mejorTiempo)) {
                console.log("La puntuación actual es mejor que la puntuación previa o el mejorTiempo previo es menor. Actualizando datos del alias " + alias + "...");
    
                
                var datosAlias = {
                    alias: alias,
                    puntos: puntos,
                    mejorTiempo: mejorTiempo
                };
    
                
                var datosAliasJSON = JSON.stringify(datosAlias);
    
                
                localStorage.setItem(alias, datosAliasJSON);
            } else {
                console.log("La puntuación actual no supera a la puntuación previa o el mejorTiempo previo no es menor. No se realizarán cambios en los datos del alias " + alias + ".");
            }
        } else {
            console.log("No se encontraron datos previos para el alias " + alias + ". Guardando nuevos datos...");
    
            
            var datosAliasNuevo = {
                alias: alias,
                puntos: puntos,
                mejorTiempo: mejorTiempo
            };
    
            
            var datosAliasNuevoJSON = JSON.stringify(datosAliasNuevo);
    
            
            localStorage.setItem(alias, datosAliasNuevoJSON);
        }
    
        
        var datosRecompensaJSON = localStorage.getItem('datosRecompensa');
    
        if (datosRecompensaJSON) {
            console.log("Datos previos encontrados para la llave 'datosRecompensa'");
    
           
            var datosRecompensaPrevios = JSON.parse(datosRecompensaJSON);
    
            
            if (puntos > datosRecompensaPrevios.puntos || (puntos === datosRecompensaPrevios.puntos && mejorTiempo < datosRecompensaPrevios.mejorTiempo)) {
                console.log("La puntuación actual es mejor que la puntuación previa o el mejorTiempo previo es menor. Actualizando datos de 'datosRecompensa'...");
    
                
                var datosRecompensaNuevos = {
                    alias: alias, 
                    puntos: puntos,
                    mejorTiempo: mejorTiempo
                };
    
                
                var datosRecompensaNuevosJSON = JSON.stringify(datosRecompensaNuevos);
    
                
                localStorage.setItem('datosRecompensa', datosRecompensaNuevosJSON); 
            } else {
                console.log("La puntuación actual no supera a la puntuación previa o el mejorTiempo previo no es menor. No se realizarán cambios en los datos de 'datosRecompensa'.");
            }
        } else {
            console.log("No se encontraron datos previos para la llave 'datosRecompensa'. Guardando nuevos datos...");
    
            
            var datosRecompensaNuevo = {
                alias: alias,
                puntos: puntos,
                mejorTiempo: mejorTiempo
            };
    
           
            var datosRecompensaNuevoJSON = JSON.stringify(datosRecompensaNuevo);
    
            
            localStorage.setItem('datosRecompensa', datosRecompensaNuevoJSON);
        }
    
        window.location.href = "Recompensa.html";
    }
    

    function comeback() {
        window.location.href = "Index.html";
    }
    
    
    window.addEventListener('load', iniciar, false);
    
