var animalitos = [
    { nombre: "Hipopótamo", imagen: "media/hipopotamo.png", sonido: "../media/sonidos/hipopotamo.mp3", sonidoNombre: "../media/sonidos/nombre_hipopotamo.mp3", habitat: "cajasoltar1"},
    { nombre: "Rinoceronte", imagen: "media/rinoceronte.png", sonido: "../media/sonidos/rinoceronte.mp3", sonidoNombre: "../media/sonidos/nombre_rinoceronte.mp3", habitat: "cajasoltar2"},
    { nombre: "Elefante", imagen: "media/Elefante.png", sonido: "../media/sonidos/elefante.mp3", sonidoNombre: "../media/sonidos/nombre_elefante.mp3", habitat: "cajasoltar3"},
    { nombre: "León", imagen: "media/leon.png", sonido: "../media/sonidos/leon.mp3", sonidoNombre: "../media/sonidos/nombre_leon.mp3", habitat: "cajasoltar4" },
    { nombre: "Antílope", imagen: "media/Antilope.png", sonido: "../media/sonidos/antilope.mp3", sonidoNombre: "../media/sonidos/nombre_antilope.mp3", habitat: "cajasoltar5" },
    { nombre: "Avestruz", imagen: "media/Avestruz.png", sonido: "../media/sonidos/avestruz.mp3", sonidoNombre: "../media/sonidos/nombre_avestruz.mp3", habitat: "cajasoltar6" },
    { nombre: "Jirafa", imagen: "media/Jirafa.png", sonido: "../media/sonidos/jirafa.mp3", sonidoNombre: "../media/sonidos/nombre_jirafa.mp3", habitat: "cajasoltar7" },
    { nombre: "Tucán", imagen: "media/tucan.png", sonido: "../media/sonidos/tucan.mp3", sonidoNombre: "../media/sonidos/nombre_tucan.mp3", habitat: "cajasoltar8" },
    { nombre: "Cebra", imagen: "media/cebra.png", sonido: "../media/sonidos/cebra.mp3", sonidoNombre: "../media/sonidos/nombre_cebra.mp3", habitat: "cajasoltar9" },
    ];

    function iniciar() {
        var array = animalitos;
        shuffleArray(array);
        console.log(array);

        var img = document.getElementById('cajaimagenes');
        img.innerHTML = `<img id="${array[0].nombre}" src="${array[0].imagen}" draggable="true">
        <img id="${array[1].nombre}" src="${array[1].imagen}" draggable="true">
        <img id="${array[2].nombre}" src="${array[2].imagen}" draggable="true">`;

        var seccion = document.getElementById('cajasoltar1');
        seccion.innerHTML = `<canvas id="lienzo1" width="500" height="500"></canvas>`;

        var seccion = document.getElementById('cajasoltar2');
        seccion.innerHTML = `<canvas id="lienzo2" width="500" height="500"></canvas>`;

        var seccion = document.getElementById('cajasoltar3');
        seccion.innerHTML = `<canvas id="lienzo3" width="500" height="500"></canvas>`;

        var imagenes = document.querySelectorAll('#cajaimagenes > img');
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
        //elemento.style.visibility = 'hidden';
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
        var posx1 = e.pageX - soltar1.offsetLeft;
        var posy1 = e.pageY - soltar1.offsetTop;

        var posx2 = e.pageX - soltar2.offsetLeft;
        var posy2 = e.pageY - soltar2.offsetTop;

        var posx3 = e.pageX - soltar3.offsetLeft;
        var posy3 = e.pageY - soltar3.offsetTop;
        lienzo1.drawImage(elemento, posx1, posy1);
        lienzo2.drawImage(elemento, posx2, posy2);
        lienzo3.drawImage(elemento, posx3, posy3);
    }

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]]; // intercambio de elementos
        }
    }
    
    window.addEventListener('load', iniciar, false);
    
