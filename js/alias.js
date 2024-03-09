function guardarAlias() {
  var alias = document.getElementById("alias-input").value;
  var puntos = 0;
  var mejorTiempo = 0;

  // Verificar si el alias ya está en localStorage
  var aliasExistente = localStorage.getItem(alias);

  if (aliasExistente === null) {
      // Si el alias no existe, almacenar el alias con los valores iniciales
      var usuario = {
          alias: alias,
          puntos: puntos,
          mejorTiempo: mejorTiempo
      };
      localStorage.setItem(alias, JSON.stringify(usuario));

      // Guardar también en datosRecompensa
      var datosRecompensa = {
          alias: alias,
          puntos: puntos,
          mejorTiempo: mejorTiempo
      };
      localStorage.setItem('datosRecompensa', JSON.stringify(datosRecompensa));

      // Redireccionar a game.html
      window.location.href = "game1.html";
  } else {
      // Si el alias existe, mostrar información
      var usuario = JSON.parse(aliasExistente);
      document.getElementById("alias-info").textContent = "Alias: " + usuario.alias;
      document.getElementById("puntos-info").textContent = "Puntos: " + usuario.puntos;
      document.getElementById("mejor-tiempo-info").textContent = "Mejor Tiempo: " + usuario.mejorTiempo;

      // Guardar también en datosRecompensa
      var datosRecompensa = {
          alias: alias,
          puntos: puntos,
          mejorTiempo: mejorTiempo
      };
      localStorage.setItem('datosRecompensa', JSON.stringify(datosRecompensa));

      // Mostrar la pantalla de puntos
      document.getElementById("alias-screen").style.display = "none";
      document.getElementById("puntos-screen").style.display = "block";
  }
}

function volverAJugar() {
  // Obtener datosRecompensa del almacenamiento local
  var datosRecompensaJSON = localStorage.getItem('datosRecompensa');
  if (datosRecompensaJSON) {
      var datosRecompensa = JSON.parse(datosRecompensaJSON);

      // Actualizar los datos de datosRecompensa
      datosRecompensa.puntos = 0;
      datosRecompensa.mejorTiempo = 0;

      // Guardar los datos actualizados en el almacenamiento local
      localStorage.setItem('datosRecompensa', JSON.stringify(datosRecompensa));
  }

  // Redireccionar a la página del juego
  window.location.href = "game1.html";
}

function volver() {
  localStorage.removeItem('datosRecompensa');
  window.location.href = "Index.html";
}