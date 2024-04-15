let cita=parseInt(prompt("ingrese el numero de cita"));
let precio;
let precioTotal;

if (cita <= 3){
    precio = 200;
    precioTotal = precio * cita;
    
} else if(cita>=4 && cita <=5){
    precio = 150;
    precioTotal =   (200 * 3) + (150 * (cita - 3));;
    precioacomuladoB = precioTotal;
}else if(cita >=6 && cita <= 8){
    precio = 100;
    precioTotal = (200 * 3) + (150 * 2) + (100 * (cita - 5));
    precioacomuladoC = precioTotal;
}else{
    precio = 50;
    precioTotal = (200 * 3) + (150 * 2) + (100 * 3) + (50 * (cita - 8));
}


document.getElementById("entradas").innerHTML = "Cantidad de citas: " + cita + "<br>" ;

document.getElementById("salidas").innerHTML = "Coste por cita: " + precio + "€<br>" +
"Costo total : " + precioTotal + "€<br>";
        

    