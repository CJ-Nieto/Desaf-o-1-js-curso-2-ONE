

// Cambia el contenido de la etiqueta h1
let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora del Desafío';

// Función que muestra en la consola el mensaje "El botón fue clicado"
function consoleMensaje() {
    console.log('El botón fue clicado');
}

// Función que se ejecuta cuando se hace clic en el botón "prompt"
function promptCiudadBrasil() {
    let ciudad = prompt('Por favor, ingresa el nombre de una ciudad de Brasil');
    while (ciudad !== null && ciudad.trim() === "") {
        alert('Por favor, ingresa el nombre de una ciudad');
        ciudad = prompt('Por favor, ingresa el nombre de una ciudad de Brasil');
    }
    if (ciudad !== null) {
        alert(`Estuve en ${ciudad} y me acordé de ti`);
    }
}


// Función que muestra una alerta con el mensaje: "Yo amo JS"
function alertAmoJS() {
    alert('Yo amo JS');
}

//Función que suma dos números

// La función 'solicitarNumero' solicita al usuario un número a través de un mensaje de entrada.
function solicitarNumero(mensaje) {
    let num = prompt(mensaje);
    // Si el usuario hace clic en "Cancelar", la función devuelve 'null' (termina función).
    if (num === null || num.trim() === "") return num;
    num = Number(num);
    // Si el usuario hace clic en "Aceptar" o presiona "Enter" sin escribir nada devuelve una cadena vacia,
    // si ingresa un valor no numérico, en ambos casos se le solicita que ingrese un número nuevamente.
    if (isNaN(num)) {
        alert('Por favor, ingresa un número válido');
        return solicitarNumero(mensaje);
    }
    return num;
}

// La función 'sumaDosNum' utiliza la función 'solicitarNumero' para obtener dos números del usuario y poder sumarlos.
function sumaDosNum() {
    let num1 = solicitarNumero('Por favor, ingresa el primer número');
    // Si el usuario hace clic en "Cancelar" al solicitar cualquiera de los números, la función termina.
    if (num1 === null) return;

    let num2 = solicitarNumero('Por favor, ingresa el segundo número');
    if (num2 === null) return;

    let resultado = num1 + num2;
    alert(`El resultado de la suma ${num1} + ${num2} es ${resultado}`);
}