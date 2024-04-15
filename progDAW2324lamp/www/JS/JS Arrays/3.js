function pedirArray() {
    let array = [];
    let numero = parseInt(prompt("Introduce un número entero (0 para terminar):"));

    while (numero !== 0) {
        if (!isNaN(numero)) {
            array.push(numero);
        } else {
            console.log("Por favor, introduce un número entero válido.");
        }
        numero = parseInt(prompt("Introduce otro número entero (0 para terminar):"));
    }

    return array;
}

console.log("Introduce los elementos del primer array:");
let array1 = pedirArray();
console.log("Introduce los elementos del segundo array:");
let array2 = pedirArray();

if (array1.length !== array2.length) {
    console.log("Los arrays proporcionados no tienen la misma longitud.");
} else {
    let producto = [];
    for (let i = 0; i < array1.length; i++) {
        producto.push(array1[i] * array2[i]);
    }
    console.log("El producto de los elementos en la misma posición es:", producto);
}
