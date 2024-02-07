document.getElementById("botonAmor").addEventListener("click", function() {
    var contador = "";
    var velocidad = 50; // Puedes ajustar esto para cambiar la velocidad de la animación
    var duracion = 5000; // Duración del contador en milisegundos (5000 ms = 5 segundos)
    var contadorDiv = document.getElementById("contadorAmor");

    var intervalo = setInterval(function() {
        var numeroAleatorio = Math.floor(Math.random() * 10); // Genera un número aleatorio del 0 al 9
        contador += numeroAleatorio; // Concatena el número aleatorio al contador
        contadorDiv.textContent = contador;
    }, velocidad);

    setTimeout(function() {
        clearInterval(intervalo);
        contadorDiv.textContent = '∞';
        document.getElementById("mensajeAmor").style.visibility = 'visible';
        document.getElementById("mensajeAmor").textContent = 'Tu amor es infinito... [aquí tu mensaje personalizado]';
    }, duracion);
});

