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

    function iniciar() {
        count=0;

        var but1 = document.getElementById('cont1');
        but1.style.display = 'none';

        var game2 = document.getElementById('game2');
        game2.style.display = 'none';

        var game3 = document.getElementById('game3');
        game3.style.display = 'none';
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


        for (var i = 1; i <= 3; i++) {
            var seccion = document.getElementById('cajasoltar' + (i + 1));
            seccion.innerHTML = `<p>${array[rand1[i-1]].nombre}</p><canvas data-value="${array[rand1[i-1]].nombre}" id="lienzo${i}" width="500" height="500"></canvas>`;
        }

        for (var i = 1; i <= 3; i++){
            var seccion = document.getElementById('cajasoltar' + (i + 1));
            seccion.innerHTML = `<p>${array[rand2[i-1]].nombre}</p><canvas data-value="${array[rand2[i-1]].nombre}" id="lienzo${i + 3}" width="500" height="500"></canvas>`;
        }

        for (var i = 1; i <=3; i++) {
            var seccion = document.getElementById('cajasoltar' + (i + 1));
            seccion.innerHTML = `<p>${array[rand3[i-1]].nombre}</p><canvas data-value="${array[rand3[i-1]].nombre}" id="lienzo${i + 6}" width="500" height="500"></canvas>`;
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
    
        var posx1 = e.pageX - soltar1.offsetLeft;
        var posy1 = e.pageY - soltar1.offsetTop;
        var posx2 = e.pageX - soltar2.offsetLeft;
        var posy2 = e.pageY - soltar2.offsetTop;
        var posx3 = e.pageX - soltar3.offsetLeft;
        var posy3 = e.pageY - soltar3.offsetTop;
        var posx4 = e.pageX - soltar4.offsetLeft;
        var posy4 = e.pageY - soltar4.offsetTop;
        var posx5 = e.pageX - soltar5.offsetLeft;
        var posy5 = e.pageY - soltar5.offsetTop;
        var posx6 = e.pageX - soltar6.offsetLeft;
        var posy6 = e.pageY - soltar6.offsetTop;
        var posx7 = e.pageX - soltar7.offsetLeft;
        var posy7 = e.pageY - soltar7.offsetTop;
        var posx8 = e.pageX - soltar8.offsetLeft;
        var posy8 = e.pageY - soltar8.offsetTop;
        var posx9 = e.pageX - soltar9.offsetLeft;
        var posy9 = e.pageY - soltar9.offsetTop;

        

        var canvasValue1 = document.getElementById('lienzo1').getAttribute('data-value');
        var canvasValue2 = document.getElementById('lienzo2').getAttribute('data-value');
        var canvasValue3 = document.getElementById('lienzo3').getAttribute('data-value');
        var canvasValue4 = document.getElementById('lienzo4').getAttribute('data-value');
        var canvasValue5 = document.getElementById('lienzo5').getAttribute('data-value');
        var canvasValue6 = document.getElementById('lienzo6').getAttribute('data-value');
        var canvasValue7 = document.getElementById('lienzo7').getAttribute('data-value');
        var canvasValue8 = document.getElementById('lienzo8').getAttribute('data-value');
        var canvasValue9 = document.getElementById('lienzo9').getAttribute('data-value');

    
        var canvasDestino;
        var canvasValorDestino;
        var posX, posY;
        var animal;
    
        // Determinar el canvas de destino, su valor data-value y las coordenadas correspondientes
        if (posx1 >= 0 && posx1 <= soltar1.width && posy1 >= 0 && posy1 <= soltar1.height) {
            canvasDestino = lienzo1;
            canvasValorDestino = canvasValue1;
            posX = posx1;
            posY = posy1;
        } else if (posx2 >= 0 && posx2 <= soltar2.width && posy2 >= 0 && posy2 <= soltar2.height) {
            canvasDestino = lienzo2;
            canvasValorDestino = canvasValue2;
            posX = posx2;
            posY = posy2;
        } else if (posx3 >= 0 && posx3 <= soltar3.width && posy3 >= 0 && posy3 <= soltar3.height) {
            canvasDestino = lienzo3;
            canvasValorDestino = canvasValue3;
            posX = posx3;
            posY = posy3;
        } else if (posx4 >= 0 && posx4 <= soltar4.width && posy4 >= 0 && posy4 <= soltar4.height) {
            canvasDestino = lienzo4;
            canvasValorDestino = canvasValue4;
            posX = posx4;
            posY = posy4;
        } else if (posx5 >= 0 && posx5 <= soltar5.width && posy5 >= 0 && posy5 <= soltar5.height) {
            canvasDestino = lienzo5;
            canvasValorDestino = canvasValue5;
            posX = posx5;
            posY = posy5;
        } else if (posx6 >= 0 && posx6 <= soltar6.width && posy6 >= 0 && posy6 <= soltar6.height) {
            canvasDestino = lienzo6;
            canvasValorDestino = canvasValue6;
            posX = posx6;
            posY = posy6;
        } else if (posx7 >= 0 && posx7 <= soltar7.width && posy7 >= 0 && posy7 <= soltar7.height) {
            canvasDestino = lienzo7;
            canvasValorDestino = canvasValue7;
            posX = posx7;
            posY = posy7;
        } else if (posx8 >= 0 && posx8 <= soltar8.width && posy8 >= 0 && posy8 <= soltar8.height) {
            canvasDestino = lienzo8;
            canvasValorDestino = canvasValue8;
            posX = posx8;
            posY = posy8;
        } else if (posx9 >= 0 && posx9 <= soltar9.width && posy9 >= 0 && posy9 <= soltar9.height) {
            canvasDestino = lienzo9;
            canvasValorDestino = canvasValue9;
            posX = posx9;
            posY = posy9;
        }
        
    
        // Comparar el nombre del animal con el valor data-value del canvas de destino
        if (nombreAnimal === canvasValorDestino) {
            canvasDestino.drawImage(elemento, posX, posY);
            
            // Encontrar el objeto animal correspondiente en el array animalitos
            animal = animalitos.find(a => a.nombre === nombreAnimal);
            
            // Reproducir el sonido del animal
            var sonidoAnimal = new Audio(animal.sonido);
            sonidoAnimal.play();

            puntuacion+=10;

            count++;

            if(count==3){
                var but1 = document.getElementById('cont1');
                but1.style.display = 'block';
            }
            
            alert(`¡Correcto! ${nombreAnimal} fue colocado en su hábitat correcto.`);
            elemento.style.visibility = 'hidden';
        } else {
            alert(`Lo siento, debes soltar el ${nombreAnimal} en su hábitat correcto.`);
            puntuacion-=5;
        }
    }

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]]; // intercambio de elementos
        }
    }

    function gameover1(){
        var game1 = document.getElementById('game1');
        game1.style.display = 'none';

        var game2 = document.getElementById('game2');
        game2.style.display = 'block';
    }
    
    window.addEventListener('load', iniciar, false);
    
