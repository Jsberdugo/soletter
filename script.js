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
        contadorDiv.textContent = '¡El Resultado es: ∞ !!!';
        document.getElementById("mensajeAmor").style.visibility = 'visible';
        document.getElementById("mensajeAmor").textContent = 'Infinito es mi amor por ti, princesa. Gracias por este mes donde las adversidades predominaron, pero tu fuerza al amar nos sostuvo para seguir empujando hacia adelante y amando como solo nosotros sabemos hacerlo. Eres lo más precioso que tengo, estoy ultra orgulloso de todo lo que logras cada día, gracias por darme el privilegio de ser parte de eso. Sé que los tiempos que vienen no son fáciles, y desearía vivir las cosas de forma diferente, pero ya pasará y quedaremos victoriosos mi preciosa. Así que, mientras tanto y aprovechando el estar todo el dia programando decidi traerte algo diferente, tanto tiempo que le dedico a esto que me parecia injusto no poder usarlo para hacerte parte, te quiero en todos los aspectos de mi vida. Te amo como indicó esa calculadora: Infinitamente. Feliz cumple mes mi princesa, y feliz medio San Valentín';
    }, duracion);
});

