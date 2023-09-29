var color = prompt("Escribir un color primario");
switch(color){

    case"rojo":    
    console.log("El color es rojo");
    alert("El color es rojo")    
    break;

    case"azul":
    console.log("El color es azul");
    alert("El color es azul")
    break;

    case"amarillo":
    console.log("El color es amarillo");
    alert("El color es amarillo")
    break;

    default:
    console.log("El color no es valido");
    alert("El color no es valido")
    break;
}

let gate = prompt("Elige una: a, b, or c");
let win = false;
 
switch (gate) {
    case "a":
        alert("Gate A: empty");
        break;
    case "b":
        alert("Gate B: main prize");
        win = true;
        break;
    case "c":
        alert("Gate C: empty");
        break;
    default:
        alert("No gate " + String(gate));
}
 
if (win) {
    alert("Winner!");
}
