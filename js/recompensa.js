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
        const puntuacion = datosRecompensa.puntuacion;

        const detalles = document.createElement('h6');
        detalles.textContent = `Jugador: ${nombreJugador} - Puntuación: ${puntuacion}`;
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
        window.location.href = "index.html";
    });

    // Botón de ver reportes
    const verReportesButton = document.getElementById('verReportesButton');
    verReportesButton.addEventListener('click', function() {
        // Redireccionar a la página de reportes
        window.location.href = 'reportes.html'; // Reemplaza 'reportes.html' con la ruta correcta a la página de reportes
    });
});
