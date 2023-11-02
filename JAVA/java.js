function numeroParImpar() {
    const listaNumeros = [4, 5, 12, 13, 16, 17, 8, 11, 18, 19];

    for (let i = 0; i < listaNumeros.length; i++) {
        const numero = listaNumeros[i];
        if (numero % 2 === 0) {
            console.log(numero + " es un número par.");
        } else {
            console.log(numero + " es un número impar.");
        }
    }
}


function numeroParImpar2(numero) {
    if (numero % 2 === 0) {
        console.log(numero + " es un número par.");
    } else {
        console.log(numero + " es un número impar.");
    }
}





const frutas=["Uva", "Frutilla", "Kiwi"]
console.log (frutas [0]) 
console.log (frutas [1]) 
console.log (frutas [2])  


function agregarFruta(banana) {
frutas.push ("banana")
console.log (frutas)

}

function bucle1 () {
    for (let i=0;i < frutas.length; i++)
    console.log(frutas[i])
}


function largoDeArray () {
    if (frutas.length %2===0)
    {return "La longitud del array es par";}
    else {return "La longitud del array es impar"}

    }


    const frases = ["HOLA", "SOY PIERI", "AGUANTE BOCA", "LA SEPTIMA"];
    const botonGenerarFrase = document.getElementById("generar-frase");
    const fraseDisplay = document.getElementById("frase-display");
    
    botonGenerarFrase.addEventListener("click", function() {
      const fraseAleatoria = obtenerFraseAleatoria(frases);
      mostrarFraseEnPantalla(fraseAleatoria);
    });
    
    function obtenerFraseAleatoria(frases) {
      const indice = Math.floor(Math.random() * frases.length);
      return frases[indice];
    }
    
    function mostrarFraseEnPantalla(frase) {
      fraseDisplay.textContent = frase;
    }


    function ApruebaoReprueba(nombre, nota) {
        const NotaFinal = document.getElementById("nota");
        if (nota > 4) {
            NotaFinal.innerHTML = "El alumno " + nombre + " aprobó.";
        } else {
            console.log("El alumno " + nombre + " reprobó la cursada.");
        }
    }

    var nombreAlumno = "Pieri";
    var notaAlumno = 10; 
    ApruebaoReprueba(nombreAlumno, notaAlumno);



  

const equipoAzul = ["Pieri", "Tommy", "Miru"];
const equipoAmarillo = ["Valen", "Guille", "Mora"];

const botonVerificarEquipo = document.getElementById("verificar-equipo");
const nombreJugadorInput = document.getElementById("nombre-jugador");
const resultadoElement = document.getElementById("resultado2");

botonVerificarEquipo.addEventListener("click", function() {
  const nombreJugador = nombreJugadorInput.value;
  determinarEquipo(nombreJugador);
});

function determinarEquipo(jugador) {
  if (jugador === "todos") {
    mostrarListadoCompleto();
  } else if (equipoAzul.includes(jugador)) {
    resultadoElement.textContent = "El jugador es del equipo azul";
  } else if (equipoAmarillo.includes(jugador)) {
    resultadoElement.textContent = "El jugador es del equipo amarillo";
  } else {
    resultadoElement.textContent = "El jugador no está en ninguno de los equipos.";
  }
}

function mostrarListadoCompleto() {
  resultadoElement.textContent = "Listado completo del equipo azul: " + equipoAzul.join(", ") +
                                 "\nListado completo del equipo amarillo: " + equipoAmarillo.join(", ");}
