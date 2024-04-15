let ancho = parseInt(prompt("ancho"));;
let largo = parseInt(prompt("largo"));;
let a = parseInt(prompt("a"));;
let arearect =  ancho * largo;

let cateto1 = a - ancho ;

let areatring = (largo * cateto1)/ 2;

let areaTotal = arearect + areatring;
document.write(areaTotal);

