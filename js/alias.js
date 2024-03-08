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

        // Redireccionar a game.html
        window.location.href = "game1.html";
    } else {
      // Si el alias existe, mostrar información
      var usuario = JSON.parse(aliasExistente);
      document.getElementById("alias-info").textContent = "Alias: " + usuario.alias;
      document.getElementById("puntos-info").textContent = "Puntos: " + usuario.puntos;
      document.getElementById("mejor-tiempo-info").textContent = "Mejor Tiempo: " + usuario.mejorTiempo;
    }
    
    // Mostrar la pantalla de puntos
    document.getElementById("alias-screen").style.display = "none";
    document.getElementById("puntos-screen").style.display = "block";
  }

function volverAJugar() {
    window.location.href = "game1.html";
}

function volver() {
    window.location.href = "alias.html";
}