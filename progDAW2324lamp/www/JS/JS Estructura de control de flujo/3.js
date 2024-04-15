let articulo = parseInt(prompt("Qué artículo quieres?"));
let materia_prima = parseInt(prompt("Coste de la materia prima?"));
let mano_obra;
let gastos_fabricacion;

switch (articulo) {
    case 3:
    case 4:
        mano_obra = materia_prima * 0.75;
        break;

    case 1: 
    case 5:
        mano_obra = materia_prima * 0.80;
        break;

    case 2:
    case 6:
        mano_obra = materia_prima * 0.85;
        break;
}

switch (articulo) {
    case 2:
    case 5:
        gastos_fabricacion = materia_prima * 0.30;
        break;

    case 3:
    case 6:
        gastos_fabricacion = materia_prima * 0.35;
        break;

    case 1:
    case 4:
        gastos_fabricacion = materia_prima * 0.28;
        break;
}

let costo_produccion = (mano_obra + gastos_fabricacion + materia_prima);
let precio_venta = costo_produccion + (costo_produccion * 0.45);

document.getElementById("entradas").innerHTML = "Cantidad de citas: " + articulo + "<br>" 
+ "Materia prima: " + materia_prima + "<br>";

document.getElementById("salidas").innerHTML = "Coste producción: " + costo_produccion + "€<br>" +
"Coste de venta: " + precio_venta + "€<br>";
