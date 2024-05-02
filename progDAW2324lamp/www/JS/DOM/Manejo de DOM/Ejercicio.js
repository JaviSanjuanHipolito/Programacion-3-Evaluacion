//Ejercicio 1
document.addEventListener("DOMContentLoaded", main);

//Ejercicio 2
function main(){
    count();
    enlace();
    imagen();
    ocultar();
    hora();
    document.getElementById("abstract").addEventListener("click", colorF);
    document.getElementById("content").addEventListener("click", tamaño);
}

function count(){
    let parrafos = document.getElementsByTagName('p');
    for(let i = 0; i<parrafos.length;i++){
        let parrafo = parrafos[i];
        let palabras =  parrafo.innerText.split(' ').length;
        var infoPalabras = document.createElement("span");
        infoPalabras.innerHTML = "<br><strong>Total palabras: " + palabras + "</strong>";
        parrafos[i].appendChild(infoPalabras);

    }
}
//Ejercicio 3
function enlace() {
    let parrafos = document.getElementsByTagName('p')
    for (let i = 0; i < parrafos.length; i++) {
        let palabraNulla = parrafos [i].textContent;
        if (palabraNulla = "nulla") {
            parrafos[i].innerHTML = parrafos[i].innerHTML.replace('nulla', '<a href="http://google.com">nulla</a>');
        }
    }
};
//Ejercicio 4
function imagen() {
    let parrafos = document.getElementsByTagName("h1");
        for (let i = 0; i < parrafos.length; i++) {
            let str = document.createElement("img");
            str.src = 'https://lledogrupo.com/wp-content/uploads/2019/01/star-256.png';
            str.style.width = "16";
            str.style.height = "10";

            parrafos[i].appendChild(str);
    }
}
//Ejercicio 5
function colorF() {
    let color = window.getComputedStyle(this).getPropertyValue("background-color");
    this.style.backgroundColor = (color == 'rgb(144, 238, 144)') ? 'rgb(173, 216, 230)' : 'rgb(144, 238, 144)'; 
}
//Ejercicio 6
function tamaño() {
    let tamaño = window.getComputedStyle(this).getPropertyValue("font-size");
    this.style.fontSize = (tamaño == '2em') ? '1em' : '2em';
}
//Ejercicio 7
function ocultar(ele) {
    let hermano = ele.nextSibling;;
    while (hermano.nodeName != "DIV") {
        hermano = hermano.nextSibling;
    };
    if (ele.innerHTML == "Mostrar") {
        hermano.style.display = "block";
        ele.innerHTML = "Oculta";
    } else {
        hermano.style.display = "none";
        ele.innerHTML = "Mostrar";
    }
}

//Ejercicio 8
function hora(){
    let reloj = document.createElement("div");
    reloj.innerHTML = "00:00:00";
    reloj.id = "reloj";
    reloj.setAttribute("style", "position: absolute; display: none; background-color: red; color: white; border: 1px solid black;");
    document.body.appendChild(reloj);

    let parrafos = document.getElementsByTagName("p");
    for (let index = 0; index < parrafos.length; index++) {
        parrafos[index].addEventListener("mouseenter", function (e) {
            let reloj = document.getElementById("reloj");
            reloj.style.display = "block";
            let d = new Date();
            reloj.innerHTML = (d.getHours()) + ":" + (d.getMinutes()) + ":" + (d.getSeconds());
        });

        parrafos[index].addEventListener("mousemove", function (e) {
            let reloj = document.getElementById("reloj");
            reloj.style.left = (e.clientX + 5) + "px";
            reloj.style.top = (e.clientY - 5) + "px";
        });

        parrafos[index].addEventListener("mouseleave", function (e) {
            let reloj = document.getElementById("reloj");
            reloj.style.display = "none";
            console.log(e.target, e.currentTarget);
        });
    }
}


