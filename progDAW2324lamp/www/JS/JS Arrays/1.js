function main() {
    var numeros = []; 


    for (var i = 0; i < 5; i++) {
        var numero = parseInt(prompt("Ingrese el número " + (i + 1)));

        while (arr(numero)) {
            numero = parseInt(prompt("Por favor, ingrese un número válido para el número " + (i + 1)));
        }
        numeros.push(numero); 
    }

    var suma = 0;
    for (var j = 0; j < numeros.length; j++) {
        suma += numeros[j];
    }

    var media = suma / numeros.length;

    console.log("La media de los números ingresados es: " + media);
}


