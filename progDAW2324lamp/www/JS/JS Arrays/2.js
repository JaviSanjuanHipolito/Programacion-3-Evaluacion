let clasificacion = ["Ana", "Oswaldo", "Raúl", "Celia", "María", "Antonio"];

let indexCelia = clasificacion.indexOf("Celia");
let indexRaul = clasificacion.indexOf("Raúl");
[clasificacion[indexCelia], clasificacion[indexRaul]] = [clasificacion[indexRaul], clasificacion[indexCelia]];


let indexAntonio = clasificacion.indexOf("Antonio");
clasificacion.splice(indexAntonio, 1);

let indexAna = clasificacion.indexOf("Ana");
clasificacion.splice(indexAna + 1, 0, "Roberto", "Amaya");

clasificacion.unshift("Marta");

console.log("Clasificación actualizada:", clasificacion);
