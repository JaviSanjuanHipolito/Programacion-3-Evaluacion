function esPrimo(numero) {
    if (numero <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) {
            return false;
        }
    }
    return true;
}

function pedirNumero() {
    let numero = parseInt(prompt("Introduce un número positivo mayor que 0:"));
    while (isNaN(numero) || numero <= 0) {
        console.log("Por favor, introduce un número válido.");
        numero = parseInt(prompt("Introduce otro número positivo mayor que 0:"));
    }
    return numero;
}

let tamanoArray = pedirNumero();

let arrayPrimos = [];
let numeroActual = 1;
while (arrayPrimos.length < tamanoArray) {
    if (esPrimo(numeroActual)) {
        arrayPrimos.push(numeroActual);
    }
    numeroActual++;
}

console.log("Array de números primos de tamaño", tamanoArray + ":", arrayPrimos);
