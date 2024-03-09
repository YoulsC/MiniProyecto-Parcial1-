function dibujarFelicitacion() {
    const container = document.getElementById('felicitacionContainer');

    // Obtener datos del almacenamiento local
    const datosRecompensaJSON = localStorage.getItem('datosRecompensa');

    if (datosRecompensaJSON) {
        const datosRecompensa = JSON.parse(datosRecompensaJSON);

        const titulo = document.createElement('h1');
        titulo.textContent = '¡Felicidades!';

        const mensaje = document.createElement('p');
        mensaje.textContent = 'Felicidadessss!!! Eres una persona sumamente inteligente, lo lograste con exito!, siguete esforzando asi!!!".';
        mensaje.style.fontFamily = "'Comic Sans MS', cursive, sans-serif";

        const nombreJugador = datosRecompensa.alias;
        const puntos = datosRecompensa.puntos;

        const detalles = document.createElement('h6');
        detalles.textContent = `Jugador: ${nombreJugador} - Puntuación: ${puntos} - Tiempo: ${datosRecompensa.mejorTiempo} segundos.`;
        detalles.style.fontFamily = "'Comic Sans MS', cursive, sans-serif";

        container.appendChild(titulo);
        container.appendChild(mensaje);
        container.appendChild(detalles);

        container.style.backgroundImage = "url('../media/thumbnail.jpg')"; 
        container.style.backgroundSize = 'cover';
        container.style.backgroundPosition = 'center bottom';

        const audio = new Audio('../media/sonidos/victory.mp3'); 
        audio.play();

        const aliasActual = datosRecompensa.alias;
        const puntosActual = datosRecompensa.puntos;
        const mejorTiempoActual = datosRecompensa.mejorTiempo; 
        const datosPreviosJSON = localStorage.getItem(aliasActual);

        if (datosPreviosJSON) {
            const datosPrevios = JSON.parse(datosPreviosJSON);

            if (puntosActual > datosPrevios.puntos || 
                (puntosActual === datosPrevios.puntos && mejorTiempoActual < datosPrevios.mejorTiempo)) {
                localStorage.setItem(aliasActual, JSON.stringify(datosRecompensa));
            }
        } else {
            localStorage.setItem(aliasActual, JSON.stringify(datosRecompensa));
        }
    } else {
        container.textContent = 'No se encontraron datos de recompensa.';
    }
}

document.addEventListener('DOMContentLoaded', function() {
    dibujarFelicitacion();

    // Botón de regresar
    const regresarButton = document.getElementById('regresarButton');
    regresarButton.addEventListener('click', function() {
        // Redireccionar a la página anterior
        localStorage.removeItem('datosRecompensa');
        window.location.href = "Index.html";
    });
    
    const newGameButton = document.getElementById('newGame');
    newGameButton.addEventListener('click', function() {
        localStorage.removeItem('datosRecompensa');
        window.location.href = "alias.html";
    });

    // Botón de ver reportes
    const verReportesButton = document.getElementById('verReportesButton');
    verReportesButton.addEventListener('click', function() {
        // Redireccionar a la página de reportes
        localStorage.removeItem('datosRecompensa');
        window.location.href = 'reportes.html'; 
    });
});
