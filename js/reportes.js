document.addEventListener('DOMContentLoaded', function() {
    const container = document.getElementById('reporteContainer');
    const regresarButton = document.getElementById('regresarButton');
  
    // Manejo del botón de regresar
    regresarButton.addEventListener('click', function() {
      window.location.href = "index.html";
    });
  
    const jugadores = [];
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key !== 'datosRecompensa') {
        // el objeto 'datosRecompensa' no es un jugador
        const jugador = JSON.parse(localStorage.getItem(key));
        jugadores.push(jugador);
      }
    }
  
    // Ordenar los jugadores por mejor tiempo (ascendente)
    jugadores.sort((a, b) => a.mejorTiempo - b.mejorTiempo);
  
    
    const tabla = document.createElement('table');
    tabla.classList.add('leaderboard-table');
  
    
    const encabezado = document.createElement('thead');
    const filaEncabezado = document.createElement('tr');
    const thAlias = document.createElement('th');
    thAlias.textContent = 'Alias';
    const thPuntos = document.createElement('th');
    thPuntos.textContent = 'Puntos';
    const thTiempo = document.createElement('th');
    thTiempo.textContent = 'Tiempo de Juego (segundos)';
  
    filaEncabezado.appendChild(thAlias);
    filaEncabezado.appendChild(thPuntos);
    filaEncabezado.appendChild(thTiempo);
    encabezado.appendChild(filaEncabezado);
    tabla.appendChild(encabezado);
  

    const cuerpo = document.createElement('tbody');
    jugadores.forEach(jugador => {
      const fila = document.createElement('tr');
      const alias = document.createElement('td');
      alias.textContent = jugador.alias;
      const puntos = document.createElement('td');
      puntos.textContent = jugador.puntos;
      const tiempo = document.createElement('td');
      tiempo.textContent = jugador.mejorTiempo;
  
      fila.appendChild(alias);
      fila.appendChild(puntos);
      fila.appendChild(tiempo);
      cuerpo.appendChild(fila);
    });
    tabla.appendChild(cuerpo);
  

    container.appendChild(tabla);
  });