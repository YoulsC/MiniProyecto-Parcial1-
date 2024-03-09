function dibujarFelicitacion() {
    const container = document.getElementById('felicitacionContainer');

    // Obtener datos del almacenamiento local
    const datosRecompensaJSON = localStorage.getItem('datosRecompensa');

    if (datosRecompensaJSON) {
        const datosRecompensa = JSON.parse(datosRecompensaJSON);

        // Crear elementos HTML para mostrar la felicitación
        const titulo = document.createElement('h1');
        titulo.textContent = '¡Felicidades!';

        const mensaje = document.createElement('p');
        mensaje.textContent = 'Felicidadessss!!! Eres una persona sumamente inteligente, lo lograste con exito!, siguete esforzando asi!!!".';
        mensaje.style.fontFamily = "'Comic Sans MS', cursive, sans-serif";

        const nombreJugador = datosRecompensa.alias;
        const puntos = datosRecompensa.puntos;

        const detalles = document.createElement('h6');
        detalles.textContent = `Jugador: ${nombreJugador} - Puntuación: ${puntos} - mejorTiempo: ${datosRecompensa.mejorTiempo} segundos.`;
        detalles.style.fontFamily = "'Comic Sans MS', cursive, sans-serif";

        // Agregar elementos al contenedor
        container.appendChild(titulo);
        container.appendChild(mensaje);
        container.appendChild(detalles);

        // Agregar fondo de la jungla
        container.style.backgroundImage = "url('../media/thumbnail.jpg')"; // Reemplaza 'ruta/a/la/imagen/jungla.jpg' con la ruta a tu imagen de la jungla
        container.style.backgroundSize = 'cover';
        container.style.backgroundPosition = 'center bottom';

        // Reproducir música de ganador
        const audio = new Audio('../media/sonidos/victory.mp3'); // Reemplaza 'ruta/a/la/musica/ganador.mp3' con la ruta a tu archivo de música
        audio.play();

        // Obtener el alias y la puntuación del jugador actual
        const aliasActual = datosRecompensa.alias;
        const puntosActual = datosRecompensa.puntos;
        const mejorTiempoActual = datosRecompensa.mejorTiempo; // Suponiendo que también hay un campo de mejorTiempo en los datos

        // Verificar si hay datos previos para el mismo jugador en el almacenamiento local
        const datosPreviosJSON = localStorage.getItem(aliasActual);

        if (datosPreviosJSON) {
            const datosPrevios = JSON.parse(datosPreviosJSON);

            // Verificar si la puntuación actual es mayor o igual a la puntuación previa
            if (puntosActual > datosPrevios.puntos || 
                (puntosActual === datosPrevios.puntos && mejorTiempoActual < datosPrevios.mejorTiempo)) {
                // Actualizar los datos en el almacenamiento local
                localStorage.setItem(aliasActual, JSON.stringify(datosRecompensa));
            }
        } else {
            // Si no hay datos previos para este jugador, almacenar los datos actuales
            localStorage.setItem(aliasActual, JSON.stringify(datosRecompensa));
        }
    } else {
        // Mostrar un mensaje de error si no se encuentran datos en el almacenamiento local
        container.textContent = 'No se encontraron datos de recompensa.';
    }
}

// Llamamos a la función para dibujar la felicitación cuando se carga el contenido
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
        window.location.href = 'reportes.html'; // Reemplaza 'reportes.html' con la ruta correcta a la página de reportes
    });
});
